'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1226ee89d39cada09ace691e049222a8",
".git/config": "04abbda2b342a505c275f7495a8d8496",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4da77c8ebbfca33c7ff0646032dcb285",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "21b2151d9e08a370aa175ecb8ceb5875",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4e8a87f36698773361984c2f3c0f77b1",
".git/logs/refs/heads/master": "4e8a87f36698773361984c2f3c0f77b1",
".git/logs/refs/remotes/origin/master": "6944e3d643a217ec14fc0eb9d7be2da5",
".git/objects/00/227741f32d2b68c6561665795d0006441c26d3": "8e68cef5013e0697913b29ca80477f76",
".git/objects/02/9d559d09419a744c9104b1ecafa1c9a2ec25c2": "e9c8e732f3b81429e866c3caf42e4f7a",
".git/objects/03/e7a45a9dd9eb98a9a05e037ef6914b5e2a7c20": "5e7b3231917cbb07f9013c4c94b6c794",
".git/objects/04/93d501d5bb315240c2e1d35369933397cc217b": "389555f9bb6449586726a720dac50ec2",
".git/objects/05/49a2303a7c56f73950bbf89ee1515328228c45": "f011f84659df84a4e8073eae48e70223",
".git/objects/05/621ce47d7a99e10b7cb5743b0b87aa3a557ce3": "d39f2dbac8d6297ef82143ccc7e0f7a7",
".git/objects/07/2806806b3dde5c4515db62c88a955358e5b660": "bb0d2f7c1d0d134095e88c966eeb3f21",
".git/objects/07/3880775bfc5d01594b492b9023ad0aa93dd513": "c759395376f72ba107cc6381e8d74559",
".git/objects/08/8a9e799b32e5221d1d90a7ecac38238a7f7426": "3d197d771369fd9510990b610b326750",
".git/objects/09/2327b1d5749f7cb3df93463fa936998ed67a97": "2f8d78d6c5cea78da98d06bd56c31231",
".git/objects/09/83e9b732036ac17ef1814c40a4456789641b86": "ba27814cdca0beabbbc2741a231e7b02",
".git/objects/0b/492e9ca69ca4df673fcd13403233998e9b8d89": "a28bb84909763a90ac1f494c74bcf027",
".git/objects/0b/4deb675c745ed18b14146edb3c6f5e3bfce458": "f68d7fe6d45a0fb84792c41b3a565df9",
".git/objects/0c/7e6492bb7739fa6338bc850af1988cc926c192": "731bd919d1d9c127565c59e73ae6e11b",
".git/objects/0d/0588c863dff06e46dd72e2d16441706c724b43": "4d27b232740b4d8d018bc5ac86716ac6",
".git/objects/0d/84b274bd6c0528060d126bfe11e91e2f783d2f": "b588970a918d68f2a1fccddd69926cdd",
".git/objects/0e/db98616c9b4df70df8be662d1a48b869e6df2b": "a377fed4cab2bf5dc42604e70dec32af",
".git/objects/10/cea912e7589a9f9e992c4b4950a799356550aa": "dfa63d203c1bc8d792e49203be95e46a",
".git/objects/11/674c13fbb34b88f96378c5663a60c00fb9b36f": "cbba6262e86adfcc90ea2e5ce4269d34",
".git/objects/13/dbfedf804267db75035de0e36999cb4ffc80a2": "3985f0b3f90d12a2ef5ea2f592ce3bd8",
".git/objects/14/13f6b6e804639ae362847e246833cf39fbc594": "36097587522a4cb3c0aa3fac6d0e82f6",
".git/objects/14/1a2e1f0186b0533401bb9e148af3cd30933065": "740e6b5d1a83faf0f6e79fe57cc6ecbd",
".git/objects/15/85814d2cd6bdd64acbd4fca04fb4c20acea939": "3fe8c260f149e4d1303373cca2ef9618",
".git/objects/15/8803cf1efeba14af0ba279b0c22c9363f609d3": "1f48b1e8d6b09d3882daa49df735bcc2",
".git/objects/16/ca170303170e2fcd2ca03521a79687fd9e2c67": "842d25a1a718ac85eb457ba3b5d36add",
".git/objects/17/2bc6f0240b663dffd166110ae8101357caec21": "747520f2c1341f082384c2cf9b3565c9",
".git/objects/18/2462594fffaf6fcc2a94e0648421a92bfae4ea": "b1bce941a3c353ad717ff163c76719cf",
".git/objects/1a/d48bc42a5cab923c4fcbc5df0e0c15e827878e": "721928824233626ed140295e46ed51c1",
".git/objects/1b/f7b69c582f7e0914d715ca87e52b6b1f48bd31": "d53f811e077b400d640244570267318e",
".git/objects/1c/b26696638b1d6bcd95cc23d077b7bbf9c093d9": "95fecffcf792c1633125db047ce9383d",
".git/objects/1f/8e6b334159316a2b491814379ed22a02c120a3": "44cf84e640145001f966986734de0708",
".git/objects/1f/9fa6a5d902cf561e436e4ff4227b718976bde1": "4b0d3936e55d84f279e553a4c683e551",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/3d54410d5fd713213807424f3b4c4056788819": "fb377f93b59ad21a12bd79048d402bbc",
".git/objects/23/9ecb754336f5d64b3373331a39c2813a8b6db3": "065b4b51b4501b1c8ddbe04fa4f6b388",
".git/objects/25/de1840995f0cfd081c27eefad2e2719d06559c": "eb29dac54f7176588a253e1b51a930fe",
".git/objects/28/5db87cea8e461fd6f8e9cda52af849d752fbb3": "18a7cf82ce0fc1aaf812ac86c0583927",
".git/objects/28/f3d442fef4d55198905162aabd5af0a0b02cc4": "707b27efb6b05d79f72a18aa6ad091a8",
".git/objects/28/fe6253ae81bba690033a6a4e9a07ea437f490f": "9a27363da17d43bd39f0ee04f39c41b5",
".git/objects/2b/81da89185e16bd68f44f880ffdafea5488e68a": "63ee3d57bfb1af1d6611516bed8a4794",
".git/objects/2b/9ea5572e253a5438c189cfb74d0c86b31d22fb": "5aeeb3e652ffd8cd0c91d1e18d71c0a3",
".git/objects/2d/c3d21d153eea5b47f2d39ebbc507cba5f18b0a": "d5ac83fed49a6a754a286031d27837dc",
".git/objects/2e/ab2dee544e359086ac73a9bbe5928e91a87bd3": "37573916189feddb2292074a8361874d",
".git/objects/2f/3e56b9e9aa3c48850ded158dd5b9d2e4fa7d49": "79ba0be012202f7de55fe4032bf5c81e",
".git/objects/30/0c3c0749cc20430d7be2b0737d77b5d5921661": "a2ce07d72e6ebe0cdfa9f7351f843fdd",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/59aa68e5569535e204959adfdeb3b106c02641": "e981010108112d7f2d5da64599c68c6b",
".git/objects/33/4a8cdf4c4df09ad6a87575a1033ff8268dabfe": "a04b470377c3ea1290320b8bad2cbe82",
".git/objects/34/dc426d6cc64eab8f2ab4a2980af63571bf7086": "485deebdb456d276df47fb2c1939d874",
".git/objects/35/9817c1fb91b57e1e035014970f521c4d3791d0": "53946b81ff57f6823ffdbf5221991772",
".git/objects/36/205b436bf08fd739b3926439e8f73dd7fd4727": "3400cdcb07757098d5b0b6217df7a193",
".git/objects/36/c17799095937c168062e131cf943004dcd375a": "4d94f6e119057a89c812bd445f52ec1d",
".git/objects/37/499fe3ded3962829eaa36c477afe85d30852fc": "49d71681749c8d39d9a3fa0da64f9f33",
".git/objects/39/07bc7c569738abd8fe68b1886f19f081705575": "13ab4865c53e8f3736df4f04895aea43",
".git/objects/3b/0f889c1c67399e3acf1d399642fba1133d1b27": "d1333f3dd0214311b99a6fbbd76334f7",
".git/objects/3b/320fea5c10a84a45bd3ca61b776b21892812f6": "211019d30fb2bc657bdaf2c0f267cbca",
".git/objects/3b/b75ad3cfbac0f7a5cf1eb9ee1004d9c95632a4": "d65c0b77a06193f25ad47568eb2c5c68",
".git/objects/3e/06fbf6317b19eaa39a31a4ce33af817293d1f6": "81788dd6275c3845fd938681198615ac",
".git/objects/3f/5e7f5837b5facb59fbadc547e0ff972ef4474c": "98a3940e62164187158dd9314cc916d8",
".git/objects/3f/c94c1a43e5edfe01d8b4043662716e0602f879": "b03b8c9757f1325c203295f1820f0c46",
".git/objects/40/66d880862cfb80b84a104f17cbd57368185aa4": "a72e81d1e8cf46b59fa64c143b6032fc",
".git/objects/40/94bfdce569734409954546729b5a94da896620": "09b03e0ed8c78ce98d85f4892d1f1f04",
".git/objects/41/ae8b30f5c50c30b62001a040c4a09e281db09d": "1c8ca8c65a40fcf2cafc26737ced9d3a",
".git/objects/45/7ccd6c1fc9c86d43c0169aac3c48ff75130b49": "b1c658e9ac260fb02b7a6b4d2a4c28d3",
".git/objects/46/1b3852a3bcde3eb54a3ac387f2609a58bd59f9": "e8f1d441838948b27e8911e78614e996",
".git/objects/46/cf3d48b046a58e40f92a7b8b8e5b6ad046c9a6": "400828f580761675d8c5defb8bc19f5f",
".git/objects/48/f0b35fd9b4fd78ad1ce5b48e6f16462c77c2f4": "f65568d5ea2f3eb79684bb1fbc48aed8",
".git/objects/49/8cf50be5e5306e02918e9bf871b52abdd09ca0": "0c703a30b2c4f9dd82de04b06adefc7e",
".git/objects/49/9c3d54e11fc208a71485c8fb4deff51a40f8e1": "8e98e02bd14f55a31bc991c62e3091b2",
".git/objects/49/b3dae9fd2bf0030648f8317072dc9765ba521b": "f7937d504c304a97cf87368fb5638748",
".git/objects/4a/dcbc3d5877f2f38af65aa564f29b632c397fc2": "cdf54c74a279104d76e2f357076f6e69",
".git/objects/4a/fdafec8425821acec9e23c0ff005672a2ed575": "14f94287d0c316c8d37bedac35a16ce6",
".git/objects/4c/0b2c989470e5ad19c58cb7aa8d0c1d3e11b8f8": "fad2c94ee55e06192269846bf0853583",
".git/objects/4c/1244e52c55aaa6eff98b8763045a8c7ea15b96": "dfc27f49558bbf2b8722703ee3ea7bf3",
".git/objects/4c/3314fdd50f8fb0d532933fed8a4ad58ef58942": "e209aea96f28403189e4330e224157c8",
".git/objects/4f/5a40d37f2260bc797585e616bcc6a29fcd2df5": "e40deae24c2495e23ecb06670f122869",
".git/objects/50/074db99ab1fd497e8abecefe35711393170548": "7ba8f637231258ecd5645bc9be148352",
".git/objects/51/34780af20dec3d3d1e30e897751555e572cb57": "3f2486caaf994d078c7f76ec92088a08",
".git/objects/51/7add5a2275b9d3931642c36847cff85a766c1c": "bcf68c2ad1420794138aced881b65a4c",
".git/objects/53/fe06e40dc2ff668f88276211e60b92004f071e": "858e967345d49bca406f13a8884acb06",
".git/objects/54/340a66a1d6974fc7731150ce91374645c8325b": "138c25c3b68caa113ca1e3505491112f",
".git/objects/55/60228b8ddc551f146a1b0a0532a43947656f4d": "0424496bfccf7ce42425822d4a25024b",
".git/objects/57/218c29bc15e72d7040cde72171952a6b3cd11f": "59d4e4899dae13149bd5ec1e52a32ac4",
".git/objects/57/86ebc7c7430c374d2ab5b73e8b32d73c15550c": "90f0a43a7afc060045320b8833a9ead0",
".git/objects/5c/b5d2da82a05c4fd667707d5ffafe3a8e249279": "fad5868f13ebd94e09c74e38f5acaf6b",
".git/objects/5d/0ba2ae5607b7c7b3f8bd1c3e232b92f16be00a": "83e7d4e70af78a000a510d5e2db24064",
".git/objects/5d/6c44bc0769a4fd0746a7a8d5f984a76c349567": "6a4f16fa3bf32829cd2fa2caf85baeca",
".git/objects/5d/d19aa9d2be5ea49ef02ce9624579b7dc15e9ed": "2e997fbc69ca228895ed2143562eb13c",
".git/objects/5d/f0b5099e8b44b096249159ad0296956ecebb41": "b9c00f2eefeced18ae9ca754d0ff41be",
".git/objects/5d/fce0686eda213ecd296b11d6b95e8311dee7ca": "b8ce9b853edaf1681329813192e6ab20",
".git/objects/5e/e94a7b6fb1f29e0dfbce663719c81c3b91790e": "f8eabffd45cd351c4adba144dace64ca",
".git/objects/60/f8c01ca1fe9c78f746df635c964e9ef10ce317": "7d69666a27ba7cdafcdad6c1591f1a9f",
".git/objects/61/ef141c38ae1dc27c988ba8590dfd6899fd9ecc": "d5ac6461c53c19c6dedc8ce06d93bd79",
".git/objects/64/cb721fdd9c06942097392a54560b733601f51d": "27f59968f84bd30686553f8a665d0c23",
".git/objects/66/00b224d1ea02e5052e12af8adf061c9706abb3": "344aacbf928cdc9504fdcbe0d8f2eb3e",
".git/objects/66/a6740bf911fa130d06941232d10749ab725fab": "6351a6bbad86db676eaf643ae069018e",
".git/objects/66/f4411a3ec196ac915aee54ae77d48191724a2f": "74281881606f0264c53c2dee09f8a253",
".git/objects/6a/80e375152480326544cbb24be56a662b721c06": "6bf6ba06c76443771cb3057cf7393cef",
".git/objects/6b/96df0295932fae907289d92f2dce3dc852d52e": "515c957d286dc2e36c5277b88f1556ab",
".git/objects/6b/d2e9683da089fbb53593a1e996fdc272644965": "2273a09b6029d667b04c51ed047fb0b4",
".git/objects/6b/dacb516d7f3f56246c3ec9ddcf6793ebf0b59d": "7142353bcecd5b58fa890fabbf3aaaca",
".git/objects/6d/32d8116eb34c58635c1e698bed40daa115d578": "9771f4f3db7de9ad42a1e7d06ee24cc9",
".git/objects/71/be8484a4e8bc95f1196a2f022be5e655ba970d": "d803b890c7906c3298d141f2b1f11a23",
".git/objects/72/9be6af7f475b58799efbf384502a9e2da2413c": "58d893da5d303ebbe71cbc1583a87704",
".git/objects/73/564b810eacd3826c09901b334972ccf857716c": "eb0b83e82d21ef625c3e870b93c9fd09",
".git/objects/74/75528bea9521fee65646dc3b07893a9a45a5a1": "67b1980423ce092984ded595b9dcaf44",
".git/objects/75/70dc71634a4c48a26f9b8b83100cab853ce463": "e105a2ad5b657bdd8a2141fd7d40dfe2",
".git/objects/79/66b33324a16f8e5cf7a5da20e23f33f0a1fb4a": "2bcaf492f7b0753349536962b4f8446a",
".git/objects/79/8d0cc257de2374eff064be10ae9766fd6cc5dd": "07742dda9eb4e9746d750469f919553a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/0bad635bc8665c5c8b43f5a7980a1107fc4962": "55f8aaef36727e4486ed8f84bc964db7",
".git/objects/7a/7669ed1b8754c3d2dcb6213e1cd676a337bb3f": "f77722b40a91d4b3117788f69c253624",
".git/objects/7a/9397e807632f58a2a9c196d8865143553a2bce": "4ef72326d5e298f2bef673bc3ac9f9dc",
".git/objects/7d/af735ca8860d7b65555fc1fd5f1e78237de4ed": "8aebf37166f613e0027ac34f9ed18479",
".git/objects/7d/bdff51d5966cc6be8fb0becf4ce459f607a683": "11e9742009f1ee404eeb96357fa14952",
".git/objects/7e/d0d9cc3afb290b1f11b74666f449fd2d64acf9": "ecf2c262d3363349b55c5efd4971e7f9",
".git/objects/7e/e2bff5972da68e6d171e953cb4e65b4c5c6439": "53aaeccbd72ed43e129d2a6421905d4c",
".git/objects/7f/8aa4b0c5e76ab974e257027796aceb6529ec07": "fe3c70f4c8b2316d7e484ebc600e0022",
".git/objects/7f/cb892ce1785764d1a9d2b0e56dc80cbf066044": "86c1f8466f4cc6385f5ec9539e171b72",
".git/objects/80/9895ef570f356d9d7b17740f128abbd80a84d6": "dc4d521e1041a65b9952557bba6917f9",
".git/objects/81/6933f5f5b1d9c55d727b919dc81d0f5f747ae1": "d765c6a8eb0f36fa469a7d8895604691",
".git/objects/82/6e4953830b2fbbd8dfd46ffe19e9fd2b399425": "76fe1e7b1866ed172aab1a04054b29ac",
".git/objects/83/8d1134bde010d49e3c4d18096f21ca5d609719": "64e0e6dd3304f92d2a993786355d501c",
".git/objects/84/1e0170a628b8c2d470357fcb74a195348e44a9": "104caa5d3c25c8397f1718ab1fd5c485",
".git/objects/85/e50623f20699b808756eab5022bc82f95eb620": "efb0a865340fb3e8d2d2d92bd2aaf2a1",
".git/objects/86/f18f16d07bff1231ca04f1b6d4e30db8a29e5d": "5b788db429ad3dd20c7e81d83fbabdb1",
".git/objects/87/501853a42b539526bd6214d388713929f7a9ec": "7d822ca827288c410dc0c9cbfc2f48a7",
".git/objects/87/fd19b267a2fc8cc13c49b0979dc4e3fa98230e": "ef84e699d5d5a231a0b41269a22a2ffc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/52a485074052002b74451941821c84d13497f5": "9180cba26b034b76c03cca65f9a2c33a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/3947f9f24b46bdf2c05cd5e9bccb14be1afd3f": "1fa8951de86237c8630259026d2b4c6f",
".git/objects/8c/dae011d5172a3eb654c38793d6a923e44b2101": "96032a23655508513fb86a005644dc0d",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8f/7388dbb1060021529d7151b630c78749ab24d0": "8aecc97ebcdc9434dae18253c824fc1c",
".git/objects/90/4ea5441f480b9f212a0813def32716b0435c55": "8146b0229e9262da58437473c7b35bdf",
".git/objects/91/a890dcd439de1a8a7da50c0a33b741ecc9b2b1": "036223ae5e3305f71e7488a0d2c33e2c",
".git/objects/93/cad2967ddbfa4c7cce47e9759f75861149aec8": "29383c230532962b0d350bbb70070668",
".git/objects/94/3af287c7ae4f2a6f3ae8ba12d360ef2be788da": "d045d37d8471cc1163ad3212115d6461",
".git/objects/95/eecdbef7de370a4916a31faeb421c69d29e281": "ed5008ffd792946494383715031edef7",
".git/objects/97/c192bbb00877223b2b8b5d29c1f0472252ee07": "b50e0307781afedc0c0e564f3ab8c3d3",
".git/objects/97/fad8adfd763f33d07ca8c646095a0334ee026d": "b95219e5f31b2a345eb3c2a49217b6a5",
".git/objects/9b/e378284b3a18ea00fb4f338b22f7fd5a96e75f": "bf93a9bbff8a576407a98a0b9b8e55ff",
".git/objects/9d/d2f5e169d405e9ed7d4936442779c7c4cad5c2": "e263fcd0faf5ec43c3395299b67a8aba",
".git/objects/9e/4b0cb3af8dad32015d0d7d86c42836386b677f": "5e739b21344f4168311a02d2d0698dfa",
".git/objects/9f/e54d8f2d4a3a57f5e90811403ac0da78aad5df": "7d78e9301e34057b0b28e5e44c3c0460",
".git/objects/a0/a627f58c6612ea801f535b687eba325a713cb9": "f0b80a58078e1d52900f8751f96f38a0",
".git/objects/a0/ffb4bb26aa1461ddc05d5974619448b499456f": "bc70e5b394acdc2746b09eaedc7d22d5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/59167db559de8014b359ee5319503847372ce3": "d6d8854f4a44a6b24e1bda6736dc9bca",
".git/objects/a2/17f0f58b306c3a9594d3ff1ca8ae2126449c12": "4d0f4108779b3953514dac57f25a8dd9",
".git/objects/a2/89204a1d2fa55f246875d4215cdf7580ca1838": "195190430be16081e2d2fc4eec68932a",
".git/objects/a2/a21972c655a40f11bf5cc22872f73e67b9836c": "294038237419f365140e349121eb5a1f",
".git/objects/a5/34524a5ad194b82116681c71829d80f0b01a73": "257799e7d0a594b2ca9828685a410bfd",
".git/objects/a7/c03d9cc9a631f92246b8c3a914539afba4fcc3": "79d80611b0288ae760abe547cfc0ce41",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/31f4b155a6fd3fd6340948566011416b5eda68": "bc873764f239db7d9e0c2bcc2bfa2189",
".git/objects/ab/a6de47c858d14ce90b6532b496ca3ce0b6765d": "818e22119fbe04d80c4922ea9e76daf1",
".git/objects/ac/823aa1b438e7c28e801c6cf50d41833e82ca3a": "d6162c131631df7636f6c32a12be64c1",
".git/objects/ac/fb60222b080ca774f6b837e316d960cf31e767": "4f2d728ec3e02e205fc24da270f774c2",
".git/objects/ad/318e5fcbe2c8c50d50c006856d4b243e7bbc9a": "4ddf1152e788940be6bea0018df1fd0b",
".git/objects/ad/9114d7438ff0ac4efed4c8f7824ab6dfdb99d5": "569a110e639dcd4d8bbedde7cbf075ff",
".git/objects/ad/c51518675e3b8f35e173579ba36537178258bb": "3750d326d3297751959fb08f0ae71141",
".git/objects/ae/520ff8b97cc36ec5e0398dae02aabc96c80d6a": "7da3b0d83aafdbcf88d29c63b7597da4",
".git/objects/ae/9f1f29c6404088c3dbcfafed9756079d1b9ef3": "a5d8181e183a349cb02552d207575328",
".git/objects/af/0f4060dbb12044decc4e07cee73369c7a1c80b": "e07195823e800944f570b1eb36f282df",
".git/objects/b0/46bd168237a58ec43a0f8ce83676c2f653d33e": "70546beeb02fb9eb649ae157c3167b06",
".git/objects/b4/e411921ce2d2b81c583f1e80201234367d33a6": "f01605b49b568b8638821b4f21abee37",
".git/objects/b5/a56b3163cb36363dbbc7ea436a400ee96ed5b1": "3b2c9d4ed034ee0f90fb0386e172a0cc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/7a2a9da7a6b4a8cdce70fb56fef363ac78913a": "05593908189720d341497802fca82f68",
".git/objects/b8/285c8eedffc2327ca4e450c53f7c17bf53519b": "84be1f86731b6cdd288fd50816e4685c",
".git/objects/b8/ec4c53fc984aee37d6dec762e6020659f924b5": "b78fe5f2f365e7881e57b9f18c271a4b",
".git/objects/ba/3b7bfd8ea921f77784c59b62957eb8020a4758": "a0ec3d74e1f232034e91a4e77bf6b966",
".git/objects/ba/fd096aece55544c49d4279fc7c966dda536bc2": "c7b52262986a56e76f99455397683705",
".git/objects/bc/149e88a1bb135516b8376263d8c48af9f41387": "be0d2ad3cf973799aa609607b6720bc0",
".git/objects/be/271dd6fd64cca2a71435e7f3ba541f3358f527": "9038000b168dbd05c0b7ce81f47d59e6",
".git/objects/bf/8ac3cd796454462fbfc6cd1a48b2024cb2cbdc": "de32e8f00f95d9c2abaed128607a8f18",
".git/objects/c0/51c110c1e3432acb69b3f72e7e11b119db8933": "14ac01773b566b8c8b3b36b986518b19",
".git/objects/c5/7bc1e2e386bed7a6e2cd6afbfc8a103ea13f66": "d50f7b59b8e7ead50aebd8bf1a3836f1",
".git/objects/c5/a27d816a6452429a69607a0169d82d64f5e56b": "0f31b80915f187de0c34f25038bd26c8",
".git/objects/c7/8ce351d15a5e87e0e7efae110428937adfd7e8": "c87bad482def97f43c917a55b495b4e2",
".git/objects/c8/7fd14630458879238c58ce7c1ca4c646179e2f": "fc454267b9c6740d254cf01c624c0051",
".git/objects/c9/2a8eb025da5630daa22572d6b0c9e9435da04e": "1a9489ba22b3b499927a5574e3111db8",
".git/objects/ca/ad80c593ea26f01e9184a76e7c0a3b75c3286c": "7df2596e5aab778c5f732c1cee646fb6",
".git/objects/cb/5db7933e5fcd1b01eda139b67bc99b883106dd": "48190606e4348a2c37e1f948bbead150",
".git/objects/cd/230997ea992af27e6064088d64958c5680e1e7": "1ea948dc0e01e309e80a378b5bc79366",
".git/objects/cd/6700d3106291570671c50e171eb9f793f49341": "75bcc3917f48187994c7b2f229a45203",
".git/objects/ce/9218c5548030985b971592425c8e90ee0b74ff": "e13833e321dc1a8772fd7ee82eae6d46",
".git/objects/ce/eea96ee24a6ba06b0d977c937743a159aac33d": "d2a4ef9ff9c2d4115161b7e126838fab",
".git/objects/cf/7c7b351934e6e84630484d2e018e4bcd99de65": "36c0465ba25c8d21d29440d8da7378d1",
".git/objects/cf/acd69dcad9f961f781596d351a56eefec01642": "55783acadbc3645ff97e41051fa16a53",
".git/objects/d1/3ebf742e12c3fba4ae70a53b78a11d8682958d": "4a33a5579b643445131ddf58a1a78d8c",
".git/objects/d1/5b3cff62ba0dc3ce315e5bf478e1b89df61a3a": "e6f628943c6d240bfa0ee8dfe7f06b00",
".git/objects/d2/25cf78b670bdd3acc3250128b52aef11315def": "4038035f44cb71248b37bed944f3fa6a",
".git/objects/d2/2e26c2f27920008f497e814297c36faaaaafec": "d79b6d1a2827a91af9a9d36318562ba1",
".git/objects/d2/9c694e9a749928769c557fa09491f1167358b9": "39f8c9c0d621ff54f05e7ab4399ff467",
".git/objects/d2/bf8bcb31b77680e70f212de9161faa1f21ba4b": "c561085595f074cf4ffae2b7f1122137",
".git/objects/d2/d96bbe0ebf840e5806e1b297d19679b5e15691": "f4cba27f0036d25db054f749182f1d53",
".git/objects/d2/fe33b2468355468b5c98984cf83df5b230dc7d": "d4317cacd08e3afe998ab7348dba57ab",
".git/objects/d3/fc789f1838f858ea2b803c034ab26550cccded": "15eb01fe6a41d2a7ad9b39fb4fabfce9",
".git/objects/d6/0709b87b64abf792764120dfef2d16bd6f86a6": "cd4f38a1ab43ce3080dd0c6685f2ffa4",
".git/objects/d6/15d9a3286b26a192d2934c4b70f29f678ca7c1": "360c270553fcb33bc2114bdcb0fae127",
".git/objects/d7/9396e9f2afe26a9efb4c1d738f1faeaa8dc0c6": "7d856ee05ce99784e0042253c4bdf396",
".git/objects/d8/827f295dbd30c1fd55ec4265bd1877d5126453": "3922ad52c3c5923e8f14cdd6c7ac11dd",
".git/objects/da/929d15e54ecffa095f7e485199a9503b3dcc6b": "4c10a2a171e9fe131715b6be172c00fc",
".git/objects/db/1be497f70726cb33b0d3a7588fe1911540cefc": "f333df4e2e7ad5e5916fcddeae774831",
".git/objects/db/5e88aa23c5269ace6e5e18448772c7e3af1538": "c1d159ecd44df747816787f48c5efe9f",
".git/objects/de/3a11b0912bad94795deb4e6100ba33fc5f01a3": "2be5e6cc531d7df73ba1fa167c540d6a",
".git/objects/df/47c709a1e812769adcc231c740f4e9d24386bd": "64133615dbce46845d05678de17533b3",
".git/objects/e0/3a9af30721956038d5f61d54c85275b863dc2c": "89c053b80444182e79e638ad27dc9472",
".git/objects/e1/083ea7409bdae734a54d73b2d42edcc13b1d7d": "ec113368a775ad6780cb6f6d741e07f1",
".git/objects/e2/163a343d6a34e71434d8a120f0ef24f1ec0e6a": "46b9d433d09defdf00abaeefff77bf33",
".git/objects/e2/a4144283ca4b0c7863cadbd50e736270e0b334": "9b9c219624994f1cc0d7e47cd5a37317",
".git/objects/e2/a68e1b31ae8cebbaa8f46400d24976a8d8df2c": "303dfe76308973f533ecc551dbb6e441",
".git/objects/e2/afb21f03ee242d524276e9f8bead7117b9b7f9": "7edbafd7accd98f513bc20d9a3554537",
".git/objects/e5/6abeea883389cbc1721dfcb9f89a1164fbc9ab": "ad2fa754d157856dee8286145fbadd2a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/f8fb696953427f6f7405b1aa9e5f8a139dbb6c": "fc26a3bd577712e5aedc5eb616138d79",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e9/29f1a0b69e193d682607dd9200bc60f72bbc47": "61b38b64b0fd12c0f0acfcb3add8402a",
".git/objects/eb/608049fada96569e88e62140c8d31c4392e73b": "4481d1a9e97ce56d36e2a90c05de378c",
".git/objects/eb/6abd22ac8c6389654ce53d5a443a0e68571a31": "b1f7049d9ce0aed8f5857a7205f768b2",
".git/objects/eb/898c9ab1335db39761637a717d9d3444ae1338": "51bbcda9e844af00fef7e87f49893904",
".git/objects/eb/f8f0e5d1c0556fc7422edc5c6b52ee52b9319f": "115a6b54da0d8f5dbe00dfe6e1e84e1a",
".git/objects/ed/58e33478db79def7aafce002fce9c77ee4ab14": "0594d4cb53a1eb2a1ef572db9956d986",
".git/objects/ed/641131d3a3d381123611e67ff7b140151962bf": "e94a281b639fa92cd5dcdbf7373f8e85",
".git/objects/ee/0c5f38c1fbf5ee364d3a59b11bc462d593c891": "1f6c4a21fea9c016cbe0c34dac7b6372",
".git/objects/ee/7946595f3534cf3be2b9fc1436cfb63be4d473": "416d4a7fdb31f7e74c642b4a2d2d7d06",
".git/objects/ee/a7a845fd21a6cac4b66052c05beccd8d6b4eb0": "f3a582d8602346e601c21bdc3e40ab38",
".git/objects/f2/89c88dd6efbdf9b87b4ebac8fd6a1d9d260cd2": "3c2d29f85c8788f63a5f4ba744e673b0",
".git/objects/f2/eb36f61b6fd811933a41bd6baeb9bb7f8c3c69": "49ab20800ca28f513f69c9f889c93202",
".git/objects/f5/6c08db028b223700f5b0c1d7ca9dc255de31de": "7d4cff983f706156f04b2b0a00627281",
".git/objects/f7/58e0d651f34e956dd0d50828573b81bac11a31": "303cff333113bcef93bb7897a8943f89",
".git/objects/f8/466e07897a546cf2520cf3273a010dc84cbf7e": "6f2630b21c5b37383abd4595c48d59fe",
".git/objects/f9/ee14f36aa842754f21b712b55c9b88885e48c5": "e182623742c1d92ced1b55c191f5c2d4",
".git/objects/fa/3e5fe9a662f40d77acf49363e8db49959a8f8e": "ac3b06564d37993b4d9214b3cf259873",
".git/objects/fc/85fce0a4966b0dffbdd755ff163cb53da063a8": "743f638165194fa80db65c716fa785af",
".git/objects/fd/e1ba676afb1f2cae30e8821b48b1a95d1c5ad7": "8cc19e66ad801e84f3fbde56cd4e5896",
".git/objects/fe/ae099299637177bd6947a37b5c5d68b52b9456": "cb280fb65a2658069cb70439d4533527",
".git/objects/ff/83c18b2da03493886d5ba3f6a870c1f385528e": "8d1ea0d621495b44fd23a0597638facc",
".git/objects/ff/d8c905995de075533d06135286992fd4c54dc5": "f769fb4a11ea2a19d6cac75d558ee7b3",
".git/objects/pack/pack-9579de305f0b8ac00b63d1d91645c5abf4d49ade.idx": "5e5a70b352b3b9769146e1b298260aa2",
".git/objects/pack/pack-9579de305f0b8ac00b63d1d91645c5abf4d49ade.pack": "77fb7006ad79ba2b1f5814f52f770c88",
".git/ORIG_HEAD": "1aa1cbf43b8c4a791b8babca6c0ec80e",
".git/refs/heads/master": "910010a03ac4f430915a20f38660e8ee",
".git/refs/remotes/origin/master": "910010a03ac4f430915a20f38660e8ee",
"assets/AssetManifest.json": "0241cca8fe0a811524ff8a744f87a118",
"assets/assets/i10n/i10n.csv": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/art_of_war.jpg": "2a5bf99802d48d5046bd61a22c0b4df5",
"assets/assets/images/carousel/medium01.jpg": "7a9de24af2edaf7ca5da01a81763e389",
"assets/assets/images/carousel/medium02.jpg": "9a4f12a8856f4fd0b3e22e084c820729",
"assets/assets/images/carousel/medium03.jpg": "561023094c920254b2d5902e6c760a2f",
"assets/assets/images/carousel/medium04.jpg": "21dcc6c0652ee1f4e7a5b412e7e43cdd",
"assets/assets/images/carousel/medium05.jpg": "4b176bdf94354621dc5932ae37acddc4",
"assets/assets/images/carousel/medium06.jpg": "2759f34a5c2f70f27ecba913ded4529e",
"assets/assets/images/carousel/medium07.jpg": "f179103378fe59651564bace789fe6f9",
"assets/assets/images/carousel/medium08.jpg": "56a4920fb89adcef36338299a613ce76",
"assets/assets/images/carousel/medium09.jpg": "682b3a2788511e1ff709393f9cd432cd",
"assets/assets/images/carousel/medium10.jpg": "f21926cc68b2924801a3af30612957cc",
"assets/assets/images/carousel/medium11.jpg": "d7d0030bef9a23599b510e5a17fa4eb7",
"assets/assets/images/carousel/medium12.jpg": "89be641309a0eea14185c64041a30803",
"assets/assets/images/carousel/medium13.jpg": "639761c43e959fedc7fc87442f037cb1",
"assets/assets/images/carousel/medium14.jpg": "9cabac071a5d7f352ef58897c796db46",
"assets/assets/images/carousel/medium15.jpg": "5c19852187a32c975933fd095592516b",
"assets/assets/images/carousel/medium16.jpg": "a6b420fe2a2fa84b79156ab5c9e3565f",
"assets/assets/images/carousel/medium17.jpg": "33b4e8dd46d25fd8c71138be45b1e833",
"assets/assets/images/carousel/medium18.jpg": "55cb948a34a37811490168e8f62e9a1b",
"assets/assets/images/carousel/medium19.jpg": "325b10f2cbe0ae0f7f5cfa8ba5b97f6c",
"assets/assets/images/carousel/medium20.jpg": "a4a8871657e0e02fa997c19471a5122e",
"assets/assets/images/carousel/medium21.jpg": "a8e10dc869f5bcb021d43db239cf6f62",
"assets/assets/images/carousel/medium22.jpg": "2d251ade1a0e81ff68a61a364db231ab",
"assets/assets/images/carousel/medium23.jpg": "6d051fd4a65b1c86ac320f85ed12cea4",
"assets/assets/images/carousel/medium24.jpg": "5463c001943d1f50636b7af54485eefc",
"assets/assets/images/carousel/medium25.jpg": "be9cd469ebebc434d7eef9f09bac2c31",
"assets/assets/images/carousel/medium26.jpg": "687c635be51533c7df40aaf0d6c6c50c",
"assets/assets/images/carousel/medium27.jpg": "76411e58b1b56c30e4ac98b0921cc448",
"assets/assets/images/carousel/medium28.jpg": "82f8c5a747ae9285e68a97ba0b256340",
"assets/assets/images/carousel/medium29.jpg": "c44bd46b13e6ab8ccedcd750d4da89ea",
"assets/assets/images/carousel/medium30.jpg": "eda2c01447d2c46f1a7d06fbf1f288e4",
"assets/assets/images/carousel/medium31.jpg": "14ade47c4fff6fda8078a4122b18891e",
"assets/assets/images/carousel/medium32.jpg": "76572cfea467e7bbc20a1f72f0a79e15",
"assets/assets/images/carousel/medium33.jpg": "5761fdf88e2c3792edf6a18707bafe17",
"assets/assets/images/carousel/medium34.jpg": "ef88c9fb47aed7860328ad89b4f2ec2d",
"assets/assets/images/carousel/medium35.jpg": "37781d66e89891a31d4b061a8cfbd6f6",
"assets/assets/images/carousel/medium36.jpg": "8191b96054233d0384401b3a91612040",
"assets/assets/images/carousel/medium37.jpg": "651886e1a8d40241e8b68e59c814a73e",
"assets/assets/images/carousel/medium38.jpg": "a7bec93361c00a4b26075eb19c1ed079",
"assets/assets/images/carousel/medium39.jpg": "036e8cb7214cd3b366d5b26745498006",
"assets/assets/images/carousel/medium40.jpg": "2b007541911be8828e5534f296b5b740",
"assets/assets/images/carousel/medium41.jpg": "2e81e8efaeaf8d358f6741e700569892",
"assets/assets/images/carousel/medium42.jpg": "ff1be846d8e8772c9f1df0dcd9de87af",
"assets/assets/images/carousel/medium43.jpg": "72ad3f71a15d147f12f44d078d4067ca",
"assets/assets/images/carousel/medium44.jpg": "b4bea79e612e555ee81f39a47a7f56d5",
"assets/assets/images/carousel/medium45.jpg": "a1eae1ae04b390453dd59325711c2151",
"assets/assets/images/carousel/medium46.jpg": "07d3a841c9058ec37307f1686a59e9e4",
"assets/assets/images/carousel/medium47.jpg": "c00fe959506b5252b21564a450607a79",
"assets/assets/images/carousel/medium48.jpg": "829ca0bc6ea5e7fcd48e70dfbe2ba327",
"assets/assets/images/carousel/medium49.jpg": "bdbb6681f10c09bfacc87926e1a3919e",
"assets/assets/images/carousel/medium50.jpg": "08e92145844fcc96fdb61c8286006654",
"assets/assets/images/carousel/medium51.jpg": "1df3f66db691f49868559354f57344ea",
"assets/assets/images/carousel/medium52.jpg": "6e28152d7dba3c9977708b1c20959625",
"assets/assets/images/carousel/medium53.jpg": "12c8ac75d698633d757e1b1dab981f87",
"assets/assets/images/carousel/medium54.jpg": "ed19d682969f74a2e489c28c5d66a073",
"assets/assets/images/carousel/medium55.jpg": "5946387719f05fa5d2317b444b36a391",
"assets/assets/images/carousel/medium56.jpg": "5c838840f6edb47586956825f770082f",
"assets/assets/images/carousel/medium57.jpg": "275666ef5d0af4d698a66ca10cfbf37c",
"assets/assets/images/carousel/medium58.jpg": "57ad7496875e10f3dedf695799d87939",
"assets/assets/images/carousel/medium59.jpg": "7fb897bb1115ae6e44f531a93f251ac2",
"assets/assets/images/carousel/medium60.jpg": "e8117735298ec4dc433b4b63ddb1d4bb",
"assets/assets/images/carousel/medium61.jpg": "617a6ca4e5bf16f9443ea2bb66797b3a",
"assets/assets/images/carousel/medium62.jpg": "565ef30e413913cc868f7a6756765410",
"assets/assets/images/cover.jpg": "e1e4b2e46b8d6eabb7330afb0c0d30ff",
"assets/assets/images/disclosure.png": "07fcb616e6a9dd175ed82818afa80b68",
"assets/assets/images/earthNetworked.jpg": "b25ff2ac5eab2cabe18296701eb69ac3",
"assets/assets/images/five_whys.png": "0b55349212bfac6db50a7fa1958e0bf0",
"assets/assets/images/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/assets/images/how_projects_work.jpg": "cbac06494f00b2a281f36216f2f271a3",
"assets/assets/images/north_america.jpg": "867d729d34a03bf38136bd45954ec218",
"assets/assets/images/packages/01mvc_pattern.jpg": "99cc7fabc6efa8f1e63f7df4937f256e",
"assets/assets/images/packages/02prefs.jpg": "1e85dede02741358da6404ddfcda8fd6",
"assets/assets/images/packages/03auth.jpg": "b08c120c110180afa51e7cb231c980e1",
"assets/assets/images/packages/04popup.jpg": "25fa504a880ff6dca5d9d72df619a4fd",
"assets/assets/images/packages/05ads.jpg": "f8c27605749eeb59cc84c11a548273a5",
"assets/assets/images/packages/06mvc_application.jpg": "ffdbb84a09e9d47367de6907d776feeb",
"assets/assets/images/packages/07dbutils.jpg": "b30c73898b44099a35d1fad36e1ed5e3",
"assets/assets/images/packages/08stateset.jpg": "a9c4115b05e7e5489322ae7bafe39944",
"assets/assets/images/packages/09translator.jpg": "64e2a99c9e599b903e6750a165af4a8c",
"assets/assets/images/packages/10remote.jpg": "8cafb5aacfa58da35d87c33878c5e439",
"assets/assets/images/phone_hand.jpg": "3dabdc8568b465f34a6e971f565ca550",
"assets/assets/images/phone_mist.jpg": "a21b23d74ecf7290e11b93d7cbf38e79",
"assets/assets/images/phone_mountains.jpg": "b318f6d6faefd8aa86ea93f8a26ede81",
"assets/assets/images/phone_road.jpg": "10273861be4c92643e6153f32d393bb2",
"assets/assets/images/phone_trail.jpg": "ed80186693a180f94183b2d8bb4feafe",
"assets/assets/images/three_trees.jpg": "986c30d96a0b60422a2cffbcff96c890",
"assets/FontManifest.json": "daf1f817658c2d4328a27ae7e3af9150",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/NOTICES": "e39cd4fc65cb959e6333441604988096",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"CNAME": "fc5ddddb90a55a23d93316478feb24d8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b67efd78e65a766096b778ecba798ca0",
"/": "b67efd78e65a766096b778ecba798ca0",
"main.dart.js": "b3634815332fd2aa72669e5017ae920e",
"manifest.json": "59323ea3032ab9287a9098a7feef33d4",
"version.json": "cc553aa6cc02879354d9fc495bb9018e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
