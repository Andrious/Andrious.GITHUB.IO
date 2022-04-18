'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cdcb598b07352335c95f632e3ccd6b29",
"assets/assets/0-0.jpg": "63c1cb3d139d57f3abadaa6b1a47e9ec",
"assets/assets/1-0.jpg": "3911b473b253bd7cd808c3f78320970a",
"assets/assets/10-0.jpg": "8e156e859d8b0f155b29e1b41f8878c2",
"assets/assets/11-0.jpg": "307bcf0b51d37a949dec4e62b84a7c50",
"assets/assets/12-0.jpg": "6e23edb47278260a0418a817aba843c0",
"assets/assets/13-0.jpg": "758c3c9ca1f6e70f64a46a5a411fe426",
"assets/assets/14-0.jpg": "158b7a582cbecf20ea90d2ea98dbe301",
"assets/assets/15-0.jpg": "fff60b95217c2c443546a09760175702",
"assets/assets/16-0.jpg": "79e93a395d04737df815bb6bf7e83baa",
"assets/assets/17-0.jpg": "38063393e595ea9a8b3cd1506787d92f",
"assets/assets/18-0.jpg": "3f144fe7979040f3e7d7277c7a07c2ed",
"assets/assets/19-0.jpg": "bacf82d72a8eb386a7ba6b28f846df73",
"assets/assets/2-0.jpg": "061d352f1afe2755e294f8e2428b16ef",
"assets/assets/20-0.jpg": "014cab213b9f871119c32079eabc191e",
"assets/assets/21-0.jpg": "c21fcd094a4841e1a97bbbda76785945",
"assets/assets/22-0.jpg": "ffbccb086af16dc5862a6f76ddb6356a",
"assets/assets/23-0.jpg": "b684c2225ccbc14ec14dd65fb68ddd76",
"assets/assets/24-0.jpg": "a92c8b074a41abf30eedc66f25e30704",
"assets/assets/25-0.jpg": "0ff35e583472078e2ab670b6ed06d2dc",
"assets/assets/26-0.jpg": "8362eead8df268194bef78d40324306d",
"assets/assets/27-0.jpg": "e1a12f3491860a2756e7e1537449b10d",
"assets/assets/28-0.jpg": "4119f3e71c38a6eb047a2ff6a7d74b8b",
"assets/assets/29-0.jpg": "ca11a388bc08ead39912c2cf361140cd",
"assets/assets/3-0.jpg": "0fa71fb00d37a3a9ae0a08dc39ea9ab3",
"assets/assets/30-0.jpg": "9da4cc70092b5973996a9b05f9a4c351",
"assets/assets/31-0.jpg": "6e9c7a0282c8dfb0bacbafa5b9598f92",
"assets/assets/32-0.jpg": "d6f1b9d586c955f871e56bb95c47cc98",
"assets/assets/33-0.jpg": "b95b0ace9e0637e6b5e8701e0a969807",
"assets/assets/34-0.jpg": "49dcca5ea4ece2d35a433e902cc82a33",
"assets/assets/35-0.jpg": "70ba6a1c10a14d92e2345779eb5bb82d",
"assets/assets/36-0.jpg": "4a814c4a3d6a0af97b3016050f4c75ce",
"assets/assets/37-0.jpg": "8400e66014b44b1a653183463a5b243d",
"assets/assets/4-0.jpg": "0fe383ff6affdd0fc2493c2131b2e3c8",
"assets/assets/5-0.jpg": "5242b866fe8531060757c059d423d96c",
"assets/assets/6-0.jpg": "ecaead6e9443503ad161f39062668b14",
"assets/assets/7-0.jpg": "e0e41a63648469bdc60af8570b71ebd6",
"assets/assets/8-0.jpg": "4b2af19930d6faf4fa0c393bc9f32bde",
"assets/assets/9-0.jpg": "8069aef3d079a13960c9e99faa5bb202",
"assets/assets/diamond.png": "10f8a6c14246d2f05839c8c30e4a4bdd",
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
"assets/assets/images/disclosure.png": "238a0202fcdbdbd4fff207464bcbe167",
"assets/assets/images/earthNetworked.jpg": "b25ff2ac5eab2cabe18296701eb69ac3",
"assets/assets/images/five_whys.png": "94cf57cbbdc8c07a730ecddd7fa9bef6",
"assets/assets/images/flutteruis/flutter_ui.png": "5c0d0328b234d94ad29e52f7394f0839",
"assets/assets/images/flutteruis/flutter_ui_chrome.png": "87c18c150251758222860015b0c2122e",
"assets/assets/images/flutteruis/flutter_ui_desktop.png": "a21dcc76defe1386b78c29b2c1de4a26",
"assets/assets/images/flutteruis/flutter_ui_examples.png": "fcce5dc917521618c3d528b9dd1cb954",
"assets/assets/images/flutteruis/flutter_ui_install.png": "1888ea979750c298f690d09fe69e3855",
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
"assets/assets/images/use_case_example.jpg": "b50ff56c7139c64e3adf840a38870530",
"assets/assets/slanted_menu.png": "e09386cdf2904c4f5faf106267d88c1c",
"assets/FontManifest.json": "44531fddae588d182a567cdbc8ddeb27",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/montserrat/Montserrat-Medium.ttf": "0098f804fc2d06af52650e0b8ed3390c",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/roboto/Roboto-Medium.ttf": "d52f011be65b281ba8ca1c3f689cf133",
"assets/images/c1.jpg": "f7f635cd48bd3932ee5cf5608c033e41",
"assets/images/c2.jpg": "5fa2641ec0883b0483de39015733843a",
"assets/images/c3.jpg": "db071680b62465498841bd4bc4d7a52d",
"assets/images/c4.jpg": "5eda8faf5249c16a8a910955020e54a8",
"assets/images/c5.jpg": "009df8fb400fa8ca91ee5ff089f3c8bc",
"assets/images/c6.jpg": "1cc33084afbff71fb7c3c04cd70f02fd",
"assets/images/c7.jpg": "3f6722342518776c7081eb62495bda8f",
"assets/images/category1.jpg": "e27ee64bd93322e76a54c70ee55be7c6",
"assets/images/category2.jpg": "61469325282fe275eb38d369dfaff799",
"assets/images/facebook.png": "c4dca203f6a46c8b6bce977be8d2a4a7",
"assets/images/google.png": "8b201685859c6b291fb39019e19896fd",
"assets/images/logos/appstore_dark.png": "a2bb85337c1d4bb7ddad689a56e68a0e",
"assets/images/logos/appstore_light.png": "e493c3f2be0d314bc1f0a4070971907a",
"assets/images/logos/github.png": "acf172f26b6761ec94a0d4316bdbf6d4",
"assets/images/logos/googleplay_dark.png": "67a46904f7b58b44fb0b3407c2a6456d",
"assets/images/logos/googleplay_light.png": "1fadcff3ed4b428de9ab75876b8d4e28",
"assets/images/logos/linkedin.png": "fd0d5546fdbdc85c76c4372a0d51f1bc",
"assets/images/logos/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/images/logos/windows_store_dark.png": "ebb44fcc70818be1d725bacbff21a047",
"assets/images/logos/windows_store_light.png": "7626aef6730ab5ec240c47e2b7f56695",
"assets/images/moon.png": "01fb0e5589a4359d11264ca6fc14fb34",
"assets/images/products/blazer1.jpg": "d807d1e60aacfb8f9cc12cbbccf00877",
"assets/images/products/blazer2.jpg": "6ee73244bb564d173ecc3a2504e85ab9",
"assets/images/products/dress1.jpg": "fb8ed8e96353a49392089b59309ad5ea",
"assets/images/products/dress2.jpg": "d0f0c3bd4b9e08797ccc84909d7a714d",
"assets/images/products/hills1.jpg": "d35ac642b26dac408424e94649a0ae49",
"assets/images/products/hills2.jpg": "eb0e37a6f727a20b0d9f2b03c4da5180",
"assets/images/products/jeans1.jpg": "96023b8d0eb85d2b4976efb2745634a0",
"assets/images/products/jeans2.jpg": "4c6569887e42f38420635db216d3f824",
"assets/images/products/shoe1.jpg": "6a82b3827cd113e966846083d2d889e2",
"assets/images/products/shoe2.jpg": "53acbda76ab2bb487d475f00f776e058",
"assets/images/products/skirt1.jpg": "fd8b4bd9ca127c7fd974c55ce67bb407",
"assets/images/products/skirt2.jpg": "b306c05ac67dd8ee82018e52c0a7d990",
"assets/images/products/tshirt1.jpg": "f484cdecd198964fc53539a14b09a3a5",
"assets/images/products/tshirt2.jpg": "6e307944a2a0246e6c01e2d6bb709fc0",
"assets/images/recentImages/blazer1.jpeg": "5127615b230f4ee0fea4db1aec46a42c",
"assets/images/recentImages/dress1.jpeg": "0b23c4bf5a3f6a8e334253ba9ab360a5",
"assets/images/recentImages/dress2.jpeg": "56558d43002e3bd378dd89b883d655e2",
"assets/images/recentImages/hills1.jpeg": "2aefb5b3cea891d5db605ceb49438a63",
"assets/images/recentImages/skt1.jpeg": "288752bfebc0b485507b4dbcbcdca4c7",
"assets/images/sunny.png": "bcb3306a08b8a1c94207d7b0c2113acf",
"assets/NOTICES": "b02ce504dc0f987d5d10c3444f87e32f",
"assets/packages/bazaar/fonts/montserrat/Montserrat-Medium.ttf": "0098f804fc2d06af52650e0b8ed3390c",
"assets/packages/bazaar/fonts/roboto/Roboto-Medium.ttf": "d52f011be65b281ba8ca1c3f689cf133",
"assets/packages/bazaar/images/c1.jpg": "f7f635cd48bd3932ee5cf5608c033e41",
"assets/packages/bazaar/images/c2.jpg": "5fa2641ec0883b0483de39015733843a",
"assets/packages/bazaar/images/c3.jpg": "db071680b62465498841bd4bc4d7a52d",
"assets/packages/bazaar/images/c4.jpg": "5eda8faf5249c16a8a910955020e54a8",
"assets/packages/bazaar/images/c5.jpg": "009df8fb400fa8ca91ee5ff089f3c8bc",
"assets/packages/bazaar/images/c6.jpg": "1cc33084afbff71fb7c3c04cd70f02fd",
"assets/packages/bazaar/images/c7.jpg": "3f6722342518776c7081eb62495bda8f",
"assets/packages/bazaar/images/category1.jpg": "e27ee64bd93322e76a54c70ee55be7c6",
"assets/packages/bazaar/images/category2.jpg": "61469325282fe275eb38d369dfaff799",
"assets/packages/bazaar/images/facebook.png": "c4dca203f6a46c8b6bce977be8d2a4a7",
"assets/packages/bazaar/images/google.png": "8b201685859c6b291fb39019e19896fd",
"assets/packages/bazaar/images/logos/github.png": "acf172f26b6761ec94a0d4316bdbf6d4",
"assets/packages/bazaar/images/logos/linkedin.png": "fd0d5546fdbdc85c76c4372a0d51f1bc",
"assets/packages/bazaar/images/logos/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/packages/bazaar/images/moon.png": "01fb0e5589a4359d11264ca6fc14fb34",
"assets/packages/bazaar/images/products/blazer1.jpg": "d807d1e60aacfb8f9cc12cbbccf00877",
"assets/packages/bazaar/images/products/blazer2.jpg": "6ee73244bb564d173ecc3a2504e85ab9",
"assets/packages/bazaar/images/products/dress1.jpg": "fb8ed8e96353a49392089b59309ad5ea",
"assets/packages/bazaar/images/products/dress2.jpg": "d0f0c3bd4b9e08797ccc84909d7a714d",
"assets/packages/bazaar/images/products/hills1.jpg": "d35ac642b26dac408424e94649a0ae49",
"assets/packages/bazaar/images/products/hills2.jpg": "eb0e37a6f727a20b0d9f2b03c4da5180",
"assets/packages/bazaar/images/products/jeans1.jpg": "96023b8d0eb85d2b4976efb2745634a0",
"assets/packages/bazaar/images/products/jeans2.jpg": "4c6569887e42f38420635db216d3f824",
"assets/packages/bazaar/images/products/shoe1.jpg": "6a82b3827cd113e966846083d2d889e2",
"assets/packages/bazaar/images/products/shoe2.jpg": "53acbda76ab2bb487d475f00f776e058",
"assets/packages/bazaar/images/products/skirt1.jpg": "fd8b4bd9ca127c7fd974c55ce67bb407",
"assets/packages/bazaar/images/products/skirt2.jpg": "b306c05ac67dd8ee82018e52c0a7d990",
"assets/packages/bazaar/images/products/tshirt1.jpg": "f484cdecd198964fc53539a14b09a3a5",
"assets/packages/bazaar/images/products/tshirt2.jpg": "6e307944a2a0246e6c01e2d6bb709fc0",
"assets/packages/bazaar/images/recentImages/blazer1.jpeg": "5127615b230f4ee0fea4db1aec46a42c",
"assets/packages/bazaar/images/recentImages/dress1.jpeg": "0b23c4bf5a3f6a8e334253ba9ab360a5",
"assets/packages/bazaar/images/recentImages/dress2.jpeg": "56558d43002e3bd378dd89b883d655e2",
"assets/packages/bazaar/images/recentImages/hills1.jpeg": "2aefb5b3cea891d5db605ceb49438a63",
"assets/packages/bazaar/images/recentImages/skt1.jpeg": "288752bfebc0b485507b4dbcbcdca4c7",
"assets/packages/bazaar/images/sunny.png": "bcb3306a08b8a1c94207d7b0c2113acf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/shrine_mvc/assets/0-0.jpg": "63c1cb3d139d57f3abadaa6b1a47e9ec",
"assets/packages/shrine_mvc/assets/1-0.jpg": "3911b473b253bd7cd808c3f78320970a",
"assets/packages/shrine_mvc/assets/10-0.jpg": "8e156e859d8b0f155b29e1b41f8878c2",
"assets/packages/shrine_mvc/assets/11-0.jpg": "307bcf0b51d37a949dec4e62b84a7c50",
"assets/packages/shrine_mvc/assets/12-0.jpg": "6e23edb47278260a0418a817aba843c0",
"assets/packages/shrine_mvc/assets/13-0.jpg": "758c3c9ca1f6e70f64a46a5a411fe426",
"assets/packages/shrine_mvc/assets/14-0.jpg": "158b7a582cbecf20ea90d2ea98dbe301",
"assets/packages/shrine_mvc/assets/15-0.jpg": "fff60b95217c2c443546a09760175702",
"assets/packages/shrine_mvc/assets/16-0.jpg": "79e93a395d04737df815bb6bf7e83baa",
"assets/packages/shrine_mvc/assets/17-0.jpg": "38063393e595ea9a8b3cd1506787d92f",
"assets/packages/shrine_mvc/assets/18-0.jpg": "3f144fe7979040f3e7d7277c7a07c2ed",
"assets/packages/shrine_mvc/assets/19-0.jpg": "bacf82d72a8eb386a7ba6b28f846df73",
"assets/packages/shrine_mvc/assets/2-0.jpg": "061d352f1afe2755e294f8e2428b16ef",
"assets/packages/shrine_mvc/assets/2.0x/0-0.jpg": "567fc9e10096243d5b1682e41085adf9",
"assets/packages/shrine_mvc/assets/2.0x/1-0.jpg": "c7118fcae307e4a7cbbf0b35f5634489",
"assets/packages/shrine_mvc/assets/2.0x/10-0.jpg": "14c4f0b31dd0c56f494f0b9733150c37",
"assets/packages/shrine_mvc/assets/2.0x/11-0.jpg": "13f8219194be4323d7c55f6667c54866",
"assets/packages/shrine_mvc/assets/2.0x/12-0.jpg": "0991f476c7d99b1c4fe124f168b2d5b3",
"assets/packages/shrine_mvc/assets/2.0x/13-0.jpg": "9fe2238fe2718a181433f4d300ad9ac6",
"assets/packages/shrine_mvc/assets/2.0x/14-0.jpg": "25703fe09d52fb2e58d486a0864b71ae",
"assets/packages/shrine_mvc/assets/2.0x/15-0.jpg": "c1b678ea76eee74433c98369df0d1bdc",
"assets/packages/shrine_mvc/assets/2.0x/16-0.jpg": "ce8ee93796c9a16f13e06d1f5c58ff7e",
"assets/packages/shrine_mvc/assets/2.0x/17-0.jpg": "2db0f8dff70ebc61250c745974c1e822",
"assets/packages/shrine_mvc/assets/2.0x/18-0.jpg": "0575c5baa6d83e263c38efaf8fbb42b2",
"assets/packages/shrine_mvc/assets/2.0x/19-0.jpg": "bc0a09d9528f18b8d6b6b7bb29a830cd",
"assets/packages/shrine_mvc/assets/2.0x/2-0.jpg": "d81ddfa43a08f9f490ce1e11c6f32649",
"assets/packages/shrine_mvc/assets/2.0x/20-0.jpg": "cb60384c66a08433c183426de2bd30df",
"assets/packages/shrine_mvc/assets/2.0x/21-0.jpg": "5db8b9f6b757f3d505ed9c93763edd87",
"assets/packages/shrine_mvc/assets/2.0x/22-0.jpg": "55b04621fd6d6fc0fee515f25f31776d",
"assets/packages/shrine_mvc/assets/2.0x/23-0.jpg": "694a8b748befca33d598fbde5f7be3b7",
"assets/packages/shrine_mvc/assets/2.0x/24-0.jpg": "a85a532d6697595cde408fce12dc8b81",
"assets/packages/shrine_mvc/assets/2.0x/25-0.jpg": "a68fcf2ce1a0572fdf132439179ecadc",
"assets/packages/shrine_mvc/assets/2.0x/26-0.jpg": "ab74dd40a480bd7ba961fe5dbbfd5dc0",
"assets/packages/shrine_mvc/assets/2.0x/27-0.jpg": "8e7898165fce2dc5a63d92ef12d79f0f",
"assets/packages/shrine_mvc/assets/2.0x/28-0.jpg": "658ab1c5b0b076a603ec9149070f60e2",
"assets/packages/shrine_mvc/assets/2.0x/29-0.jpg": "91fcd84d4b7d5b88fdb3b4035f8e1413",
"assets/packages/shrine_mvc/assets/2.0x/3-0.jpg": "ba3da87287544a91753a367b98d52a89",
"assets/packages/shrine_mvc/assets/2.0x/30-0.jpg": "e152d302ace79e6d5db43e192b4e5b70",
"assets/packages/shrine_mvc/assets/2.0x/31-0.jpg": "1468b80abf5d292867dff53fcf68c4e5",
"assets/packages/shrine_mvc/assets/2.0x/32-0.jpg": "6840afbeac3621156d5c06d6925e6f37",
"assets/packages/shrine_mvc/assets/2.0x/33-0.jpg": "77e8288671197c1617328eb2018af730",
"assets/packages/shrine_mvc/assets/2.0x/34-0.jpg": "24b1ac267d0b1b7436bc79ef4d86571f",
"assets/packages/shrine_mvc/assets/2.0x/35-0.jpg": "734b424507fdce02644ce857e7eb4244",
"assets/packages/shrine_mvc/assets/2.0x/36-0.jpg": "4fa2a3db8ca69fb8b295245f7c6a8ce7",
"assets/packages/shrine_mvc/assets/2.0x/37-0.jpg": "0ed9fb933b68fa0acdc7066ff7eadaf2",
"assets/packages/shrine_mvc/assets/2.0x/4-0.jpg": "ff0ac68da148e4960b371f398048df7d",
"assets/packages/shrine_mvc/assets/2.0x/5-0.jpg": "3e4f39db19f699f3db548693bb0bebef",
"assets/packages/shrine_mvc/assets/2.0x/6-0.jpg": "a382c96bf484b0a04d4a5d6a01d53a74",
"assets/packages/shrine_mvc/assets/2.0x/7-0.jpg": "c8c09a6f1e29ae38b964a148670a4ac8",
"assets/packages/shrine_mvc/assets/2.0x/8-0.jpg": "722d4083bd61482e52c15f9d1d8c3fe8",
"assets/packages/shrine_mvc/assets/2.0x/9-0.jpg": "125e814ac7495726ae8e4faf650861c6",
"assets/packages/shrine_mvc/assets/2.0x/diamond.png": "85f6d367acb2a35d87efe84f5c3a9168",
"assets/packages/shrine_mvc/assets/2.0x/slanted_menu.png": "7817f27d19947fa0261ccd0e46920eb2",
"assets/packages/shrine_mvc/assets/20-0.jpg": "014cab213b9f871119c32079eabc191e",
"assets/packages/shrine_mvc/assets/21-0.jpg": "c21fcd094a4841e1a97bbbda76785945",
"assets/packages/shrine_mvc/assets/22-0.jpg": "ffbccb086af16dc5862a6f76ddb6356a",
"assets/packages/shrine_mvc/assets/23-0.jpg": "b684c2225ccbc14ec14dd65fb68ddd76",
"assets/packages/shrine_mvc/assets/24-0.jpg": "a92c8b074a41abf30eedc66f25e30704",
"assets/packages/shrine_mvc/assets/25-0.jpg": "0ff35e583472078e2ab670b6ed06d2dc",
"assets/packages/shrine_mvc/assets/26-0.jpg": "8362eead8df268194bef78d40324306d",
"assets/packages/shrine_mvc/assets/27-0.jpg": "e1a12f3491860a2756e7e1537449b10d",
"assets/packages/shrine_mvc/assets/28-0.jpg": "4119f3e71c38a6eb047a2ff6a7d74b8b",
"assets/packages/shrine_mvc/assets/29-0.jpg": "ca11a388bc08ead39912c2cf361140cd",
"assets/packages/shrine_mvc/assets/3-0.jpg": "0fa71fb00d37a3a9ae0a08dc39ea9ab3",
"assets/packages/shrine_mvc/assets/3.0x/0-0.jpg": "9f55a9a86b4d423947c5630a4954763b",
"assets/packages/shrine_mvc/assets/3.0x/1-0.jpg": "a499c97dc22231edf250da04a76377fb",
"assets/packages/shrine_mvc/assets/3.0x/10-0.jpg": "9286bbc94416379705ca479f62ff69dd",
"assets/packages/shrine_mvc/assets/3.0x/11-0.jpg": "22052736148d59bbd8973ff7fc4e4dea",
"assets/packages/shrine_mvc/assets/3.0x/12-0.jpg": "310819a0b53f92b3bd31fbea2b85a789",
"assets/packages/shrine_mvc/assets/3.0x/13-0.jpg": "5c611563cbb7bde9d0e1bc32f3e72ef7",
"assets/packages/shrine_mvc/assets/3.0x/14-0.jpg": "b4dd2d70d3018a219d2c6dfe1631abe0",
"assets/packages/shrine_mvc/assets/3.0x/15-0.jpg": "50f028fb390cfaa0f6f753c74ba350c6",
"assets/packages/shrine_mvc/assets/3.0x/16-0.jpg": "aa3646973515affef582512ab39a183b",
"assets/packages/shrine_mvc/assets/3.0x/17-0.jpg": "e9096a662af08fa8a0b2f7a249f14bb4",
"assets/packages/shrine_mvc/assets/3.0x/18-0.jpg": "c3d778aa170bb0a8fe3d06d0f6a80a61",
"assets/packages/shrine_mvc/assets/3.0x/19-0.jpg": "a4aaa7261cab9157791c4f152c6ba5e6",
"assets/packages/shrine_mvc/assets/3.0x/2-0.jpg": "d9c04ed1fe0cc95925d4e43c7eb8a163",
"assets/packages/shrine_mvc/assets/3.0x/20-0.jpg": "e8fae7ac109e6893b0cb97bbb9d6b41d",
"assets/packages/shrine_mvc/assets/3.0x/21-0.jpg": "fdc64c3abaa4f18242909677697df6c5",
"assets/packages/shrine_mvc/assets/3.0x/22-0.jpg": "9b53863793bd210ec7d159e87aebc0be",
"assets/packages/shrine_mvc/assets/3.0x/23-0.jpg": "457162e9fbaa6fc4a9f04b043febafbf",
"assets/packages/shrine_mvc/assets/3.0x/24-0.jpg": "9ee29440dbea09c900eea9bd31ac3934",
"assets/packages/shrine_mvc/assets/3.0x/25-0.jpg": "b974b151f54e91f39f481aadb3a40d68",
"assets/packages/shrine_mvc/assets/3.0x/26-0.jpg": "bbc6062c1c23678a5b86e493a648c2b6",
"assets/packages/shrine_mvc/assets/3.0x/27-0.jpg": "eda328e26357e013ba41bedaeb27e0f4",
"assets/packages/shrine_mvc/assets/3.0x/28-0.jpg": "19eff320f190488cceacadb02b179ea9",
"assets/packages/shrine_mvc/assets/3.0x/29-0.jpg": "22209749436aeb3fe8df97c2bacabf73",
"assets/packages/shrine_mvc/assets/3.0x/3-0.jpg": "96ff246fd96221efb9cc949ad68c8bcd",
"assets/packages/shrine_mvc/assets/3.0x/30-0.jpg": "645e267845b69121255c77fdf6936e71",
"assets/packages/shrine_mvc/assets/3.0x/31-0.jpg": "4de26420a08793b35f63cdad08be106d",
"assets/packages/shrine_mvc/assets/3.0x/32-0.jpg": "bc9e81cc56b61885cb046a32531cc41a",
"assets/packages/shrine_mvc/assets/3.0x/33-0.jpg": "88690b196aa60a5f87d9f445be10829e",
"assets/packages/shrine_mvc/assets/3.0x/34-0.jpg": "e99900dc84046703725cc3fcac18f0c3",
"assets/packages/shrine_mvc/assets/3.0x/35-0.jpg": "eb04060439c948c09835fd4ca7a2597d",
"assets/packages/shrine_mvc/assets/3.0x/36-0.jpg": "e2981239a0fdb7565caab7a94e4f1fb4",
"assets/packages/shrine_mvc/assets/3.0x/37-0.jpg": "e439015083aedd1df21d6ebd15ba079f",
"assets/packages/shrine_mvc/assets/3.0x/4-0.jpg": "81090aeadec8494f4075c628d9fa694b",
"assets/packages/shrine_mvc/assets/3.0x/5-0.jpg": "2e04290cee7c0ab77e4d195300a9215a",
"assets/packages/shrine_mvc/assets/3.0x/6-0.jpg": "4902f47b6f76a683ee19c7ea0f720254",
"assets/packages/shrine_mvc/assets/3.0x/7-0.jpg": "359717e39b3aafbc41e59858d092fb63",
"assets/packages/shrine_mvc/assets/3.0x/8-0.jpg": "6de8548d738c03cb0ec8c00a1a9680b2",
"assets/packages/shrine_mvc/assets/3.0x/9-0.jpg": "affeb6c351219f9340d6a1e1606019da",
"assets/packages/shrine_mvc/assets/3.0x/diamond.png": "3104c8b69c9dc7e6e2e4e703c460b64c",
"assets/packages/shrine_mvc/assets/3.0x/slanted_menu.png": "4ab406eeb68a9655c1a73711690f34c2",
"assets/packages/shrine_mvc/assets/30-0.jpg": "9da4cc70092b5973996a9b05f9a4c351",
"assets/packages/shrine_mvc/assets/31-0.jpg": "6e9c7a0282c8dfb0bacbafa5b9598f92",
"assets/packages/shrine_mvc/assets/32-0.jpg": "d6f1b9d586c955f871e56bb95c47cc98",
"assets/packages/shrine_mvc/assets/33-0.jpg": "b95b0ace9e0637e6b5e8701e0a969807",
"assets/packages/shrine_mvc/assets/34-0.jpg": "49dcca5ea4ece2d35a433e902cc82a33",
"assets/packages/shrine_mvc/assets/35-0.jpg": "70ba6a1c10a14d92e2345779eb5bb82d",
"assets/packages/shrine_mvc/assets/36-0.jpg": "4a814c4a3d6a0af97b3016050f4c75ce",
"assets/packages/shrine_mvc/assets/37-0.jpg": "8400e66014b44b1a653183463a5b243d",
"assets/packages/shrine_mvc/assets/4-0.jpg": "0fe383ff6affdd0fc2493c2131b2e3c8",
"assets/packages/shrine_mvc/assets/5-0.jpg": "5242b866fe8531060757c059d423d96c",
"assets/packages/shrine_mvc/assets/6-0.jpg": "ecaead6e9443503ad161f39062668b14",
"assets/packages/shrine_mvc/assets/7-0.jpg": "e0e41a63648469bdc60af8570b71ebd6",
"assets/packages/shrine_mvc/assets/8-0.jpg": "4b2af19930d6faf4fa0c393bc9f32bde",
"assets/packages/shrine_mvc/assets/9-0.jpg": "8069aef3d079a13960c9e99faa5bb202",
"assets/packages/shrine_mvc/assets/diamond.png": "10f8a6c14246d2f05839c8c30e4a4bdd",
"assets/packages/shrine_mvc/assets/i10n/i10n.csv": "140ca1909c875fdf52c50e1d44c4a223",
"assets/packages/shrine_mvc/assets/slanted_menu.png": "e09386cdf2904c4f5faf106267d88c1c",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "19205ec062764b252dd91b10af350b74",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "6007952dc2e3d55ee37bbcda55f31b1a",
"/": "6007952dc2e3d55ee37bbcda55f31b1a",
"main.dart.js": "7040ac5f69497b1ebd83e38365dee467",
"manifest.json": "59323ea3032ab9287a9098a7feef33d4",
"version.json": "dc157fd11ed6d0fa8c64895842399634"
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
