import{o as e,p as s,q as t,aa as a,ab as l,ac as n,s as i,z as o}from"./preset_utils-D9cZGIsL.chunk.js";import{Q as c,aU as p,aV as d,W as r,Z as I,aC as m,X as u,Y as h,a as g,_ as S,$ as v,a0 as O,a1 as A,J as y,a2 as f,a3 as P,a4 as L,S as T,F as b,R as E,a8 as C}from"./detailed_results-B8LXSl10.chunk.js";import{A as R,M,O as w,T as H}from"./inputs-BLOaVAWj.chunk.js";const k={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}},{action:{activateAura:{auraId:{spellId:58426}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{not:{val:{spellIsReady:{spellId:{spellId:57934}}}}},castSpell:{spellId:{spellId:57934}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"80"}}}},castSpell:{spellId:{spellId:13750}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"65"}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:58426}}},rhs:{const:{val:"1s"}}}}]}},castSpell:{spellId:{spellId:26889}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}},castSpell:{spellId:{itemId:7676}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}},castSpell:{spellId:{spellId:51690}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:16551}}}}},castSpell:{spellId:{spellId:14177}}}},{action:{castSpell:{spellId:{spellId:51723}}}}]},q={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}},{action:{activateAura:{auraId:{spellId:58426}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:6774}}},rhs:{const:{val:"1s"}}}},castSpell:{spellId:{spellId:6774}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:6774}}},rhs:{const:{val:"1s"}}}},sequence:{actions:[{castSpell:{spellId:{spellId:48666}}},{castSpell:{spellId:{spellId:6774}}}]}}},{action:{condition:{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:51662}}},rhs:{const:{val:"1s"}}}},castSpell:{spellId:{spellId:51662}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:58426}}}}},castSpell:{spellId:{spellId:26889}}}},{action:{condition:{auraIsActive:{auraId:{spellId:6774}}},castSpell:{spellId:{itemId:40211}}}},{action:{condition:{auraIsActive:{auraId:{spellId:6774}}},castSpell:{spellId:{spellId:54758}}}},{action:{condition:{auraIsActive:{auraId:{spellId:6774}}},castSpell:{spellId:{spellId:13877}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}},castSpell:{spellId:{spellId:57934}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}},castSpell:{spellId:{itemId:7676}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"5s"}}}}]}},castSpell:{spellId:{spellId:14177}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:57993}}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"85"}}}}]}}]}},castSpell:{spellId:{spellId:57993}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}},castSpell:{spellId:{spellId:48666}}}}]},G={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}},{action:{activateAura:{auraId:{spellId:58426}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8647}}},rhs:{const:{val:"1s"}}}},castSpell:{spellId:{spellId:8647}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:6774}}},rhs:{const:{val:"1s"}}}},castSpell:{spellId:{spellId:6774}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8647}}},rhs:{const:{val:"1s"}}}},sequence:{actions:[{castSpell:{spellId:{spellId:48666}}},{castSpell:{spellId:{spellId:8647}}}]}}},{action:{condition:{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:6774}}},rhs:{const:{val:"1s"}}}},sequence:{actions:[{castSpell:{spellId:{spellId:48666}}},{castSpell:{spellId:{spellId:6774}}}]}}},{action:{condition:{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:51662}}},rhs:{const:{val:"1s"}}}},castSpell:{spellId:{spellId:51662}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:58426}}}}},castSpell:{spellId:{spellId:26889}}}},{action:{condition:{auraIsActive:{auraId:{spellId:6774}}},castSpell:{spellId:{itemId:40211}}}},{action:{condition:{auraIsActive:{auraId:{spellId:6774}}},castSpell:{spellId:{spellId:54758}}}},{action:{condition:{auraIsActive:{auraId:{spellId:6774}}},castSpell:{spellId:{spellId:13877}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}},castSpell:{spellId:{spellId:57934}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}},castSpell:{spellId:{itemId:7676}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"5s"}}}}]}},castSpell:{spellId:{spellId:14177}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:57993}}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"85"}}}}]}}]}},castSpell:{spellId:{spellId:57993}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}},castSpell:{spellId:{spellId:48666}}}}]},D={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}},{action:{activateAura:{auraId:{spellId:58426}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:6774}}},rhs:{const:{val:"1s"}}}},castSpell:{spellId:{spellId:6774}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:6774}}},rhs:{const:{val:"1s"}}}},sequence:{actions:[{castSpell:{spellId:{spellId:48666}}},{castSpell:{spellId:{spellId:6774}}}]}}},{action:{condition:{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:51662}}},rhs:{const:{val:"1s"}}}},castSpell:{spellId:{spellId:51662}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:58426}}}}},castSpell:{spellId:{spellId:26889}}}},{action:{condition:{auraIsActive:{auraId:{spellId:6774}}},castSpell:{spellId:{itemId:40211}}}},{action:{condition:{auraIsActive:{auraId:{spellId:6774}}},castSpell:{spellId:{spellId:54758}}}},{action:{condition:{auraIsActive:{auraId:{spellId:6774}}},castSpell:{spellId:{spellId:13877}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}},castSpell:{spellId:{spellId:57934}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}},castSpell:{spellId:{itemId:7676}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:48672}}}}}]}},castSpell:{spellId:{spellId:48672}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"5s"}}}}]}},castSpell:{spellId:{spellId:14177}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:57993}}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"85"}}}}]}}]}},castSpell:{spellId:{spellId:57993}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}},castSpell:{spellId:{spellId:48666}}}}]},V={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}},{action:{activateAura:{auraId:{spellId:58426}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8647}}},rhs:{const:{val:"1s"}}}},castSpell:{spellId:{spellId:8647}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:6774}}},rhs:{const:{val:"1s"}}}},castSpell:{spellId:{spellId:6774}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8647}}},rhs:{const:{val:"1s"}}}},sequence:{actions:[{castSpell:{spellId:{spellId:48666}}},{castSpell:{spellId:{spellId:8647}}}]}}},{action:{condition:{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:6774}}},rhs:{const:{val:"1s"}}}},sequence:{actions:[{castSpell:{spellId:{spellId:48666}}},{castSpell:{spellId:{spellId:6774}}}]}}},{action:{condition:{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:51662}}},rhs:{const:{val:"1s"}}}},castSpell:{spellId:{spellId:51662}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:58426}}}}},castSpell:{spellId:{spellId:26889}}}},{action:{condition:{auraIsActive:{auraId:{spellId:6774}}},castSpell:{spellId:{itemId:40211}}}},{action:{condition:{auraIsActive:{auraId:{spellId:6774}}},castSpell:{spellId:{spellId:54758}}}},{action:{condition:{auraIsActive:{auraId:{spellId:6774}}},castSpell:{spellId:{spellId:13877}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}},castSpell:{spellId:{spellId:57934}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}},castSpell:{spellId:{itemId:7676}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:48672}}}}}]}},castSpell:{spellId:{spellId:48672}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"5s"}}}}]}},castSpell:{spellId:{spellId:14177}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:57993}}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"85"}}}}]}}]}},castSpell:{spellId:{spellId:57993}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}},castSpell:{spellId:{spellId:48666}}}}]},U={items:[{id:40499,enchant:3817,gems:[41398,42702]},{id:44664,gems:[40003]},{id:40502,enchant:3808,gems:[40003]},{id:40403,enchant:3605},{id:40539,enchant:3832,gems:[40003]},{id:39765,enchant:3845,gems:[40003,0]},{id:40496,enchant:3604,gems:[40053,0]},{id:40260,gems:[39999]},{id:40500,enchant:3823,gems:[40003,40003]},{id:39701,enchant:3606},{id:40074},{id:40474},{id:40684},{id:44253},{id:39714,enchant:3789},{id:40386,enchant:3789},{id:40385}]},x={items:[{id:46125,enchant:3817,gems:[41398,39999]},{id:45517,gems:[39999]},{id:45245,enchant:3808,gems:[39999,39999]},{id:45461,enchant:3605,gems:[40053]},{id:45473,enchant:3832,gems:[40053,42702,39999]},{id:45611,enchant:3845,gems:[40053,0]},{id:46124,enchant:3604,gems:[40003,0]},{id:46095,enchant:3599,gems:[39999,39999,39999]},{id:45536,enchant:3823,gems:[39999,39999,39999]},{id:45564,enchant:3606,gems:[39999,39999]},{id:45608,gems:[39999]},{id:45456,gems:[39999]},{id:45609},{id:46038},{id:45484,enchant:3789,gems:[40003]},{id:45484,enchant:3789,gems:[40003]},{id:45570,enchant:3608}]},B={items:[{id:48230,enchant:3817,gems:[41398,49110]},{id:47060,gems:[40114]},{id:48228,enchant:3808,gems:[40114]},{id:47545,enchant:3605,gems:[40114]},{id:48232,enchant:3832,gems:[40114,40114]},{id:47155,enchant:3845,gems:[40114,40114,0]},{id:48231,enchant:3604,gems:[40114,0]},{id:47112,enchant:3599,gems:[40156,40114,40114]},{id:46975,enchant:3823,gems:[40118,40118,40118]},{id:47077,enchant:3606,gems:[40156,40114]},{id:47075,gems:[40114]},{id:45608,gems:[40114]},{id:47131},{id:45609},{id:46969,enchant:3789,gems:[40156]},{id:46969,enchant:3789,gems:[40156]},{id:47521,gems:[40156]}]},F={items:[{id:51252,enchant:3817,gems:[41398,40114]},{id:50633,gems:[40114]},{id:51254,enchant:3808,gems:[40114]},{id:50653,enchant:3605,gems:[40159]},{id:50656,enchant:3832,gems:[40114,49110,40157]},{id:50670,enchant:3845,gems:[40159,0]},{id:51251,enchant:3604,gems:[40114,0]},{id:50707,gems:[40114,40114,40114]},{id:51253,enchant:3823,gems:[40114,40159]},{id:50607,enchant:3606,gems:[40159,40159]},{id:50402,gems:[40159]},{id:50604,gems:[40159]},{id:50343},{id:50706},{id:50621,enchant:3789,gems:[40159]},{id:50736,enchant:3789,gems:[40114]},{id:50733,gems:[40114]}]},j={items:[{id:51252,enchant:3817,gems:[41398,40114]},{id:50633,gems:[40114]},{id:51254,enchant:3808,gems:[40114]},{id:50653,enchant:3605,gems:[40159]},{id:50656,enchant:3832,gems:[40114,49110,40159]},{id:54580,enchant:3845,gems:[40114,0]},{id:51251,enchant:3604,gems:[40114,0]},{id:50707,gems:[40114,40114,40114]},{id:51253,enchant:3823,gems:[40114,40157]},{id:50607,enchant:3606,gems:[40157,40157]},{id:50402,gems:[40157]},{id:54576,gems:[40157]},{id:50363},{id:54590},{id:50621,enchant:3789,gems:[40157]},{id:50736,enchant:3789,gems:[40114]},{id:50733,gems:[40114]}]},z=e("PreRaid Assassination",{items:[{id:42550,enchant:3817,gems:[41398,40058]},{id:40678},{id:43481,enchant:3808},{id:38614,enchant:3605},{id:39558,enchant:3832,gems:[40003,42702]},{id:34448,enchant:3845,gems:[40003,0]},{id:39560,enchant:3604,gems:[40058,0]},{id:40694,gems:[40003,40003]},{id:37644,enchant:3823},{id:34575,enchant:3606,gems:[40003]},{id:40586},{id:37642},{id:40684},{id:44253},{id:37856,enchant:3789},{id:37667,enchant:3789},{id:43612}]}),W=e("P1 Assassination",U),_=e("P2 Assassination",x),J=e("P3 Assassination",B),K=e("P4 Assassination",F),Q=e("P5 Assassination",j),X=s("Mutilate",q),Y=s("Rupture Mutilate",D),Z=s("Mutilate w/ Expose",G),$=s("Rupture Mutilate w/ Expose",V),N=s("Fan AOE",k),ee={name:"Assassination 13/7",data:c.create({})},se={name:"Assassination 18/2",data:c.create({})},te={name:"Assassination Blade Flurry",data:c.create({})},ae=p.create({classOptions:{mhImbue:d.DeadlyPoison,ohImbue:d.InstantPoison,thImbue:d.DeadlyPoison,applyPoisonsManually:!1,startingOverkillDuration:20,vanishBreakTime:.1}}),le=r.create({defaultPotion:I.PotionOfSpeed,prepopPotion:I.PotionOfSpeed,defaultConjured:m.ConjuredRogueThistleTea,flask:u.FlaskOfEndlessRage,food:h.FoodMegaMammothMeal}),ne=t(T.SpecAssassinationRogue,{cssClass:"assassination-rogue-sim-ui",cssScheme:g.getCssClass(g.Rogue),knownIssues:["Rotations are not fully optimized, especially for non-standard setups."],epStats:[S.StatAgility,S.StatStrength,S.StatAttackPower,S.StatMeleeHit,S.StatMeleeCrit,S.StatSpellHit,S.StatSpellCrit,S.StatMeleeHaste,S.StatMastery,S.StatExpertise],epPseudoStats:[v.PseudoStatMainHandDps,v.PseudoStatOffHandDps],epReferenceStat:S.StatAttackPower,displayStats:[S.StatHealth,S.StatStamina,S.StatAgility,S.StatStrength,S.StatAttackPower,S.StatMeleeHit,S.StatSpellHit,S.StatMeleeCrit,S.StatSpellCrit,S.StatMeleeHaste,S.StatMastery,S.StatExpertise],defaults:{gear:z.gear,epWeights:O.fromMap({[S.StatAgility]:1.86,[S.StatStrength]:1.14,[S.StatAttackPower]:1,[S.StatSpellCrit]:.28,[S.StatSpellHit]:.08,[S.StatMeleeHit]:1.39,[S.StatMeleeCrit]:1.32,[S.StatMeleeHaste]:1.48,[S.StatMastery]:.84,[S.StatExpertise]:.98},{[v.PseudoStatMainHandDps]:2.94,[v.PseudoStatOffHandDps]:2.45}),consumes:le,talents:ee.data,specOptions:ae,raidBuffs:A.create({giftOfTheWild:y.TristateEffectImproved,bloodlust:!0,strengthOfEarthTotem:y.TristateEffectImproved,icyTalons:!0,leaderOfThePack:y.TristateEffectImproved,abominationsMight:!0,swiftRetribution:!0,elementalOath:!0,sanctifiedRetribution:!0}),partyBuffs:f.create({}),individualBuffs:P.create({blessingOfKings:!0,blessingOfMight:y.TristateEffectImproved}),debuffs:L.create({heartOfTheCrusader:!0,mangle:!0,sunderArmor:!0,faerieFire:y.TristateEffectImproved,shadowMastery:!0,earthAndMoon:!0,bloodFrenzy:!0})},playerInputs:{inputs:[R()]},playerIconInputs:[M(),w(),H()],includeBuffDebuffInputs:[a,l,n,i],excludeBuffDebuffInputs:[],otherInputs:{inputs:[]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[ee,se,te],rotations:[X,Z,Y,$,N],gear:[z,W,_,J,K,Q]},autoRotation:e=>e.sim.encounter.targets.length>=5?N.rotation.rotation:Z.rotation.rotation,raidSimPresets:[{spec:T.SpecAssassinationRogue,talents:ee.data,specOptions:ae,consumes:le,defaultFactionRaces:{[b.Unknown]:E.RaceUnknown,[b.Alliance]:E.RaceHuman,[b.Horde]:E.RaceOrc},defaultGear:{[b.Unknown]:{},[b.Alliance]:{1:W.gear,2:_.gear,3:J.gear,4:K.gear},[b.Horde]:{1:W.gear,2:_.gear,3:J.gear,4:K.gear}}}]});class ie extends o{constructor(e,s){super(e,s,ne),this.player.changeEmitter.on((e=>{const s=this.player.getSpecOptions(),t=this.sim.encounter;if(!s.classOptions.applyPoisonsManually){const e=this.player.getGear().getEquippedItem(C.ItemSlotMainHand)?.item.weaponSpeed,a=this.player.getGear().getEquippedItem(C.ItemSlotOffHand)?.item.weaponSpeed;if(void 0===e||void 0===a)return;t.targets.length>3?(s.classOptions.mhImbue=d.InstantPoison,s.classOptions.ohImbue=d.InstantPoison):e<=a?(s.classOptions.mhImbue=d.DeadlyPoison,s.classOptions.ohImbue=d.InstantPoison):(s.classOptions.mhImbue=d.InstantPoison,s.classOptions.ohImbue=d.DeadlyPoison)}this.player.setSpecOptions(e,s)})),this.sim.encounter.changeEmitter.on((e=>{const s=this.player.getSpecOptions(),t=this.sim.encounter;if(!s.classOptions.applyPoisonsManually){const e=this.player.getGear().getEquippedItem(C.ItemSlotMainHand)?.item.weaponSpeed,a=this.player.getGear().getEquippedItem(C.ItemSlotOffHand)?.item.weaponSpeed;if(void 0===e||void 0===a)return;t.targets.length>3?(s.classOptions.mhImbue=d.InstantPoison,s.classOptions.ohImbue=d.InstantPoison):e<=a?(s.classOptions.mhImbue=d.DeadlyPoison,s.classOptions.ohImbue=d.InstantPoison):(s.classOptions.mhImbue=d.InstantPoison,s.classOptions.ohImbue=d.DeadlyPoison)}this.player.setSpecOptions(e,s)}))}}export{ie as A};
//# sourceMappingURL=sim-Dw7bRfE2.chunk.js.map