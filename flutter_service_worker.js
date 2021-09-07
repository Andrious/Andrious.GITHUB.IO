'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "be1b465c70254c76ae26945379af4fe6",
".git/config": "568cfdd680e91ea6cfa9567d04d8d853",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "29561609bbcb0aef9464be53acc9ad31",
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
".git/index": "79035e80a44d822c382fcafd904cc635",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8c944e17b276bfed1e9c4a9a03fb646a",
".git/logs/refs/heads/master": "f29f23c5a1df1fb12166ee7cf1d93f3a",
".git/logs/refs/remotes/origin/master": "e62d170d6040aadc76574c9c62af8548",
".git/objects/02/6306838509b32f40283a8cb2ab820813fdda18": "e91b5d3faf3b89f2782a15a449e5908a",
".git/objects/02/dd9f0fb437948004a47bfb9d5a4fd6b6d49d67": "9664aecc735f128bfddf958c4cb9abe6",
".git/objects/02/ecda2e831a8e797e463cfda40fe91a33dd0a54": "9dbee13d7083dc08fd80af955e1987d3",
".git/objects/03/6414f5533a1144f42dd025f620a6907a6728e0": "93f3b65e4a63bd2fa7bd6ad56a203939",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/15f7d3be9735cae3905d2a17f501dfaa5158cc": "5b53c03a8a5fd81acddc6e65f91b1fce",
".git/objects/06/1c7043b199fb6a50ac6b0e701fc04c79ce4e44": "f664ec2ac49f383de7184afd498c6038",
".git/objects/07/4a1970abe79e5277b712c4f4d6abb81740f9c2": "fdb876c98f904df929f538ff86a6f42d",
".git/objects/0a/d9cdc625bf80a9662bba82f40a31feb8979078": "82aa5dd41026d2deec7f8f5c5f4f9848",
".git/objects/0e/0df22efb828f3980aae8032b47de6031170bc3": "6986cce3036b150b55555161badd5f24",
".git/objects/10/be2e39885883d686697500840dfec8cd7bb049": "79c1744c2e5032bf2a66ab2ff1922bd5",
".git/objects/14/2cfbe27338aa5fa68bb6d8ee734a6bdbfd3487": "d6a5393e24f4f48fcfb04d6a5af057a1",
".git/objects/18/30be091baacf51daff3e1ecda8b0bf2878da9d": "18292eed4ab7c8a873c7484b8c5ee12d",
".git/objects/18/e1139baebea4550255d4f6d140602547888322": "e523f1526b7893d4055efd44e4eb41b6",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/1c/c81a58ebcc3ee3208261fbd0326f1909be1b81": "20374e1da2b5ed77231ba1517bcc25ce",
".git/objects/1e/cfef6f77151f8ac7ea0c03d4709cd2d0f0d40b": "3c69fcb97f92fff1888b5fc218d128d6",
".git/objects/1f/b088289101b61f6661ac7140a4c544a52c88b1": "bc2b13b6f94e7adb5c96d70c47a607ec",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/bc90178f90039ee63d523547bb79323e647705": "bc16d77940b2d862772a11e6ad441a65",
".git/objects/23/c3bb89d7fd483b5598defb2b74600488a0a9d7": "51eef6e30287ae1fb3781583d5ba3588",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/28/2e1269e9713171e68855237f0f33c2f70ce29c": "2fd8116a6cb43da90905fc0089089a7d",
".git/objects/2c/682e39b7ba170347259a3d15f83ed7813c27c6": "e0a3ae9a00d2fe50e121a3c03825607d",
".git/objects/2c/c2f1eb79d4695571d56bf63c85c9ff683bdb04": "134f36257d1d20ddcc0f53f6c1aac40f",
".git/objects/2e/e91b761d12b136371966b6c6b93fe8fe700cbe": "67407f14426b3535556ed6049279e4eb",
".git/objects/2f/c9286c6157a1483b21d3e0192521c26085f84f": "e8578180309c668f164e73b5a41361a8",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/7adc5ce3dc848fcaeea6c19d09d48df458e6bc": "8d7b474a82066691876a8c4ed9e613aa",
".git/objects/35/9817c1fb91b57e1e035014970f521c4d3791d0": "53946b81ff57f6823ffdbf5221991772",
".git/objects/36/15b7aca52e4369402c105782f207bad632e15c": "e4cbd707029beae6091bde6b0c25d37f",
".git/objects/38/eda5da68a6a18bc4e46f5358464f90b7e95ee5": "e7deb128d6208495a3c250ddcce0cca0",
".git/objects/3b/13e0f8ec0d0a61aff78e3e1c6131d5c2fd80c0": "f54696ea0151f849eec675e1fec346e8",
".git/objects/3b/fb65237a611d86d7f5c6785494de80be228b98": "e26014f979294a419f94a37ebc8ef2d7",
".git/objects/3c/c2f32720af43940947e96015e43334c86f5739": "f9dc3990915107e2c31dce105e1b8796",
".git/objects/3d/347ee78aa8dc3f1f4b1e9a939befd5d1b4f077": "051a5a3632c19b7cdcf310f490b6aba2",
".git/objects/3f/c0a8af8919e9f31e824359fcdf0328fce178e8": "61652e868610f1a350a90bdd39537912",
".git/objects/42/f3b01ca2edd673122326b4a652fc9548c27772": "e88898e5b66222d737aeca1a016047e6",
".git/objects/43/8bb53fe2b8b86bd5dd17649e1e74965a507117": "0a9af289c8d183cc5c456ff0ef92bc13",
".git/objects/45/0ab3a70ef803656822a7852b9b7d7296af326e": "c9ad6dc991c1921bc9fa63b4f2dbdbdc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/8bff9fbf5d21b2a17f0eb8ffffcd344df16286": "30ee9b7b603a9c773a19c5590d906168",
".git/objects/4a/40e64bb827be766287edba32c5743e6f46c50a": "729a4cfc40ee4d436ca42de9b2b9cc32",
".git/objects/4b/0ffb141ee190d494314e0f2f2efbbb59596771": "c4a5786069b0577fdecfa82bd5af9a46",
".git/objects/4d/19bc2613e1da4bf31ad538b21a61d6d387b513": "56b49b2ba0c2da87e2d15d783e15d5e7",
".git/objects/4f/c6690f833f2d0e3f9f36c07340b66736cac316": "04f0170fd1baa69b6a2fbd22b50dccd5",
".git/objects/50/4dc6c8c57e4f4c7eb42c595ed5942af0bba248": "2d54e9445d92d39f53d51dc3e5d15ab8",
".git/objects/52/2e0653f276f38fc615b41e6465d1d7d0e8f863": "7de75925d482cee655a2bc7d6e01253b",
".git/objects/52/bb42179271d218fe09e813221e3377f999a54c": "d5ebc0969d02197474777a0571ace8d9",
".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118": "1342122d127c3cb2d5cfb129e11cb366",
".git/objects/5c/c2b187d31bf5a8c026c76db5f59f0e227d0612": "97fcb450d4fc16553ec1a10098b1a7e0",
".git/objects/5d/68661d1afb6efa2b3d368fb5785ba3d9c909b5": "b913bb11768f0b6fd6caee082d4ddb56",
".git/objects/5e/d00c0ab2e792aa845b1f19976af0328ca056b3": "893220cd2d80567a1a73bb9d5ca69ca5",
".git/objects/60/f8c01ca1fe9c78f746df635c964e9ef10ce317": "7d69666a27ba7cdafcdad6c1591f1a9f",
".git/objects/61/cdcac5a41a9ea25d8098995e6174dbbee599f6": "3c4ef95dbb8b429cb8031401543a10cb",
".git/objects/62/c2f7dac209bfdba1d8776442cf55db310d68e5": "295c0dc6f0659e868da66ed8fbdd095e",
".git/objects/68/f6b8971f154fbbafd6bde054cfb3417720897f": "f0b54224a32a525a23edfa40ae39c521",
".git/objects/69/ed73211ca104f5e1564450ffbed5f5d75e038b": "4d232365234a86acc830aedff8ecc73e",
".git/objects/6a/3b824121fee8c92cd5fff6ef4c185149c67a3f": "40b257a14e588a3ee1333801f8ea1460",
".git/objects/6a/80e375152480326544cbb24be56a662b721c06": "6bf6ba06c76443771cb3057cf7393cef",
".git/objects/6b/0fdf91e22ce561a4e50dc0dd6c565d05263cab": "23815a6109683feccb422fc3f4661023",
".git/objects/6b/243f1a8825e87f9ced3f3067ca6ea0420d1793": "9710678aace703c3512d4055e04971fc",
".git/objects/70/a35f229e5dbc4111813618fef2e0974ae9a64c": "2b556c91a70274da50df4e7fa98c0069",
".git/objects/70/ad6f361c72fcec11ab2b9b2eee7d0418946ea2": "f2be23240a622431e143fba9a1cff515",
".git/objects/78/205215d6fdedb8e225567da23438ff37468340": "641cff3d7279123e05daf9b6575fb80d",
".git/objects/78/309036cda3611ce30a2af3cee90ba79c6d523d": "30d1408912225298bdcd3276d8cf1da4",
".git/objects/79/8d0cc257de2374eff064be10ae9766fd6cc5dd": "07742dda9eb4e9746d750469f919553a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/80461b4d64b626fb6dab3d023808cc8d8c5192": "f16c4cd37116d7d28debaa16f8202eb9",
".git/objects/7f/d6d76c54545d1ce091f75c5704ce70d96444bb": "00b19dd4104e2bc33eefe61f0beb3ef4",
".git/objects/80/a59b78b59a55ca99c606b708beab2c29339a2a": "3a1eb3cc8fbba125766217f4d5e3d038",
".git/objects/83/4fafa520091edd8cc9df4c6c2297e9e1e6747d": "1b0524e0ff67d6b3821674894765eea8",
".git/objects/87/501853a42b539526bd6214d388713929f7a9ec": "7d822ca827288c410dc0c9cbfc2f48a7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bb12d9b2158fbecaed652309096311234892cb": "f9438603ea7fd1b00840554f051e122c",
".git/objects/8b/fe752ccd077eff76f36109a1d32337fa1023ec": "5e218f61138ecfaa9fcdae5c6ebf9fa6",
".git/objects/8c/dcfb32c2799e8b46534f0ba4cf0b7b46356d64": "f54a2fbc510333fbdfc4dd8ad450de1d",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8d/f70b0cd9aa084151ffe975d5b49443f9fe54a3": "e764bb82bc206e87f5c03947e611d0c0",
".git/objects/8e/7497faba3421d2cf66cd23f4cde02d0fe07c19": "f1bcc063609103f3f038644ed4adbd5a",
".git/objects/94/2e73f73ecfed90d2b271b20f0f5abd963e9de9": "b17c51bcaeb107c2c1826ae6ef87e189",
".git/objects/95/ce251014a2ae87fbe9ffe17868045e3a68c2d2": "c2a27553ec682c852904e5597bd31d90",
".git/objects/96/21287334679059a288134e63ac0d230e43b956": "948dac996f185966ee7b302f81f71b65",
".git/objects/9b/212b7fdd5890129ad885e36f4aed359d09dccb": "ea5e54830818514d649cab35438af865",
".git/objects/9b/d743269dc1b92495b129c5ad73f6e5f523d4a4": "5f1dd67fd1cd4c3026df26f0c57bedbd",
".git/objects/9c/bf9556df9ee28a0191aabc53203d200129b8b7": "7aaf09f7cb6ffd6ed41fd382666e5075",
".git/objects/9c/c8ece211a8c12ea8269929c6f5c55c0eb30927": "bc77203d97ce80b7fbdf492ae3d89136",
".git/objects/9e/4b0cb3af8dad32015d0d7d86c42836386b677f": "5e739b21344f4168311a02d2d0698dfa",
".git/objects/9e/ffac501c2e76c42d4e6fa1d587054b128a6cb5": "edf998e47ff5d9c44c34be8f28bba4af",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/2a48ede23c92e9c1b76f87e6854de7364ecb47": "3eb9736470ca4236f19d021914735e29",
".git/objects/a3/e235066c2a4257964a5a84d2a1c73ce66be31e": "535fa06f009b3a6df8f4a0156bd9573c",
".git/objects/a7/3202c83504eef9e166b4e73091ded92b4bb2f5": "e23954a9773b3ebb9f474edd36b4b490",
".git/objects/a8/0ad1214f815ad31bd8dc38c8bfce7bd761a880": "219cdf0915988de7441b58bbd2568ed2",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/68be53411f77651869d904ff3c41edb32c4ce3": "647ca6868cb76c88ffe1272b8f7d2dec",
".git/objects/a9/c1fafc162ea06586a53b11193e20c4175c0ea1": "a2cdaca38e40ab97fbd934707768b9a2",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/d795eb1aa4e3a205055c9b9585cd72408d0d9e": "3b0777189e384b9bceac5b270873c75b",
".git/objects/b3/01ef1dc926da5d5d19d5a8bad0f020393ae38c": "dfa60d02e373ada519a115241e9ba4a4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/49927b94d2eba90f1bb6f865241b72395ed2f2": "af1f1ec4f5df2fc8c2114a747583ae19",
".git/objects/ba/7ffceab83508d43e64f7211153145f12fec09e": "b3090ff4e0969d3383e27c44aca6ea25",
".git/objects/bb/2b963059540fbc2695a58347044d77b32a53b3": "28cb330f392125aa6163ac7d8344f0e0",
".git/objects/bf/de8bbb401a767efd128f7259759160e79d9c7b": "0a66747d7f5d5106e130155bb115e6fb",
".git/objects/c0/d0be7c90140b4c730b10927bef3a330978143b": "702c75317aa6f09fce56a967ca40df2e",
".git/objects/c1/3c4046617e4741aa9966cbc8dbdcfafc093900": "816794e475bcbf8a8b58b830ff4bab36",
".git/objects/c4/b4a612ddc24f1c7745600de915777de498b9f2": "5ebced32d9494025186a5f38d0328b2b",
".git/objects/c8/1a8944865614dabb6cb6cfac548a136acde471": "6d52036d4909e52679568cd5935dbe4e",
".git/objects/c8/68678f5dc7dab7bae57ce21cbd6c8a38440a0a": "d71e72ad867e6311c286a1fb84680385",
".git/objects/c8/7fd14630458879238c58ce7c1ca4c646179e2f": "fc454267b9c6740d254cf01c624c0051",
".git/objects/cb/3b43279374d96a21db034bf2a2e37fabb8e848": "0e4e4157ccc004d608a505be0d0a27c7",
".git/objects/cd/230997ea992af27e6064088d64958c5680e1e7": "1ea948dc0e01e309e80a378b5bc79366",
".git/objects/cd/36d797ab7f0621950387025d0d6c8acb5fb756": "13dd46e5319de6ef420f825ccab03cd8",
".git/objects/cd/42b0e08be85d400e10b533e6bb843c7aaf54fc": "ecfcba59cebaa5633a255170cf2172f9",
".git/objects/cf/39ef84612948ebb6a51af5b9577b1627a16240": "794c83186e919d1d37a5ae9c08147979",
".git/objects/d0/0b163c9417d83b6ff8de2cea8ea38e954f63d5": "60711a650f9069e097ded0e35f89a15b",
".git/objects/d1/006ef3557b3096970e44b1924174028526de9d": "1e6fbfdd292e6c0f3fb9476e51354734",
".git/objects/d2/2e26c2f27920008f497e814297c36faaaaafec": "d79b6d1a2827a91af9a9d36318562ba1",
".git/objects/d2/9c694e9a749928769c557fa09491f1167358b9": "39f8c9c0d621ff54f05e7ab4399ff467",
".git/objects/d2/d96bbe0ebf840e5806e1b297d19679b5e15691": "f4cba27f0036d25db054f749182f1d53",
".git/objects/d6/0709b87b64abf792764120dfef2d16bd6f86a6": "cd4f38a1ab43ce3080dd0c6685f2ffa4",
".git/objects/da/c414a7d1c9acb10a397a00bdb9111c6f4e9bc4": "6e3750b88f39d35be546ea55bdd7eb39",
".git/objects/db/1be497f70726cb33b0d3a7588fe1911540cefc": "f333df4e2e7ad5e5916fcddeae774831",
".git/objects/de/3a11b0912bad94795deb4e6100ba33fc5f01a3": "2be5e6cc531d7df73ba1fa167c540d6a",
".git/objects/de/89e885ca12411739244b7963983456ae740b67": "539787763052d3cd3e97c4fab9756371",
".git/objects/e0/2bf9548c030448ffaf8279f80ec7717ec6dfb1": "bf329ce0b1f2a4a546cf7315cb4a2ebe",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/f8fb696953427f6f7405b1aa9e5f8a139dbb6c": "fc26a3bd577712e5aedc5eb616138d79",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b726d8e0bbd995ec965f6159e998c12465bbbf": "8c4c88457694913f7cddc4a520cadd2b",
".git/objects/e8/f4a30922c737c70dc308c4f54ce57bd46ae497": "0cc71bb9ac48967da4b6c343f59a75d1",
".git/objects/ef/d621565a684375a65b967a8780dc76922c1346": "0d507ad8f392384a4c3e89be9b2eb7f0",
".git/objects/f0/0dad8424dce7826f87905765849af7d6a65c9f": "d9d7c31cb6445a99d517b4934ef8fa07",
".git/objects/f0/fdb0afd9c9c6f8f5e6571b655408402cc122cd": "c02516e03e65a46f94d7d2177a785ba8",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f3/78f9a4425a3bdf6a858e6e7f2447bbb026987e": "d8b79f6fde09fc0aa826a5450b84d7a9",
".git/objects/f5/6c08db028b223700f5b0c1d7ca9dc255de31de": "7d4cff983f706156f04b2b0a00627281",
".git/objects/f5/a28171c5baf962de9f02d42487a5dcbf70431b": "01d04d453bc9f23f27c8eed9ca2900f8",
".git/objects/f8/8a4e82508c5f4c2a1d5b955b71aea4c94b2ecc": "c64b4fec9fd16083c9c9fcc68463e445",
".git/objects/fb/1b7f73a4b424b9a009350b1ebe5307d6e4e4bf": "a415f547758a3c91d47cd38cb5b8240a",
".git/objects/fb/c6ce2665ef2d8efe10e1b17737018a058c22c2": "de7fa9d0a2e6b9995ed6899931d685f8",
".git/objects/fc/24e7a62dc288c776f8448cd073a01e7721ed32": "abe06b1629d06a9e81d9f6fd0072349c",
".git/objects/fe/1aa6b4aea10e4dee75b6a3b1bd3c585b5a8b12": "5a37c1d77ae52f5a9be6804b8a227a73",
".git/objects/ff/76644e0f4e66cbfbcb5c384dfa2f75fd4041fd": "e68d46ffd32a1065381419e423251ccb",
".git/ORIG_HEAD": "86d7430e7985acba5099c0ed11f67ddf",
".git/refs/heads/master": "16150993ec23fc112d589c23794ab4bc",
".git/refs/remotes/origin/master": "16150993ec23fc112d589c23794ab4bc",
"assets/AssetManifest.json": "a88deaf78af0c010ae3909bb15bca7f1",
"assets/assets/images/africa.jpg": "27fc2c6667bd5bd7bba8117fafe28d86",
"assets/assets/images/antarctica.jpg": "71e86242fca831839833d1caa23f107e",
"assets/assets/images/art_of_war.jpg": "2a5bf99802d48d5046bd61a22c0b4df5",
"assets/assets/images/asia.jpg": "bbcf97c1be29e77360e8407b7e2eaa05",
"assets/assets/images/australia.jpg": "6170e8a703652c6b814dca7020050086",
"assets/assets/images/cover.jpg": "e1e4b2e46b8d6eabb7330afb0c0d30ff",
"assets/assets/images/earthNetworked.jpg": "b25ff2ac5eab2cabe18296701eb69ac3",
"assets/assets/images/europe.jpg": "29a721b78efc7f928faf042c88806468",
"assets/assets/images/five_whys.jpg": "9125cd2e420e5051806e665ee4e48921",
"assets/assets/images/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/assets/images/how_projects_work.jpg": "cbac06494f00b2a281f36216f2f271a3",
"assets/assets/images/north_america.jpg": "867d729d34a03bf38136bd45954ec218",
"assets/assets/images/phone_hand.jpg": "3dabdc8568b465f34a6e971f565ca550",
"assets/assets/images/phone_mist.jpg": "a21b23d74ecf7290e11b93d7cbf38e79",
"assets/assets/images/phone_mountains.jpg": "b318f6d6faefd8aa86ea93f8a26ede81",
"assets/assets/images/phone_road.jpg": "10273861be4c92643e6153f32d393bb2",
"assets/assets/images/phone_trail.jpg": "ed80186693a180f94183b2d8bb4feafe",
"assets/assets/images/south_america.jpg": "1920c86e11a06921b339f00ff1d0ddea",
"assets/assets/images/three_trees.jpg": "986c30d96a0b60422a2cffbcff96c890",
"assets/FontManifest.json": "daf1f817658c2d4328a27ae7e3af9150",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/NOTICES": "d8d0677ee375bb6fdd21a915f44a7c5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "657c6072f649fe7f22d92e6c85cf0b7b",
"/": "657c6072f649fe7f22d92e6c85cf0b7b",
"main.dart.js": "d5ff1b67d49916136b90102a200a55a6",
"manifest.json": "59323ea3032ab9287a9098a7feef33d4",
"version.json": "aec4aa306ec16969ceaac066342e5a9b"
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
