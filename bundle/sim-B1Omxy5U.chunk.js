import{o as e,p as t,q as s,a6 as a,T as l,t as n,u as d,v as i,w as o,H as p,x as c,y as r,z as m}from"./preset_utils-D9cZGIsL.chunk.js";import{Q as I,aM as g,aK as S,aL as h,W as u,X as f,Y as R,Z as T,a as y,_ as P,$ as v,a0 as A,a1 as w,J as O,a2 as k,a3 as E,a4 as B,aj as b,ak as H,al as M,am as J,S as D,F as L,R as x}from"./detailed_results-B8LXSl10.chunk.js";import{s as F}from"./apl_utils-Col7jRfc.chunk.js";import{A as C,J as W,U as j}from"./inputs-Bj_UkuMn.chunk.js";const V={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:48952}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{spellId:54428}}},doAtValue:{const:{val:"-1500ms"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLe",lhs:{spellTimeToReady:{spellId:{spellId:53595}}},rhs:{const:{val:"3s"}}}},castSpell:{spellId:{spellId:61411}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{spellTimeToReady:{spellId:{spellId:61411}}},rhs:{const:{val:"3s"}}}},castSpell:{spellId:{spellId:53595}}}},{action:{castSpell:{spellId:{spellId:48806}}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{not:{val:{spellIsReady:{spellId:{spellId:61411}}}}},{not:{val:{spellIsReady:{spellId:{spellId:53595}}}}},{cmp:{op:"OpLe",lhs:{min:{vals:[{spellTimeToReady:{spellId:{spellId:61411}}},{spellTimeToReady:{spellId:{spellId:53595}}}]}},rhs:{const:{val:"350ms"}}}}]}},wait:{duration:{min:{vals:[{spellTimeToReady:{spellId:{spellId:61411}}},{spellTimeToReady:{spellId:{spellId:53595}}}]}}}}},{action:{castSpell:{spellId:{spellId:48819}}}},{action:{castSpell:{spellId:{spellId:48952}}}},{action:{castSpell:{spellId:{spellId:53408}}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{not:{val:{spellIsReady:{spellId:{spellId:61411}}}}},{not:{val:{spellIsReady:{spellId:{spellId:53595}}}}},{not:{val:{spellIsReady:{spellId:{spellId:48819}}}}},{not:{val:{spellIsReady:{spellId:{spellId:48952}}}}},{not:{val:{spellIsReady:{spellId:{spellId:53408}}}}}]}},wait:{duration:{min:{vals:[{spellTimeToReady:{spellId:{spellId:61411}}},{spellTimeToReady:{spellId:{spellId:53595}}},{spellTimeToReady:{spellId:{spellId:48819}}},{spellTimeToReady:{spellId:{spellId:48952}}},{spellTimeToReady:{spellId:{spellId:53408}}}]}}}}}]},U={items:[{id:40581,enchant:3818,gems:[41380,36767]},{id:40387},{id:40584,enchant:3852,gems:[40008]},{id:40410,enchant:3605},{id:40579,enchant:3832,gems:[36767,40022]},{id:39764,enchant:3850,gems:[0]},{id:40580,enchant:3860,gems:[40008,0]},{id:39759,enchant:3601,gems:[40008,40008]},{id:40589,enchant:3822},{id:39717,enchant:3606,gems:[40089]},{id:40718},{id:40107},{id:44063,gems:[36767,40089]},{id:37220},{id:40345,enchant:3788},{id:40400,enchant:3849},{id:40707}]},_={items:[{id:46175,enchant:3818,gems:[41380,40088]},{id:45485,gems:[40088]},{id:46177,enchant:3852,gems:[40034]},{id:45496,enchant:3605,gems:[40034]},{id:46039,enchant:3832,gems:[36767,36767]},{id:45111,enchant:3850,gems:[0]},{id:45487,enchant:3860,gems:[40008,40008,0]},{id:45825,enchant:3601,gems:[40008]},{id:45594,enchant:3822,gems:[40034,45880,40088]},{id:45988,enchant:3606,gems:[40008,40008]},{id:45471,gems:[40088]},{id:45326},{id:45158},{id:46021},{id:45947,enchant:3788,gems:[40088]},{id:45587,enchant:3849,gems:[36767]},{id:45145}]},z={items:[{id:49475,enchant:3878,gems:[41380,40129]},{id:47133,gems:[40119]},{id:48646,enchant:3852,gems:[40119]},{id:47549,enchant:3605,gems:[40119]},{id:46968,enchant:3832,gems:[40129,49110,40119]},{id:47111,enchant:3850,gems:[40119,0]},{id:45487,enchant:3860,gems:[40119,40119,0]},{id:47076,gems:[40129,40119,40119]},{id:48645,enchant:3822,gems:[40129,40119]},{id:47003,enchant:3606,gems:[40129,40119]},{id:47157,gems:[40119]},{id:45471,gems:[40166]},{id:45158},{id:47451},{id:46097,enchant:3788,gems:[40119]},{id:46964,enchant:3849,gems:[40119]},{id:47661}]},K={items:[{id:50640,enchant:3818,gems:[41380,40141]},{id:50682,gems:[40119]},{id:50660,enchant:3852,gems:[40167,40119]},{id:50718,enchant:3605,gems:[40119]},{id:51265,enchant:3297,gems:[40141,40119]},{id:51901,enchant:3850,gems:[40119,0]},{id:51267,enchant:3860,gems:[40119,0]},{id:50991,enchant:3601,gems:[40141,40119,40119]},{id:49904,enchant:3822,gems:[40119,40119,40119]},{id:50625,enchant:3606,gems:[40119,40119]},{id:50642,gems:[40119]},{id:50622,gems:[40119]},{id:50364},{id:50344},{id:51893,enchant:3788,gems:[40119]},{id:50729,enchant:1071,gems:[40119]},{id:47661}]},N={items:[{id:48639,enchant:3818,gems:[41380,40129]},{id:45485,gems:[40167]},{id:48637,enchant:3852,gems:[40119]},{id:45496,enchant:1951,gems:[40119]},{id:48641,enchant:1953,gems:[40166,40119]},{id:47570,enchant:3850,gems:[40166,0]},{id:48640,enchant:3860,gems:[40166,0]},{id:47072,gems:[40119,40119]},{id:49904,enchant:3822,gems:[40119,40119,40119]},{id:49907,enchant:3606,gems:[40166,40119]},{id:45471,gems:[40119]},{id:47149},{id:47080},{id:46021},{id:46097,enchant:3788,gems:[40119]},{id:46963,enchant:3849},{id:47661}]},q=e("P1 PreRaid Preset",{items:[{id:42549,enchant:3818,gems:[41396,49110]},{id:40679},{id:37635,enchant:3852,gems:[40015]},{id:44188,enchant:3605},{id:39638,enchant:1953,gems:[36767,40089]},{id:37682,enchant:3850,gems:[0]},{id:39639,enchant:3860,gems:[36767,0]},{id:37379,enchant:3601,gems:[40022,40008]},{id:37292,enchant:3822,gems:[40089]},{id:44243,enchant:3606},{id:37186},{id:37257},{id:44063,gems:[36767,40015]},{id:37220},{id:37179,enchant:2673},{id:43085,enchant:3849},{id:40707}]}),G=e("P4 PreRaid Preset",N),Q=e("P1 Preset",U),X=e("P2 Preset",_),Y=e("P3 Preset",z),Z=e("P4 Preset",K),$=t("Default (969)",V),ee={name:"Baseline Example",data:I.create({})},te=g.create({classOptions:{aura:S.RetributionAura,judgement:h.JudgementOfWisdom}}),se=u.create({flask:f.FlaskOfStoneblood,food:R.FoodDragonfinFilet,defaultPotion:T.EarthenPotion,prepopPotion:T.EarthenPotion}),ae=s(D.SpecProtectionPaladin,{cssClass:"protection-paladin-sim-ui",cssScheme:y.getCssClass(y.Paladin),knownIssues:[],epStats:[P.StatStamina,P.StatStrength,P.StatAgility,P.StatAttackPower,P.StatMeleeHit,P.StatSpellHit,P.StatMeleeCrit,P.StatExpertise,P.StatMeleeHaste,P.StatArmorPenetration,P.StatSpellPower,P.StatArmor,P.StatBonusArmor,P.StatDefense,P.StatBlock,P.StatBlockValue,P.StatDodge,P.StatParry,P.StatResilience,P.StatNatureResistance,P.StatShadowResistance,P.StatFrostResistance],epPseudoStats:[v.PseudoStatMainHandDps],epReferenceStat:P.StatSpellPower,displayStats:[P.StatHealth,P.StatArmor,P.StatBonusArmor,P.StatStamina,P.StatStrength,P.StatAgility,P.StatAttackPower,P.StatMeleeHit,P.StatMeleeCrit,P.StatMeleeHaste,P.StatExpertise,P.StatArmorPenetration,P.StatSpellPower,P.StatSpellHit,P.StatDefense,P.StatBlock,P.StatBlockValue,P.StatDodge,P.StatParry,P.StatResilience,P.StatNatureResistance,P.StatShadowResistance,P.StatFrostResistance],defaults:{gear:Y.gear,epWeights:A.fromMap({[P.StatArmor]:.07,[P.StatBonusArmor]:.06,[P.StatStamina]:1.14,[P.StatStrength]:1,[P.StatAgility]:.62,[P.StatAttackPower]:.26,[P.StatExpertise]:.69,[P.StatMeleeHit]:.79,[P.StatMeleeCrit]:.3,[P.StatMeleeHaste]:.17,[P.StatArmorPenetration]:.04,[P.StatSpellPower]:.13,[P.StatBlock]:.52,[P.StatBlockValue]:.28,[P.StatDodge]:.46,[P.StatParry]:.61,[P.StatDefense]:.54},{[v.PseudoStatMainHandDps]:3.33}),consumes:se,talents:ee.data,specOptions:te,raidBuffs:w.create({giftOfTheWild:O.TristateEffectImproved,powerWordFortitude:O.TristateEffectImproved,strengthOfEarthTotem:O.TristateEffectImproved,arcaneBrilliance:!0,unleashedRage:!0,leaderOfThePack:O.TristateEffectRegular,icyTalons:!0,totemOfWrath:!0,demonicPactSp:500,swiftRetribution:!0,moonkinAura:O.TristateEffectRegular,sanctifiedRetribution:!0,manaSpringTotem:O.TristateEffectRegular,bloodlust:!0,thorns:O.TristateEffectImproved,devotionAura:O.TristateEffectImproved,shadowProtection:!0}),partyBuffs:k.create({}),individualBuffs:E.create({blessingOfKings:!0,blessingOfSanctuary:!0,blessingOfWisdom:O.TristateEffectImproved,blessingOfMight:O.TristateEffectImproved}),debuffs:B.create({judgementOfWisdom:!0,judgementOfLight:!0,misery:!0,faerieFire:O.TristateEffectImproved,ebonPlaguebringer:!0,totemOfWrath:!0,shadowMastery:!0,bloodFrenzy:!0,mangle:!0,exposeArmor:!0,sunderArmor:!0,vindication:!0,thunderClap:O.TristateEffectImproved,insectSwarm:!0})},playerIconInputs:[C(),W()],includeBuffDebuffInputs:[a],excludeBuffDebuffInputs:[],otherInputs:{inputs:[l,n,d,i,o,p,c,j(),r]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[ee],rotations:[$],gear:[q,G,Q,X,Y,Z]},autoRotation:e=>$.rotation.rotation,simpleRotation:(e,t,s)=>{const[a,l]=F(s),n=b.fromJsonString('{"action":{"castSpell":{"spellId":{"spellId":48952}}},"doAtValue":{"const":{"val":"-3s"}}}'),d=b.fromJsonString('{"action":{"castSpell":{"spellId":{"spellId":54428}}},"doAtValue":{"const":{"val":"-1500ms"}}}');a.push(n,d);const i=H.fromJsonString('{"condition":{"cmp":{"op":"OpLe","lhs":{"spellTimeToReady":{"spellId":{"spellId":53595}}},"rhs":{"const":{"val":"3s"}}}},"castSpell":{"spellId":{"spellId":61411}}}'),o=H.fromJsonString('{"condition":{"cmp":{"op":"OpLe","lhs":{"spellTimeToReady":{"spellId":{"spellId":61411}}},"rhs":{"const":{"val":"3s"}}}},"castSpell":{"spellId":{"spellId":53595}}}'),p=H.fromJsonString('{"castSpell":{"spellId":{"spellId":48806}}}'),c=H.fromJsonString('{"condition":{"and":{"vals":[{"gcdIsReady":{}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":61411}}}}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":53595}}}}},{"cmp":{"op":"OpLe","lhs":{"min":{"vals":[{"spellTimeToReady":{"spellId":{"spellId":61411}}},{"spellTimeToReady":{"spellId":{"spellId":53595}}}]}},"rhs":{"const":{"val":"350ms"}}}}]}},"wait":{"duration":{"min":{"vals":[{"spellTimeToReady":{"spellId":{"spellId":61411}}},{"spellTimeToReady":{"spellId":{"spellId":53595}}}]}}}}'),r=H.fromJsonString('{"castSpell":{"spellId":{"spellId":48819}}}'),m=H.fromJsonString('{"castSpell":{"spellId":{"spellId":48952}}}'),I=H.fromJsonString('{"castSpell":{"spellId":{"spellId":53408}}}'),g=H.fromJsonString('{"condition":{"and":{"vals":[{"gcdIsReady":{}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":61411}}}}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":53595}}}}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":48819}}}}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":48952}}}}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":53408}}}}}]}},"wait":{"duration":{"min":{"vals":[{"spellTimeToReady":{"spellId":{"spellId":61411}}},{"spellTimeToReady":{"spellId":{"spellId":53595}}},{"spellTimeToReady":{"spellId":{"spellId":48819}}},{"spellTimeToReady":{"spellId":{"spellId":48952}}},{"spellTimeToReady":{"spellId":{"spellId":53408}}}]}}}}');return l.push(...[i,o,p,c,r,m,I,g].filter((e=>e))),M.create({prepullActions:a,priorityList:l.map((e=>J.create({action:e})))})},raidSimPresets:[{spec:D.SpecProtectionPaladin,talents:ee.data,specOptions:te,consumes:se,defaultFactionRaces:{[L.Unknown]:x.RaceUnknown,[L.Alliance]:x.RaceHuman,[L.Horde]:x.RaceBloodElf},defaultGear:{[L.Unknown]:{},[L.Alliance]:{1:Q.gear,2:X.gear,3:Y.gear,4:Z.gear},[L.Horde]:{1:Q.gear,2:X.gear,3:Y.gear,4:Z.gear}}}]});class le extends m{constructor(e,t){super(e,t,ae)}}export{le as P};
//# sourceMappingURL=sim-B1Omxy5U.chunk.js.map
