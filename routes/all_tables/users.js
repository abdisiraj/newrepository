const express = require('express');
const router = express.Router();
const uuid  = require('uuid');

const mysql = require('mysql');
const xlsx = require('xlsx');
const path = require('path');
var CryptoJS = require("crypto-js");
var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
const Buffer = require('buffer').Buffer ;
var http = require('http');
var https = require('https');
//var fetch = require('node-fetch');
var XMLHttpRequest = require('xhr2');
const fetch = require('node-fetch');
var FileReader = require('filereader');

//create a connection

module.exports = router;