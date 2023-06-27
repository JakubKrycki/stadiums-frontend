import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images.css","stadium-background.jpeg"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.a73bdd35.js","app":"_app/immutable/entry/app.199f2ce2.js","imports":["_app/immutable/entry/start.a73bdd35.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.db5528c3.js","_app/immutable/chunks/index.0378bb41.js","_app/immutable/entry/app.199f2ce2.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.549c00a8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/my-placemarks",
				pattern: /^\/my-placemarks\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
