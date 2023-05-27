'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e4c4429a561f14b3ae41501e71f38916",
".git/config": "cc9388d1cb6a8999a0976193e4230480",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e4747fa4fec2fe988e4fb74b4df2e3c6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c75156f22c722e458e733cdd54b791b8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2c8eebdb01551187dcee823eef08961b",
".git/logs/refs/heads/main": "062cf08be3742513f3b310f24a649cd4",
".git/logs/refs/remotes/origin/main": "622505606b982e66e84ac7d61c0e8e15",
".git/objects/00/c46ab23da565b59cac6935db3e6a58fdb3ce10": "50eb2bffc2289a973ebcd9a50d1046ed",
".git/objects/01/72b5d294f135116f55715402dc8548d01af802": "c2b32d27b5115a24db091cc9e87d3c1a",
".git/objects/01/c76626244cb1f6557363890e7748536079b929": "5aa7fdbe3c87b12f18006a00313090b4",
".git/objects/03/83533b0a3b6adc57c09f1415a1d54c0a06d7f4": "82dfe43e97cdc0e19911e41b1bbe74ce",
".git/objects/03/bc3edec93bec97239fee50670014ec5add6f2b": "8d1fcf0d8abbceb54fd41bf05dde76ee",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/64970c1c786a1630c2500a239afee43fecae72": "560a4766975e0ca74aa2195f24f25be6",
".git/objects/08/71013f4862d36877ec48aa7f37590aedf74799": "bd7f3a1f1e8d1d046ca19d54235b9f02",
".git/objects/08/ca3e59771afad360b77887567156f4ba27bf81": "53b31c0e18559edf9f44f587e152c035",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/3f227d3f40ccbce29062f779ff18ce76863895": "c444e85b255e304d32dc33f6f8af62ea",
".git/objects/12/a8374d2054bfadaec2f95b916da61246af4a96": "0f74f761869d704b4de796d224866756",
".git/objects/17/32e4bb9d55d005a8417e569583b0be4d761ded": "5196723170351b3790d1f84d2e302869",
".git/objects/18/eabfda005128672fa34767441c09bf19acce75": "783f6f239e12d16856111529397aec0f",
".git/objects/1b/de155e4173588f7ac48da9d65229d24006099b": "bd815e551553c7883efb8d5fd1f1c8ca",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/402d7aeb13777604ef3435b2e94e09f3f35e53": "b3e3a318836b75b691ec9aef119cd1e0",
".git/objects/1d/93169c4b51e0baee5ba0a647a49e6330ca26f6": "786da8240cc988c7856ee3d003eebd88",
".git/objects/1d/cfa545cd4dd14b828864931a8fb1d652b6e24b": "59c271d772fa81c05fcd661a6ef8d912",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/d53c54bdea7828e288adeafd3f51781d4e20b4": "7fdb4c280fef1d51ba234e7e64bdcc95",
".git/objects/20/dda756d9ddd834f42fbe3b9e0dcbc2d2825e18": "d01e2b1f53f6833bf54b7a9592b21f38",
".git/objects/21/0811d31e6c6dd0690f38b46660daddfaf95fe9": "798d0ddaa654991499999e85db527575",
".git/objects/22/a93263c99330c845150f5b5d36440fda40753c": "d79b5318bbf3705f6bb14c3b573c2e03",
".git/objects/23/4a435e1fa4d38b79774554233d9b0e209497d4": "c8df050cc023f7b1d67039cee074ed63",
".git/objects/23/dfaf455894ace8281af4fe19a3a27f3e0f0b30": "61705ddf332974756a7721c2b0b290e4",
".git/objects/27/38ca1fb312519e3636b876c22d777e4e999580": "2b4234eb38138043dd407a5260bed2c6",
".git/objects/2a/bd7eb16b1caeb7d04d73f803f434f0abb12778": "62eeafbcfd004d64392fb3f879ea3c65",
".git/objects/2a/d3256bbe56ab1d607fd9241d3008c48fb1da31": "06a1540070f07176b0dca1a3aa718463",
".git/objects/2b/5f996f128aec9359e9c955bea182dbb1c2f26f": "b8bc85c8d8fca044c7632f169c22d6c2",
".git/objects/2d/bf4477cac6fd63957564e2e7cf79bf20e08eb2": "015dc57795b0e0c044c5581f9944b8c6",
".git/objects/2e/8d22217cb74f10698cf6423ce81f0785dccabe": "e6f74c2b7d25694dc42ea58aecc16961",
".git/objects/35/01cb0d00730310f7535fb602e7b2eb06d15406": "ec54b262530fb425f7445f991f5c1844",
".git/objects/35/2a0bffd190502cece791fb3820a93729625bdb": "e18b9f826a710e69e63a2d1994ebf566",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/00409830a5c225a8c59fa36baa253f50f11497": "47e9df6fffb4af1757b5432e429437e5",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/465e5ae301b3ddefabfe22b188c4fee52182c0": "eebe5c7c15a8b55c3d09dbb81b38a9a6",
".git/objects/3a/2d6e4455aa85300c383d10c1cb0b371e9c4125": "08fc7229b49ff41908f98a7f99630ab9",
".git/objects/3a/d1be8f6821499dff50c1566c057f9f9ecc41db": "93dd8f0fc1b2e9c1b964b560b313a960",
".git/objects/3d/0def5c546032a9c3e8132d1dc7d7baa36f527c": "e10130a0f29de248a7fa35de40bb72f0",
".git/objects/3e/bbf62dcb5cde7e60598ba4a9f42a6d6d49fc38": "d6eb73999fb76c512a61f1681c727de4",
".git/objects/40/a74b6a394a5eb85f084677d4281874b8d8bb77": "3374d46530a123cf5231a8dd8570fe96",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/27b64860551aa4104508693ea7e08a7ac747d5": "986e0ce165aa78d9c55ad55cfdd3225d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/65021cf2eae0f6b4de5a4c06f446ea6172b411": "49bfb9677d80ce09ff1c8cea33ea780b",
".git/objects/48/0ab9cf9230d767b6535e4e8e51cef3b75bf23a": "3fa35cf3dfd01fcc5de8e16e54c51e93",
".git/objects/4a/cdbb81780e830f3f5db1d7e28c33d85e164769": "343b685b44dfc2ee504a505d7e8296dd",
".git/objects/4b/1dd4e546f23cd0b38da70cd7355450d5358f88": "b681009b1c2b5bee8a9d02f14da4e8eb",
".git/objects/4b/281592d0889ec4d07f3a9e4b17d7bdcd4bb0c4": "0ddfe7a371e56f7f42976d41596e2031",
".git/objects/4b/7fa2174bbcabc8b7dfa7e981bf56dd16bd020d": "88fbf2c3232c14985f57131ddc41be30",
".git/objects/4d/60862167c542dcdb71c1f1aa926e03bdc11cf6": "5e80bd2c17e420c8166cde136c5274ae",
".git/objects/4d/6b912eef02b84ea0a1ace418edab135f7ab81a": "ad774adc573be0a2819545ab0643f63c",
".git/objects/50/4b13c16e641cd6951f8abc5490c5959b8798df": "9a4b64fcb93a809624aa5263a25c9ac1",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/61dc533a201f88d683bcde38e45ecca1d7ed80": "b8e06bcfc43bb68be3448ce363650833",
".git/objects/53/5ce81cf842ff7373f582ecf4ac39b14002fa9b": "bd311ca70e7863ef97734760bb1db90a",
".git/objects/54/3bd1bc3b7ae2558ecb017de78e527fb7090e25": "9ba20b749c4bc2ca4d05d5f5eb3c7d02",
".git/objects/54/9fbb13c56d4e0b47581a04a4119418b7c59c50": "8c08124392b4b1a22b597c9da06a2bf7",
".git/objects/56/2949d9dc99e4f9bbc5d56dbc4955e648827b95": "9dbfa6728de53f00da6031b34e52bbc9",
".git/objects/57/6c1828a64d6484891013e03d55422f6123cb1e": "89906af6ded00429bc7a051b7b18b016",
".git/objects/59/6b1b5b848a6a5f0f43555addb532a918080d48": "6b0ff2bfa6db16085c7b89acf88b18d5",
".git/objects/5a/02083a1dace59688d9bde2b1fe2b1765171398": "12ce3cea4467ed3c3f40c39e7c5add21",
".git/objects/5a/bb19dbeeba5fd463803233dffef87fc7f7325d": "544f64d8dd793803971323b4724d4461",
".git/objects/5c/3871e91b9a14dad97eaf92266389e431e351d2": "4ce6b330ccdb555c97ec17918c50345a",
".git/objects/5c/d049104f05858074227080b45f286ab4af2254": "191b3f44a0d024436acb82f6ff064d4c",
".git/objects/5f/cedc1e8a8ac7d5f785a78456c9215de0fccaab": "d314a722b39821aa600a862d2cf5d5e8",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/18eca4e7797c4dc8f96624a276173bd733758e": "9d65fd91b43c357c959b152402f4cf20",
".git/objects/64/8fa5b64834f6a2fca10f1f906041223451b06a": "d0b6075d12318896159ade1ac7530af4",
".git/objects/67/5f6a6d0fc7bdafa41add445d431f136f486208": "168f80418fecec11f28bdd489fde79aa",
".git/objects/68/519687fe268f0c04bd1a88ad7839d3b6b56b91": "46db9d10397dfe83658b04791cffd823",
".git/objects/69/6794210aa6da0849d5e10e9d25ddc7fb689a65": "76634601aa4e9b5c880db0dc05728e3f",
".git/objects/6c/bddf0a0aba7d86d0bf9735d83fdcd4b025849e": "6cf16a7225d438d10c542010557102eb",
".git/objects/6e/995923a90c8946f310d50d2b9fe4550f87c389": "0ec9c15f2ce145aba673f72a335b4a00",
".git/objects/6f/3a2913e199cebe9ace75cf7e5a2818da27fbd3": "45159ad6d14348c955865d0f51914657",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/5617764bfaf4f36e92f3f032c2832b1700f602": "74843c1f9ac1144f1279872babd729f3",
".git/objects/71/c5529a2ebaf18896cb641c94ccc28a83426ea5": "230f1a8c11c2d1ed6669d08af9e40f75",
".git/objects/75/f2b4ddd59c262c1744d06281651a02f9111955": "2952d7c46bdb6daf832f9c3bc330ce6f",
".git/objects/76/6257199ddcb193e918a8cdfd8b74975413095d": "60e6ec59674ca7e089480adc828b46b6",
".git/objects/79/2c67c55ade5a1dc0ff92febec17fa278344769": "6600e80725892c9104824674d00ea5bb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/05ebc6a306e469910223f32c182ebe8469f775": "56ed32829b93aafdd9a2ec99e347ff70",
".git/objects/7d/16d6dc133efea8bdf70c2b364c06924d4a1cdd": "00b01a1148a30c695ec519233dbe11d7",
".git/objects/7f/b37f2ac2583d8df1efaf1d457dcfdf043025d4": "fd0ee04d2aad45c0eecd7055ccc97b3d",
".git/objects/81/6341208c8494a5dae114a5d2dd3665c222f6d6": "3d139e75d262426204920aaf41b3c276",
".git/objects/83/8f112f86c7f02688b2b819ea7925fa6aac5085": "c3a13e24b2d9cfce45f3afc693c2d4b7",
".git/objects/84/09f24eb43b850f1a588bb6b36609886e8a8ff9": "921fda02bdb62088b9146871e2dd27a8",
".git/objects/88/7fca4ee95acd84aa655808e0ec1e90e32321f8": "09e82b54dae8251e333586b762ed5509",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/1872577967b172016b92408e8d929bf442e715": "a5bcb957e58a8db0a376ed67e0d7dde5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/50037bfb670f635930ff4e899de8dc3796134b": "a1f96d4d77725b66213a3678b3e12d3e",
".git/objects/8b/57ca144f404807594613265944c18813095c1e": "a1e015fe7575e0fd486c3e1cc257efaa",
".git/objects/8c/45602c601070c8c1188d622fe66f48b157b470": "68f3391730de0b8fc058a1e68b078408",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/1a144e573b1b852f90df60cc0aedaf01c26b39": "d666c87e929c4375752582e7c619a14d",
".git/objects/8d/c1511dddc055c0923b8c44036ec6eb178b87e2": "96fae4d1f4e7ce9d90be003ba6aacb50",
".git/objects/8d/fa713c01992c40a710eccfb9cd3a10ce5a6fce": "b446a677bb28334529db95056d00a636",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/14ce7018e6833d9835573fb4508c540a88ee37": "c703cfc380d745a45f17d9efb54abaef",
".git/objects/8f/1d9460a48d01f834ccbc6d9182c7883cdfa9bc": "b5e1c1024ccb41101ff7e494e89a1fd0",
".git/objects/8f/6c896b6ec9d1c7a5f06ebeb8ce4faee9041148": "0e313c9047d79639e0afc3f2fef3feaa",
".git/objects/9c/e2695a7de329afc937f85b1347b600cc3e4072": "bd4ceef20662c9280d548db7ca9da99f",
".git/objects/9d/5aed3fb3c62d2654c48b8d16f80c9a77317a97": "8f075de9dbc50a6ce354f775c8151418",
".git/objects/9e/102f223282e63c60725352c7240aaca7cef3a4": "f34e3f80ba59df279568fc42fb17f0dc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/def62e0d24f3de23e51ed953110b18cbf79af2": "b2e2e6c5f9086be8284e44479b6a5097",
".git/objects/a6/8c77fda966d15f64c846647bba315be2175616": "c2294d297d47497a61669f6872fd5f87",
".git/objects/a6/ad573e7676272b4d61763628a64bc4347b9041": "cc9b261fb7b38ae1877c5698478d97f8",
".git/objects/a6/b03b56b772aaa0f06f205c84b2198b0f658c80": "9412941eb0e0861620aae9bdd5bdfa24",
".git/objects/a7/cd2800c458bd5cd6072a3ee98ba828099c6ddc": "d94ce066466ee9e5b0962c1aa46dd79e",
".git/objects/a7/d8241a2012fd964bed1f2ce82df8116f7c776a": "adea2a08ee98e37081344a9352dbf89f",
".git/objects/a9/4f5f5ca4a2a842d321baf2b656170655e2ff65": "9083f4c70d52c2008901153a9e915f07",
".git/objects/a9/b4effaceee60aa8f2eab0942834b71dc4c427d": "343a602dc8a19498a122ce8b918a0833",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/186a094eac840002dac25cfe0bab1692f84879": "dfcea275d0a7956e415df971d7f48865",
".git/objects/ac/7a8ddc9ad99c46714d20862f469f98a240d05a": "c2c1053005f18e6d963aaeb89eb5b8f6",
".git/objects/ad/e0505096b9912d6ec5b9fcaf4e33b3c95d9546": "e976dd1b62abdde4f79518784f0b0ebb",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/5500fd0f8fa13b92dec6c1852b537df28f307b": "0e011d831c459b2fb925381fab64afaf",
".git/objects/b0/8b65e51a4548caa1054a69ce32266568d4634a": "c6655bb570db451ffa89fc5b4821b6f3",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b5/51f53578cbf6aa7c52c80a854d20f24d227be3": "493bcc6832b61aa48e01400550f4633e",
".git/objects/b5/e1971a96aec1b2e8ee98a5e563bc032af7d023": "d22e081b5b0c8438c4fe61bbfda35de3",
".git/objects/b6/a3eaa7afd132791549f273c2a9e76f6327c361": "d42316e509eed41bc914845fc15f677c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/221ddce11117bb78909f94a4139aa8232e1e5c": "942b4c5faf25b6774e93044f99628d97",
".git/objects/b8/267eed18330065ddd2bbfdd08a6018c602b382": "ec79867cc0bcafd0b0488a8ae2eb5082",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/3a75d2f875ba74dd27b717b08338a5bdebde7d": "ff55a243e41dc80e2c331745d67be6da",
".git/objects/bb/353ce8fc865ff5451360efc247fff10f228ea0": "3d87e4d58acb9a068f60bff342b66c60",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/e343cee1cd701da41981e52c5da06eaed45325": "c5c444459633651f5972565679bc4f88",
".git/objects/bf/a244d67d4652e5a0b28fe6af17b234c64a88ba": "0a69e47bf4baeeb8347fd317af278c64",
".git/objects/c0/69ad01658f905e1868911872601e7b96cd559c": "9a08d944f35258c923605e592c1c1f83",
".git/objects/c2/18fcbf25d86620829510f8b2bbf79e60833bcb": "9fc1d36bc559b10e876637d7c430a44d",
".git/objects/c4/b331321a440535cc060998bb1b8813d98decbe": "70a78224eeef258b1e8677cb770b8abd",
".git/objects/c6/9ae6ea171b3ac341f4da20a66d92dd0b118115": "854d003c35c6ab06cf8daccd2ad373e9",
".git/objects/c7/0ee1664c947596fe5ca2562229caaafe7a0857": "c969852c91aab5993dd5211b75e700fd",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/c7/cf02b7852289fabca9d913509f1a63b9207a32": "5fd7820ae42cbbf5833a03d3a0c0ce9b",
".git/objects/c8/d101cf708a5f4ba779f44645d76241cdfe9edf": "9111e2f1b6c82dcc6237bffa76acc409",
".git/objects/ca/8d7efd322e47ff2c65acc402acf67849420686": "6771711e925fdf5fdb1ff0e0d8f7c5b3",
".git/objects/cf/073dbd9dea181e495ca33fa0994230c81a0ac5": "a8d1f878ae7b155e8096e4c176fd57bc",
".git/objects/d1/405189e7b201e7d69c090ed31c1905d715d833": "9e8b2595ec4beace0db9e147480abf19",
".git/objects/d3/ae2194c00992fe03158ae67f265e4aaca59f45": "23001a5e26481dee2df38ba1427c4cce",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/bbc87cefaa5205c510045a36fc16026d90f6aa": "706ff903a84e79f154b01e4f88d22713",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/a67b00bdb36138e7d2b23717e8da8d1b9a5e08": "248b02cba496f5e12c614eb0dbdc7dc2",
".git/objects/da/1478f71efa62a9614ed12be3f8a7e7916eaecc": "a02e73ed27675981e70a69607c98cfa3",
".git/objects/db/f6f2f7f2b7e94a01ab6e3309a301c97730e35f": "9f754a2df67438eeca78cb88bda96d74",
".git/objects/dc/38568f31c664813b16fcdc9487908e3f2d3809": "45a4a1f7869fc460dd014d6adfacf217",
".git/objects/df/a13a6d63fc1168ae24c8fac10e1a4c8f10eb99": "b20195d37b575967f9f4364880515dfc",
".git/objects/e3/b884df6161373cf00b98a77b791108694c088b": "3e2fc9ec7b9eeaf3fc0bf0edf3ffdcce",
".git/objects/e4/de0b3cd2131cf4a2e4afe4a2edb71cddabc904": "fbcb6179e75153c91d2ff373c0e48045",
".git/objects/e5/84396d51b0b97d3b55b85da9e004ca951591c3": "3d257e73a337701222cc166c505533c1",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/fbbb8f59e289e6971244d9858ba60e0efb23f0": "d328ac7a5cb470fe017b6178cca644be",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e8/16c3ef1a290bb59bb8c6a6b81c05c37996f05e": "da48cc27f9933b614eec49799fe01f07",
".git/objects/e9/27b9317861b1210d267a21cbc8937e63cbb7e2": "c504ef8b899ac7b401d0d7d511463b44",
".git/objects/eb/5b2926d34c1ad9076d1c9e9e2deed8259177a4": "bc1e50534756edc0e020d89b550f061e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/cc6913958d622e7da64383544ce8ebfa0b32bb": "867725a9e240668ab774e50280638806",
".git/objects/ec/d7c0078900e53449c97a6e47e138055663cc7e": "d4e5accdc5b66ba8abfdf92e88568537",
".git/objects/ed/464349efc2e56be609b8df67decd60d9f49a50": "2001cc509c4fc4002e94169e7e85e4da",
".git/objects/f0/3c6f0e784d286372a7c6d4f6da3fda2a513108": "c464066d6c19ae58885b9d5288bc6c92",
".git/objects/f1/0400851ac132a01ca37c3ab91e44bb64b17911": "3a62356f1b27a76e0cf0a8be41438b52",
".git/objects/f1/fade7a6710667ecef5167ea54e4b208584338a": "39d73ab3019e6f8c18c5c8dc94dc9112",
".git/objects/f2/99a883867237c2ed913c224c1196badddc2f99": "e5670af3759b3018ab5c7caaa937fc58",
".git/objects/f6/e0242a601a925c77c7b8e9d0381289b72f5916": "1a58f9a05e8c658d6ae5917d0c9b5615",
".git/objects/f9/91698daa3b4c5c4965352ff9e90f6b839e4deb": "679cb8eda7eb00ef19c16a5c94a95ccf",
".git/objects/fa/a8265dec32c4b18bc6d066a293cf5cce106311": "db51214b6f367b89e107e7d1437e76ca",
".git/objects/fa/b1a53000aec2932cb258c75773f9242e7f55e1": "da03b92743130c93c45f41840290f2f9",
".git/objects/fd/5d2ff5c64f122428a7ce2f3227f20e85677a76": "ff8b007235b704585a2121c46014d4fb",
".git/objects/fe/f9ebd0f0ac45c3edbc4083c1afeef91f1d6a8a": "27405ba5056f9d035144d5f660b8afcf",
".git/objects/ff/35b2f9100dff2cab038996a375a607b3ca7920": "e5365c22f493d288f1528bec33e39248",
".git/objects/ff/b1c526c20aa2cf5a4c6dae9b31585e608c1c01": "e7eaad6136039372caa21195384baa08",
".git/ORIG_HEAD": "67383a7a188a682418d2956ff952819e",
".git/refs/heads/main": "67383a7a188a682418d2956ff952819e",
".git/refs/remotes/origin/main": "67383a7a188a682418d2956ff952819e",
"assets/asset/images/5d8318ba-1c38-4450-a29d-29971df6c58f.jpg": "32282acd7a5df3a9d5a92a6b6545cd8e",
"assets/asset/images/appStore.svg": "ef9eea8572945f9d25ca74920b9e09cb",
"assets/asset/images/appstoreLight.svg": "a7f11e2433b771698d84a35d8e7b09ea",
"assets/asset/images/container6Mobile.svg": "1ff972d6082c5a272c4aacd160fb2c8f",
"assets/asset/images/cusotmerDp1.svg": "a10d1931d75c46181ee5a84afdfc4f67",
"assets/asset/images/discordIcon.svg": "d21b2867fbed534431a30838723ec5fd",
"assets/asset/images/fbIcon.svg": "3605008bb4c5a187f13feb4d23726cd9",
"assets/asset/images/Gmail%2520-%2520Also%2520give%2520a%2520brief%2520about%2520columns%2520of%2520table.pdf": "2d154aa74aa40ad33b279e73c78d8471",
"assets/asset/images/googleplay.svg": "3d22c73ce5a64241e8e8b525cb535f83",
"assets/asset/images/googlePlayLight.svg": "ec5bd3fc4b679b47a1135dfe9a2e60de",
"assets/asset/images/haderIcon.svg": "e85029ef7fc890899c3156ba602f0fe5",
"assets/asset/images/heroImg.svg": "72f59d6eda339050ffc10cd8c5c0cb9a",
"assets/asset/images/heroImg2.png": "a66906110c40ea635040111efeca8b6e",
"assets/asset/images/heroImg2.svg": "44fbb0b2580fea5c0410266ca3adaade",
"assets/asset/images/heroImg3.png": "6a359697bbe0724714b3053cabdf7393",
"assets/asset/images/heroImg3.svg": "471297f47049d3e8203f486b5d4c8cfd",
"assets/asset/images/heroImg4.png": "cef26bd20eb87313df04b17964d02292",
"assets/asset/images/heroImg4.svg": "802f380114df5151415dc71be9fd651d",
"assets/asset/images/heroImg42.png": "12ff051abdbeac0211390e319c8a4f91",
"assets/asset/images/heroImg43.png": "bbea6ba1b924ec669a72b7f2d231c33f",
"assets/asset/images/heroImg5.svg": "29b7048377d16c490114058b4e409dc6",
"assets/asset/images/heroImg6.png": "70ba04df5ba1f39121b655b44c9fe108",
"assets/asset/images/heroImg6.svg": "3b97fe63181c4a648749879bd86b129e",
"assets/asset/images/HeroImg6ImgPhone.png": "b4804bed3df7be3824b72308fa5e0f8d",
"assets/asset/images/heroImgMobile1.1": "aaaab735809aa8ddc4bfc9d228d6e1b7",
"assets/asset/images/heroImgMobile1.2": "58374d91c923b4ae89ef5403110f7233",
"assets/asset/images/heroImgPng.png": "e2d9ad89abbfbdd4ffbd3cabd728384c",
"assets/asset/images/images.jpeg": "a269ec3e994c1a25192f0a52e401cab3",
"assets/asset/images/indian_tailor.jpg": "b01c712d20d265aa3a2668557c0f61f5",
"assets/asset/images/inrIcon.svg": "181e5d851b073e7e2c0bc24c3f99dfe2",
"assets/asset/images/insight.svg": "87a15470ca79006f90e168e808f90dac",
"assets/asset/images/Instagram.svg": "f8fb5b38c0e96c11243edf07db1118f3",
"assets/asset/images/invoice.svg": "c994127d411db8030dbdf972528116cc",
"assets/asset/images/ladiesTalior.png": "835db6a7341799608a2a342ad04ef957",
"assets/asset/images/linkedin.svg": "37e88eb13fb2a565e63eeb6e89b22c8a",
"assets/asset/images/measurementIcon.svg": "c142dc749b71fc41610e55cc9e45a1bc",
"assets/asset/images/menuIcon.svg": "21d54568a1e876a74edec64c8f40ff0c",
"assets/asset/images/mulitligual.svg": "a862c6c88ce64057887aecfdbdb22a20",
"assets/asset/images/panjabiTalior.png": "812f818dd9af1cc6ba19f2b10522afe6",
"assets/asset/images/peopleIcon.svg": "f12aad9043e309231af795787201aba1",
"assets/asset/images/peoplePaymentIonc.svg": "ceaff5f4bebe1c63f281083a69d2ab14",
"assets/asset/images/peopleTickIcon.svg": "758acf9dc0fd0773e60f6e22ad67a4b8",
"assets/asset/images/purpleCircle.svg": "6733d75894fbc76f1cba1d8cfac751c9",
"assets/asset/images/sheetTickIcon.svg": "c0cccdc008aae4b55b4eb3f9fac6714b",
"assets/asset/images/shielIcon.svg": "f975670eda5b45ab6320c4197e9c5ef0",
"assets/asset/images/taloir1-transformed.png": "a4041640aa45e51b87898370883a7740",
"assets/asset/images/testomonialImag1.png": "f3439dcc89ce82b7092c45939670aff0",
"assets/asset/images/twitterIcon.svg": "2be4d9e2a3c6057ec36839330db7db57",
"assets/asset/images/whatsAppIcon.svg": "c57dbe23d20498dcdd1099411db333e8",
"assets/AssetManifest.bin": "778aaf8ea18579fb20448bc675b80191",
"assets/AssetManifest.json": "ba6cb2a0cf22c8d004addc45360deb79",
"assets/AssetManifest.smcbin": "34cfd29ae2c34965a9a70a86161b28f0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e87190567d932952b9c6bc0181e73e89",
"assets/NOTICES": "1d5559d489927a135c5112f9836c17b7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "572af51568c43aa87b7c89deb96ff8c8",
"/": "572af51568c43aa87b7c89deb96ff8c8",
"main.dart.js": "bbf3a148c03925787e669a948edc057d",
"manifest.json": "55ec68961c1fac122d4a2311cc70e711",
"README.md": "c19bd4f6289427b939574c0b21d3f72f",
"version.json": "1344d082b2c5a54e3ba619513aaaf88f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
