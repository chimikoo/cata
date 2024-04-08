import{o as e,q as t,T as a,z as s}from"./preset_utils-D9cZGIsL.chunk.js";import{Q as i,an as n,U as d,W as r,Z as c,X as m,Y as o,a1 as g,J as h,a3 as l,a2 as f,a4 as p,a as u,_ as S,a0 as P,al as T,S as I,F as O,R}from"./detailed_results-B8LXSl10.chunk.js";import{S as k}from"./inputs-DZuiftE9.chunk.js";const v={items:[{id:44007,enchant:3819,gems:[41401,40017]},{id:40071},{id:39719,enchant:3809,gems:[39998]},{id:40723,enchant:3859},{id:44002,enchant:3832,gems:[39998,40026]},{id:44008,enchant:2332,gems:[39998,0]},{id:40460,enchant:3246,gems:[40017,0]},{id:40561,enchant:3601,gems:[39998]},{id:40379,enchant:3719,gems:[39998,40017]},{id:40558,enchant:3606},{id:40719},{id:40375},{id:37111},{id:40432},{id:40395,enchant:3834},{id:39766},{id:40342}]},w={items:[{id:46184,enchant:3819,gems:[41401,39998]},{id:45243,gems:[39998]},{id:46187,enchant:3809,gems:[39998]},{id:45618,enchant:3831,gems:[39998]},{id:45519,enchant:3832,gems:[40017,39998,40026]},{id:45446,enchant:2332,gems:[39998,0]},{id:46183,enchant:3246,gems:[39998,0]},{id:45616,gems:[39998,39998,39998]},{id:46185,enchant:3719,gems:[40026,39998]},{id:45135,enchant:3606,gems:[39998,40017]},{id:45495,gems:[40017]},{id:45946,gems:[40017]},{id:45703},{id:45535},{id:46017,enchant:3834},{id:45271},{id:40342}]},F={items:[{id:48134,enchant:3819,gems:[41401,40133]},{id:45243,gems:[40155]},{id:48137,enchant:3809,gems:[40155]},{id:46977,enchant:3859,gems:[40155]},{id:46993,enchant:3832,gems:[40133,40113,40155]},{id:47066,enchant:2332,gems:[40155,0]},{id:48133,enchant:3246,gems:[40113,0]},{id:47145,gems:[40155,40113,40113]},{id:48135,enchant:3719,gems:[40155,40155]},{id:47097,enchant:3606,gems:[40155,40155]},{id:45495,gems:[40113]},{id:47224,gems:[40155]},{id:47059},{id:45535},{id:47206,enchant:3834},{id:47958,gems:[40155]},{id:40342}]},b={items:[{id:51302,enchant:3819,gems:[41401,40113]},{id:50609,gems:[40113]},{id:51304,enchant:3809,gems:[40113]},{id:50668,enchant:3859,gems:[40113]},{id:50717,enchant:3832,gems:[40113,40113,40113]},{id:50630,enchant:2332,gems:[40113,0]},{id:51301,enchant:3246,gems:[40113,0]},{id:50705,gems:[40155,40113,40113]},{id:51303,enchant:3719,gems:[40113,40155]},{id:50699,enchant:3606,gems:[40133,40113]},{id:50400,gems:[40113]},{id:50636,gems:[40155]},{id:47432},{id:50366},{id:46017,enchant:3834},{id:50635},{id:50454}]},E=e("PreRaid",{items:[{id:37149,enchant:3819,gems:[41401,40051]},{id:42339,gems:[40026]},{id:37673,enchant:3809,gems:[39998]},{id:41610,enchant:3831},{id:42102,enchant:3832},{id:37361,enchant:2332,gems:[0]},{id:42113,enchant:3246,gems:[0]},{id:37643,enchant:3601,gems:[39998]},{id:37791,enchant:3719},{id:44202,enchant:3232,gems:[39998]},{id:37694},{id:37192},{id:37111},{id:37657},{id:37169,enchant:3834},{id:40699},{id:33508}]}),C=e("P1 Preset",v),M=e("P2 Preset",w),y=e("P3 Preset",F),W=e("P4 Preset",b),B={name:"Celestial Focus",data:i.create({})},H={name:"Thicc Resto",data:i.create({})},A=n.create({classOptions:{innervateTarget:d.create()}}),D=r.create({defaultPotion:c.MythicalManaPotion,flask:m.FlaskOfTheFrostWyrm,food:o.FoodFishFeast}),j=g.create({arcaneBrilliance:!0,bloodlust:!0,divineSpirit:!0,giftOfTheWild:h.TristateEffectImproved,icyTalons:!0,moonkinAura:h.TristateEffectImproved,leaderOfThePack:h.TristateEffectImproved,powerWordFortitude:h.TristateEffectImproved,sanctifiedRetribution:!0,strengthOfEarthTotem:h.TristateEffectImproved,trueshotAura:!0,wrathOfAirTotem:!0}),x=l.create({blessingOfKings:!0,blessingOfMight:h.TristateEffectImproved,blessingOfWisdom:h.TristateEffectImproved,vampiricTouch:!0}),U=f.create({heroicPresence:!1}),_=p.create({bloodFrenzy:!0,ebonPlaguebringer:!0,faerieFire:h.TristateEffectImproved,heartOfTheCrusader:!0,judgementOfWisdom:!0,shadowMastery:!0,sunderArmor:!0,totemOfWrath:!0}),z=t(I.SpecRestorationDruid,{cssClass:"restoration-druid-sim-ui",cssScheme:u.getCssClass(u.Druid),knownIssues:[],epStats:[S.StatIntellect,S.StatSpirit,S.StatSpellPower,S.StatSpellCrit,S.StatSpellHaste,S.StatMP5],epReferenceStat:S.StatSpellPower,displayStats:[S.StatHealth,S.StatMana,S.StatStamina,S.StatIntellect,S.StatSpirit,S.StatSpellPower,S.StatSpellCrit,S.StatSpellHaste,S.StatMP5],defaults:{gear:C.gear,epWeights:P.fromMap({[S.StatIntellect]:.38,[S.StatSpirit]:.34,[S.StatSpellPower]:1,[S.StatSpellCrit]:.69,[S.StatSpellHaste]:.77,[S.StatMP5]:0}),consumes:D,talents:B.data,specOptions:A,raidBuffs:j,partyBuffs:U,individualBuffs:x,debuffs:_,other:{distanceFromTarget:18}},playerIconInputs:[k()],includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[a]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[B,H],rotations:[],gear:[E,C,M,y,W]},autoRotation:e=>T.create(),raidSimPresets:[{spec:I.SpecRestorationDruid,talents:B.data,specOptions:A,consumes:D,defaultFactionRaces:{[O.Unknown]:R.RaceUnknown,[O.Alliance]:R.RaceNightElf,[O.Horde]:R.RaceTauren},defaultGear:{[O.Unknown]:{},[O.Alliance]:{1:C.gear,2:M.gear,3:y.gear,4:W.gear},[O.Horde]:{1:C.gear,2:M.gear,3:y.gear,4:W.gear}}}]});class q extends s{constructor(e,t){super(e,t,z)}}export{q as R};
//# sourceMappingURL=sim-DprH7Ni6.chunk.js.map
