var Config = require('../../config');
var util = require("./util");
var ApiKey = require("../db/apiKey");
var Dataset = require("../db/dataset");
var mongoose = require('mongoose');

//每個dataset存成一個collection，必免資料太大存取很慢
var ImageSchema = require("../db/ImageSchema");

var apiController = {};

apiController.AddKey = function(param){
	var data = {
		key: param.key,
		desc: param.desc
	};
	ApiKey.updateOne({key: param.key},data,{upsert:true},function(err, key){
		if(err){
			console.log(err);
			return param.failFunc({err:"create api key fail"});
		}
		param.succFunc(key);
	});
};

apiController.DeleteKey = function(param){
	ApiKey.deleteOne({_id:param.id},function(err){
		if(err){
			console.log(err);
			return param.failFunc({err:"delete api key fail"});
		}
		param.succFunc({id:param.id});
	});
};

apiController.ListKey = function(param){
	ApiKey.find({},function(err, key){
		if(err){
			console.log(err);
			return param.failFunc({err:"list api key fail"});
		}
		param.succFunc(key);
	});
};

function CheckApiAuth(param){
	return new Promise(function(resolve, reject) {
		ApiKey.findOne({key:param.apiKey}, function(err,key){
			if(err){
				console.log(err);
				return reject({err:"find key fail"});
			}
			if(!key) return reject({err:"key not found"});

			Dataset.findOne({_id:param.dataset},{"__v":0})
			.exec(function(err, result){
				if(err){
					console.log(err);
					return reject({err:"find dataset fail"});
				}
				if(param.checkUpload && !result.enableUpload){
					return reject({err:"upload not enabled"});
				}
				
				return resolve(result);
			});
		});
	});
}

apiController.UploadImage = function(param){
	CheckApiAuth({
		dataset: param.dataset,
		apiKey: param.apiKey,
		checkUpload: true
	})
	.then(function(dataset){
		var Image = mongoose.model("image"+param.dataset, ImageSchema);
		var newImage = {};
		newImage.lat = param.lat;
		newImage.lng = param.lng;
		newImage.remark = param.remark;
		newImage.dataTime = param.dataTime;
		newImage.uploadFrom = "api";
		newImage.uploader = param.apiKey;
		Image.create(newImage,function(err, result){
			if(err){
				console.log(err);
				return param.failFunc({err:"create image fail"});
			}
			util.UpdateDatasetStatistic({dataset: param.dataset});
			param.succFunc(result);
		});
	})
	.catch(function(err){
		param.failFunc(err);
	});

};

module.exports = apiController;