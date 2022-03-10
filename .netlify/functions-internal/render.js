const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","images/9439.jpg","images/claire-ward-Fy9JXanwJi0-unsplash.jpg","images/enamad.jpg","images/ist-istanbul-port.png","images/iwan-shimko-tCp2K2sYpFg-unsplash.jpg","images/meli.jpg","images/mohammad-amirahmadi-ShZzflXymPI-unsplash.jpg","images/nikhil-mitra-gssCjrDR5Y4-unsplash.jpg","images/off.png","images/phil-mosley-wOK2f2stPDg-unsplash.jpg","images/slide-image.png","images/Spinner-1s-200px.gif","images/Spinner-1s-244px.gif","images/suhyeon-choi-tTfDMaRq-FE-unsplash.jpg"]),
	_: {
		mime: {".png":"image/png",".jpg":"image/jpeg",".gif":"image/gif"},
		entry: {"file":"start-7a7c3527.js","js":["start-7a7c3527.js","chunks/vendor-9a81cf38.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/10.js')),
			() => Promise.resolve().then(() => require('../server/nodes/11.js')),
			() => Promise.resolve().then(() => require('../server/nodes/12.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/agencies\/?$/,
				params: null,
				path: "/agencies",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/airlines\/?$/,
				params: null,
				path: "/airlines",
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/contact\/?$/,
				params: null,
				path: "/contact",
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/mobile\/?$/,
				params: null,
				path: "/mobile",
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/search\/?$/,
				params: null,
				path: "/search",
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/addon\/?$/,
				params: null,
				path: "/addon",
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/blog\/?$/,
				params: null,
				path: "/blog",
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/date\/?$/,
				params: null,
				path: "/date",
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/info\/?$/,
				params: null,
				path: "/info",
				a: [0,12],
				b: [1]
			}
		]
	}
});
