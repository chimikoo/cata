import{l as e,o as a,p as t,q as s,J as l,K as i,L as n,N as d,O as c,Q as o,R as p,T as r,U as I,V as m,z as h}from"./preset_utils-D9cZGIsL.chunk.js";import{F as u,Q as g,ab as v,U as S,W as f,Z as T,X as A,Y as O,a7 as P,a1 as R,J as W,a3 as y,a2 as G,a4 as b,b as w,a as k,_ as E,a0 as F,S as H,R as B}from"./detailed_results-B8LXSl10.chunk.js";import{S as C}from"./inputs-DZuiftE9.chunk.js";const L=e({fieldName:"okfUptime",label:"Owlkin Frenzy Uptime (%)",labelTooltip:"Percentage of fight uptime for Owlkin Frenzy",percent:!0}),V={items:[{id:40467,enchant:3820,gems:[41285,42144]},{id:44661,gems:[40026]},{id:40470,enchant:3810,gems:[42144]},{id:44005,enchant:3859,gems:[40026]},{id:40469,enchant:3832,gems:[42144,39998]},{id:44008,enchant:2332,gems:[39998,0]},{id:40466,enchant:3604,gems:[39998,0]},{id:40561,enchant:3601,gems:[39998]},{id:40560,enchant:3719},{id:40519,enchant:3606},{id:40399},{id:40080},{id:40255},{id:40432},{id:40395,enchant:3834},{id:40192},{id:40321}]},U={items:[{id:45497,enchant:3820,gems:[41285,42144]},{id:45133,gems:[40048]},{id:46196,enchant:3810,gems:[39998]},{id:45242,enchant:3859,gems:[40048]},{id:45519,enchant:3832,gems:[40051,42144,40026]},{id:45446,enchant:2332,gems:[42144,0]},{id:45665,enchant:3604,gems:[39998,39998,0]},{id:45619,gems:[39998,39998,39998]},{id:46192,enchant:3719,gems:[39998,39998]},{id:45537,enchant:3606,gems:[39998,40026]},{id:46046,gems:[39998]},{id:45495,gems:[39998]},{id:45466},{id:45518},{id:45620,enchant:3834,gems:[39998]},{id:45617},{id:40321}]},x={items:[{id:48171,enchant:3820,gems:[41285,40153]},{id:47144,gems:[40153]},{id:48168,enchant:3810,gems:[40153]},{id:47552,enchant:3722,gems:[40113]},{id:48169,enchant:3832,gems:[40113,40113]},{id:47066,enchant:2332,gems:[40113,0]},{id:48172,enchant:3604,gems:[40113,0]},{id:47084,gems:[40133,40113,40113]},{id:47190,enchant:3719,gems:[40113,40113,40113]},{id:47097,enchant:3606,gems:[40133,40113]},{id:47237,gems:[40113]},{id:46046,gems:[40113]},{id:45518},{id:47188},{id:47206,enchant:3834},{id:47064},{id:47670}]},D={items:[{id:48174,enchant:3820,gems:[41285,40155]},{id:47468,gems:[40155]},{id:48177,enchant:3810,gems:[40153]},{id:47551,enchant:3722,gems:[40113]},{id:48176,enchant:3832,gems:[40113,40113]},{id:47467,enchant:2332,gems:[40155,0]},{id:48173,enchant:3604,gems:[40113,0]},{id:47447,gems:[40133,40113,40113]},{id:47479,enchant:3719,gems:[40113,40113,40113]},{id:47454,enchant:3606,gems:[40133,40113]},{id:47489,gems:[40155]},{id:46046,gems:[40155]},{id:45518},{id:47477},{id:47483,enchant:3834},{id:47437},{id:47670}]},M={items:[{id:51290,enchant:3820,gems:[41285,40113]},{id:50724,gems:[40113]},{id:51292,enchant:3810,gems:[40113]},{id:50628,enchant:3722,gems:[40155]},{id:51294,enchant:3832,gems:[40113,40155]},{id:50630,enchant:2332,gems:[40113,0]},{id:51291,enchant:3604,gems:[45883,0]},{id:50613,enchant:3601,gems:[40113,45883,40113]},{id:50694,enchant:3719,gems:[40113,40133,40155]},{id:50699,enchant:3606,gems:[40133,40113]},{id:50664,gems:[40113]},{id:50398,gems:[40152]},{id:50348},{id:50365},{id:50734,enchant:3834,gems:[40113]},{id:50719},{id:50457}]},j={items:[{id:51290,enchant:3820,gems:[41285,40113]},{id:50724,gems:[40113]},{id:51292,enchant:3810,gems:[40113]},{id:50628,enchant:3722,gems:[40155]},{id:51294,enchant:3832,gems:[40113,40155]},{id:50651,enchant:2332,gems:[40155,0]},{id:50663,enchant:3604,gems:[40133,40113,0]},{id:50613,enchant:3601,gems:[40113,45883,40113]},{id:51293,enchant:3719,gems:[40113,40155]},{id:50699,enchant:3606,gems:[40133,40113]},{id:50664,gems:[40113]},{id:50398,gems:[40152]},{id:50348},{id:50365},{id:50734,enchant:3834,gems:[40113]},{id:50719},{id:50457}]},z={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1.5s"}}},{action:{castSpell:{spellId:{spellId:48461}}},doAtValue:{const:{val:"-1.5s"}}}],priorityList:[{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"5s"}}}},castSpell:{spellId:{spellId:2825,tag:-1}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"0.5s"}}}},castSpell:{spellId:{spellId:48463}}}},{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"20"}}}},castSpell:{spellId:{spellId:65861}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:48463}}}}},castSpell:{spellId:{spellId:48463}}}},{action:{castSpell:{spellId:{spellId:53201}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:48518}}},rhs:{const:{val:"8s"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}}]}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:48518}}},rhs:{const:{val:"8s"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}}]}},castSpell:{spellId:{spellId:54758}}}},{action:{condition:{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}},castSpell:{spellId:{spellId:48465}}}},{action:{condition:{auraIsActiveWithReactionTime:{auraId:{spellId:48517}}},castSpell:{spellId:{spellId:48461}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:48468}}}}},{not:{val:{auraIcdIsReadyWithReactionTime:{auraId:{spellId:48518}}}}}]}},castSpell:{spellId:{spellId:48468}}}},{action:{condition:{not:{val:{auraIcdIsReadyWithReactionTime:{auraId:{spellId:48518}}}}},castSpell:{spellId:{spellId:48465}}}},{action:{castSpell:{spellId:{spellId:48461}}}}]},N={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:48470}}},doAtValue:{const:{val:"-2.3s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}},{action:{castSpell:{spellId:{spellId:48461}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"5s"}}}},castSpell:{spellId:{spellId:2825,tag:-1}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"1s"}}}},castSpell:{spellId:{spellId:48463}}}},{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"20s"}}}},castSpell:{spellId:{spellId:65861}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"0s"}}}},castSpell:{spellId:{spellId:53201}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:48518}}},rhs:{const:{val:"8s"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}}]}},castSpell:{spellId:{spellId:54758}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:48518}}},rhs:{const:{val:"8s"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}}]}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:48468}}}}},{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:48518}}},rhs:{const:{val:"11s"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}}]}},castSpell:{spellId:{spellId:48468}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:48468}}}}},{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:48517}}},rhs:{const:{val:"2s"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:48517}}}]}},castSpell:{spellId:{spellId:48468}}}},{action:{condition:{and:{vals:[{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}}]}},castSpell:{spellId:{spellId:48465}}}},{action:{condition:{and:{vals:[{auraIsActiveWithReactionTime:{auraId:{spellId:48517}}}]}},castSpell:{spellId:{spellId:48461}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:48468}}}}}]}},castSpell:{spellId:{spellId:48468}}}},{action:{condition:{not:{val:{auraIcdIsReadyWithReactionTime:{auraId:{spellId:48518}}}}},castSpell:{spellId:{spellId:48465}}}},{action:{castSpell:{spellId:{spellId:48461}}}}]},_={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:48470}}},doAtValue:{const:{val:"-2.3s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}},{action:{castSpell:{spellId:{spellId:48461}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"5s"}}}},castSpell:{spellId:{spellId:2825,tag:-1}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"1s"}}}},castSpell:{spellId:{spellId:48463}}}},{action:{castSpell:{spellId:{itemId:41119}}}},{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"20s"}}}},castSpell:{spellId:{spellId:65861}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"0s"}}}},castSpell:{spellId:{spellId:53201}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:48518}}},rhs:{const:{val:"8s"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}}]}},castSpell:{spellId:{spellId:54758}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:48518}}},rhs:{const:{val:"8s"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}}]}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:48468}}}}},{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:48518}}},rhs:{const:{val:"11s"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}}]}},castSpell:{spellId:{spellId:48468}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:48468}}}}},{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:48517}}},rhs:{const:{val:"2s"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:48517}}}]}},castSpell:{spellId:{spellId:48468}}}},{action:{condition:{and:{vals:[{auraIcdIsReadyWithReactionTime:{auraId:{spellId:48518}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:48517}}},rhs:{const:{val:"0s"}}}},{not:{val:{dotIsActive:{spellId:{spellId:48463}}}}},{auraIsActive:{auraId:{spellId:16886}}}]}},castSpell:{spellId:{spellId:48463}}}},{action:{condition:{and:{vals:[{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}}]}},castSpell:{spellId:{spellId:48465}}}},{action:{condition:{and:{vals:[{auraIsActiveWithReactionTime:{auraId:{spellId:48517}}}]}},castSpell:{spellId:{spellId:48461}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:48468}}}}}]}},castSpell:{spellId:{spellId:48468}}}},{action:{condition:{not:{val:{auraIcdIsReadyWithReactionTime:{auraId:{spellId:48518}}}}},castSpell:{spellId:{spellId:48465}}}},{action:{castSpell:{spellId:{spellId:48461}}}}]},J=a("Pre-raid Preset",{items:[{id:42554,enchant:3820,gems:[41285,40049]},{id:40680},{id:37673,enchant:3810,gems:[42144]},{id:41610,enchant:3859},{id:39547,enchant:3832,gems:[42144,40026]},{id:37884,enchant:2332,gems:[0]},{id:39544,enchant:3604,gems:[42144,0]},{id:40696,enchant:3601,gems:[40014,39998]},{id:37854,enchant:3719},{id:44202,enchant:3606,gems:[39998]},{id:40585},{id:43253,gems:[40026]},{id:37873},{id:40682},{id:45085,enchant:3834},{id:40698},{id:40712}]}),K=a("P1 Preset",V),Q=a("P2 Preset",U),q=a("P3 Preset [A]",x,{faction:u.Alliance}),X=a("P3 Preset [H]",D,{faction:u.Horde}),Y=a("P4 Preset [A]",M,{faction:u.Alliance}),Z=a("P4 Preset [H]",j,{faction:u.Horde}),$=t("P3",z),ee=t("P4 Focus Glyph",N),ae=t("P4 Starfire Glyph",_),te={name:"Phase 1",data:g.create({})},se={name:"Phase 2",data:g.create({})},le={name:"Phase 3",data:g.create({})},ie={name:"Phase 4",data:g.create({})},ne=v.create({classOptions:{innervateTarget:S.create()}}),de=f.create({defaultPotion:T.PotionOfSpeed,flask:A.FlaskOfTheFrostWyrm,food:O.FoodFishFeast,prepopPotion:T.VolcanicPotion,fillerExplosive:P.ExplosiveSaroniteBomb}),ce=R.create({arcaneBrilliance:!0,bloodlust:!0,divineSpirit:!0,giftOfTheWild:W.TristateEffectImproved,icyTalons:!0,moonkinAura:W.TristateEffectImproved,leaderOfThePack:W.TristateEffectImproved,powerWordFortitude:W.TristateEffectImproved,sanctifiedRetribution:!0,strengthOfEarthTotem:W.TristateEffectImproved,trueshotAura:!0,wrathOfAirTotem:!0,demonicPactSp:500}),oe=y.create({blessingOfKings:!0,blessingOfMight:W.TristateEffectImproved,blessingOfWisdom:W.TristateEffectImproved,vampiricTouch:!0}),pe=G.create({heroicPresence:!1}),re=b.create({bloodFrenzy:!0,ebonPlaguebringer:!0,faerieFire:W.TristateEffectImproved,heartOfTheCrusader:!0,judgementOfWisdom:!0,shadowMastery:!0,sunderArmor:!0,totemOfWrath:!0}),Ie={distanceFromTarget:18,profession1:w.Engineering,profession2:w.Tailoring},me=s(H.SpecBalanceDruid,{cssClass:"balance-druid-sim-ui",cssScheme:k.getCssClass(k.Druid),knownIssues:[],epStats:[E.StatIntellect,E.StatSpirit,E.StatSpellPower,E.StatSpellHit,E.StatSpellCrit,E.StatSpellHaste,E.StatMP5],epReferenceStat:E.StatSpellPower,displayStats:[E.StatHealth,E.StatStamina,E.StatIntellect,E.StatSpirit,E.StatSpellPower,E.StatSpellHit,E.StatSpellCrit,E.StatSpellHaste,E.StatMP5],defaults:{gear:X.gear,epWeights:F.fromMap({[E.StatIntellect]:.43,[E.StatSpirit]:.34,[E.StatSpellPower]:1,[E.StatSpellCrit]:.82,[E.StatSpellHaste]:.8,[E.StatMP5]:0}),consumes:de,talents:le.data,specOptions:ne,raidBuffs:ce,partyBuffs:pe,individualBuffs:oe,debuffs:re,other:Ie},playerIconInputs:[C()],includeBuffDebuffInputs:[l,i,n,d,c,o,p],excludeBuffDebuffInputs:[],otherInputs:{inputs:[L,r,I,m]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[te,se,le,ie],rotations:[$,ee,ae],gear:[J,K,Q,X,q,Z,Y]},autoRotation:e=>$.rotation.rotation,raidSimPresets:[{spec:H.SpecBalanceDruid,talents:se.data,specOptions:ne,consumes:de,otherDefaults:Ie,defaultFactionRaces:{[u.Unknown]:B.RaceUnknown,[u.Alliance]:B.RaceNightElf,[u.Horde]:B.RaceTauren},defaultGear:{[u.Unknown]:{},[u.Alliance]:{1:K.gear,2:Q.gear,3:q.gear,4:Y.gear},[u.Horde]:{1:K.gear,2:Q.gear,3:X.gear,4:Z.gear}}}]});class he extends h{constructor(e,a){super(e,a,me)}}export{he as B};
//# sourceMappingURL=sim-BEzrBjPo.chunk.js.map
