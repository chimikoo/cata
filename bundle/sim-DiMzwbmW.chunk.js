import{l as e,n as t,X as l,o as s,Z as a,p as n,a3 as i,q as o,A as p,s as d,T as c,y as r,z as I}from"./preset_utils-D9cZGIsL.chunk.js";import{ao as m,ap as S,T as h,aw as u,S as g,Q as v,G as f,ax as T,ay as y,as as A,at as O,W as R,Z as w,X as E,Y as P,a6 as M,a as b,_ as k,$ as C,a0 as G,a8 as W,R as D,au as F,av as V,a1 as H,J as L,a2 as U,a3 as J,a4 as x,ak as B,al as N,am as j,F as _}from"./detailed_results-B8LXSl10.chunk.js";import{s as q}from"./apl_utils-Col7jRfc.chunk.js";import{P as z,a as K,T as X}from"./inputs-BtMWEilq.chunk.js";const Z=e({fieldName:"sniperTrainingUptime",label:"ST Uptime (%)",labelTooltip:"Uptime for the Sniper Training talent, as a percent of the fight duration.",percent:!0,showWhen:e=>e.getTalents().sniperTraining>0,changeEmitter:e=>h.onAny([e.specOptionsChangeEmitter,e.talentsChangeEmitter])}),$={inputs:[t({fieldName:"type",label:"Type",values:[{name:"Single Target",value:m.SingleTarget},{name:"AOE",value:m.Aoe}]}),t({fieldName:"sting",label:"Sting",labelTooltip:"Maintains the selected Sting on the primary target.",values:[{name:"None",value:S.NoSting},{name:"Serpent Sting",value:S.SerpentSting}],showWhen:e=>e.getSimpleRotation().type==m.SingleTarget}),l({fieldName:"trapWeave",label:"Trap Weave",labelTooltip:"Uses Explosive Trap at appropriate times. Note that selecting this will disable Black Arrow because they share a CD."}),l({fieldName:"multiDotSerpentSting",label:"Multi-Dot Serpent Sting",labelTooltip:"Casts Serpent Sting on multiple targets",changeEmitter:e=>h.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])})]},Q={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"1s"}}}},autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:1978}}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}}]}},castSpell:{spellId:{spellId:1978}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"4"}}}},castSpell:{spellId:{spellId:2643}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:53351}}},rhs:{const:{val:"250ms"}}}}]}},waitUntil:{condition:{spellIsReady:{spellId:{spellId:53351}}}}}},{action:{castSpell:{spellId:{spellId:53351}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"8s"}}}},{spellIsReady:{spellId:{spellId:13812}}}]}},castSpell:{spellId:{spellId:13812}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:53301}}}}},castSpell:{spellId:{spellId:53301}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentFocus:{}},rhs:{const:{val:"65"}}}},castSpell:{spellId:{spellId:2643}}}},{action:{castSpell:{spellId:{spellId:77767}}}}]},Y={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:13812}}},doAtValue:{const:{val:"-25s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1.4s"}}},{action:{castSpell:{spellId:{spellId:77767}}},doAtValue:{const:{val:"-1.4s"}}},{action:{castSpell:{spellId:{spellId:13165}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{spellId:1130}}},doAtValue:{const:{val:"-3s"}}}],priorityList:[{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"1s"}}}},autocastOtherCooldowns:{}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:53351}}},rhs:{const:{val:"250ms"}}}}]}},waitUntil:{condition:{spellIsReady:{spellId:{spellId:53351}}}}}},{action:{castSpell:{spellId:{spellId:53351}}}},{action:{condition:{and:{vals:[{dotIsActive:{spellId:{spellId:53301}}},{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:53301}}},rhs:{const:{val:"1000ms"}}}}]}},castSpell:{spellId:{spellId:53301}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:53301}}},rhs:{const:{val:"250ms"}}}},{cmp:{op:"OpGt",lhs:{currentFocus:{}},rhs:{const:{val:"50"}}}}]}},waitUntil:{condition:{spellIsReady:{spellId:{spellId:53301}}}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:53301}}}}},castSpell:{spellId:{spellId:53301}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:1978}}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}}]}},castSpell:{spellId:{spellId:1978}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"8s"}}}},{spellIsReady:{spellId:{spellId:3674}}}]}},castSpell:{spellId:{spellId:3674}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentFocus:{}},rhs:{const:{val:"65"}}}},castSpell:{spellId:{spellId:3044}}}},{action:{castSpell:{spellId:{spellId:77767}}}}]},ee={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:13812}}},doAtValue:{const:{val:"-25s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1.4s"}}},{action:{castSpell:{spellId:{spellId:77767}}},doAtValue:{const:{val:"-1.4s"}}},{action:{castSpell:{spellId:{spellId:13165}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{spellId:1130}}},doAtValue:{const:{val:"-3s"}}}],priorityList:[{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"1s"}}}},autocastOtherCooldowns:{}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:53351}}},rhs:{const:{val:"250ms"}}}}]}},waitUntil:{condition:{spellIsReady:{spellId:{spellId:53351}}}}}},{action:{castSpell:{spellId:{spellId:53351}}}},{action:{condition:{and:{vals:[{dotIsActive:{spellId:{spellId:53301}}},{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:53301}}},rhs:{const:{val:"1000ms"}}}}]}},castSpell:{spellId:{spellId:53301}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:53301}}},rhs:{const:{val:"250ms"}}}},{cmp:{op:"OpGt",lhs:{currentFocus:{}},rhs:{const:{val:"50"}}}}]}},waitUntil:{condition:{spellIsReady:{spellId:{spellId:53301}}}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:53301}}}}},castSpell:{spellId:{spellId:53301}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:1978}}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}}]}},castSpell:{spellId:{spellId:1978}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"8s"}}}},{spellIsReady:{spellId:{spellId:3674}}}]}},castSpell:{spellId:{spellId:3674}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentFocus:{}},rhs:{const:{val:"65"}}}},castSpell:{spellId:{spellId:3044}}}},{action:{castSpell:{spellId:{spellId:77767}}}}]},te={items:[{id:40505,enchant:3817,gems:[41398,42143]},{id:44664,gems:[42143]},{id:40507,enchant:3808,gems:[39997]},{id:40403,enchant:3605},{id:43998,enchant:3832,gems:[42143,39997]},{id:40282,enchant:3845,gems:[39997,0]},{id:40541,enchant:3604,gems:[0]},{id:39762,enchant:3601,gems:[39997]},{id:40331,enchant:3823,gems:[39997,49110]},{id:40549,enchant:3606},{id:40074},{id:40474},{id:40684},{id:44253},{id:40388,enchant:3827},{},{id:40385,enchant:3608}]},le=s("SV PreRaid Preset",{items:[{id:62409,enchant:3817,gems:[41398,52258]},{id:52350,gems:[52212]},{id:56419,enchant:3808,gems:[52212]},{id:63473,enchant:3605},{id:56281,enchant:3832,gems:[52258,52212]},{id:56340,enchant:3845,gems:[0]},{id:58125,enchant:3604,gems:[52212,0]},{id:56539,enchant:3601,gems:[52212,52212]},{id:56386,enchant:3823,gems:[52212,49110]},{id:62385,enchant:3606,gems:[52212]},{id:62362},{id:56445},{id:56394},{id:56328},{id:65139,enchant:3827},{},{id:65058,enchant:3608}]}),se=s("SV P1 Preset",te),ae=u.create({type:m.SingleTarget,sting:S.SerpentSting,trapWeave:!0,multiDotSerpentSting:!0,allowExplosiveShotDownrank:!0}),ne=a("Simple Default",g.SpecSurvivalHunter,ae),ie=n("SV",Y),oe=n("SV (Advanced)",ee),pe=n("AOE",Q),de={name:"Survival",data:v.create({talentsString:"03-2302-23203003023022121311",glyphs:f.create({prime1:T.GlyphOfExplosiveShot,prime2:T.GlyphOfKillShot,prime3:T.GlyphOfSerpentSting})})},ce=y.create({classOptions:{ammo:A.SaroniteRazorheads,useHuntersMark:!0,petType:O.Wolf,petTalents:i,petUptime:1,timeToTrapWeaveMs:2e3},sniperTrainingUptime:.9}),re=R.create({defaultPotion:w.PotionOfSpeed,flask:E.FlaskOfEndlessRage,food:P.FoodFishFeast,petFood:M.PetFoodSpicedMammothTreats}),Ie=o(g.SpecSurvivalHunter,{cssClass:"survival-hunter-sim-ui",cssScheme:b.getCssClass(b.Hunter),knownIssues:[],warnings:[],epStats:[k.StatStamina,k.StatAgility,k.StatRangedAttackPower,k.StatMeleeHit,k.StatMeleeCrit,k.StatMeleeHaste,k.StatMastery],epPseudoStats:[C.PseudoStatRangedDps],epReferenceStat:k.StatRangedAttackPower,displayStats:[k.StatHealth,k.StatStamina,k.StatAgility,k.StatRangedAttackPower,k.StatMeleeHit,k.StatMeleeCrit,k.StatMeleeHaste,k.StatMastery],modifyDisplayStats:e=>{let t=new G;const l=e.getEquippedItem(W.ItemSlotRanged);return 3608==l?.enchant?.effectId&&(t=t.addStat(k.StatMeleeCrit,40)),e.getRace()==D.RaceDwarf&&l?.item.rangedWeaponType==F.RangedWeaponTypeGun&&(t=t.addStat(k.StatMeleeCrit,1*V)),e.getRace()==D.RaceTroll&&l?.item.rangedWeaponType==F.RangedWeaponTypeBow&&(t=t.addStat(k.StatMeleeCrit,1*V)),{talents:t}},defaults:{gear:se.gear,epWeights:G.fromMap({[k.StatStamina]:.5,[k.StatAgility]:2.65,[k.StatIntellect]:1.1,[k.StatRangedAttackPower]:1,[k.StatMeleeHit]:2,[k.StatMeleeCrit]:1.5,[k.StatMeleeHaste]:1.39,[k.StatMastery]:1.32},{[C.PseudoStatRangedDps]:6.32}),consumes:re,talents:de.data,specOptions:ce,raidBuffs:H.create({arcaneBrilliance:!0,powerWordFortitude:L.TristateEffectImproved,giftOfTheWild:L.TristateEffectImproved,bloodlust:!0,strengthOfEarthTotem:L.TristateEffectImproved,windfuryTotem:L.TristateEffectImproved,battleShout:L.TristateEffectImproved,leaderOfThePack:L.TristateEffectImproved,sanctifiedRetribution:!0,unleashedRage:!0,moonkinAura:L.TristateEffectImproved}),partyBuffs:U.create({}),individualBuffs:J.create({blessingOfKings:!0,blessingOfWisdom:2,blessingOfMight:2,vampiricTouch:!0}),debuffs:x.create({sunderArmor:!0,faerieFire:L.TristateEffectImproved,judgementOfWisdom:!0,curseOfElements:!0,heartOfTheCrusader:!0,savageCombat:!0})},playerIconInputs:[z()],rotationInputs:$,petConsumeInputs:[],includeBuffDebuffInputs:[p,d],excludeBuffDebuffInputs:[],otherInputs:{inputs:[K(),X(),Z,c,r]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[de],rotations:[ne,ie,oe,pe],gear:[le,se]},autoRotation:e=>e.sim.encounter.targets.length>=4?pe.rotation.rotation:ie.rotation.rotation,simpleRotation:(e,t,l)=>{const[s,a]=q(l),n=B.fromJsonString(`{"condition":{"cmp":{"op":"OpGt","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"6s"}}}},"multidot":{"spellId":{"spellId":49001},"maxDots":${t.multiDotSerpentSting?3:1},"maxOverlap":{"const":{"val":"0ms"}}}}`),i=B.fromJsonString('{"condition":{"auraShouldRefresh":{"auraId":{"spellId":3043},"maxOverlap":{"const":{"val":"0ms"}}}},"castSpell":{"spellId":{"spellId":3043}}}'),o=B.fromJsonString('{"condition":{"not":{"val":{"dotIsActive":{"spellId":{"spellId":49067}}}}},"castSpell":{"spellId":{"tag":1,"spellId":49067}}}'),p=B.fromJsonString('{"castSpell":{"spellId":{"spellId":58434}}}'),d=B.fromJsonString('{"castSpell":{"spellId":{"spellId":61006}}}'),c=B.fromJsonString('{"castSpell":{"spellId":{"spellId":49050}}}'),r=B.fromJsonString('{"castSpell":{"spellId":{"spellId":49048}}}'),I=B.fromJsonString('{"castSpell":{"spellId":{"spellId":49052}}}'),h=B.fromJsonString('{"castSpell":{"spellId":{"spellId":63672}}}'),u=B.fromJsonString('{"condition":{"not":{"val":{"dotIsActive":{"spellId":{"spellId":60053}}}}},"castSpell":{"spellId":{"spellId":60053}}}'),g=B.fromJsonString('{"condition":{"dotIsActive":{"spellId":{"spellId":60053}}},"castSpell":{"spellId":{"spellId":60052}}}');return t.type==m.Aoe?a.push(...[t.sting==S.ScorpidSting?i:null,t.sting==S.SerpentSting?n:null,t.trapWeave?o:null,p].filter((e=>e))):a.push(...[d,u,t.allowExplosiveShotDownrank?g:null,t.trapWeave?o:null,t.sting==S.ScorpidSting?i:null,t.sting==S.SerpentSting?n:null,h,c,r,I].filter((e=>e))),N.create({prepullActions:s,priorityList:a.map((e=>j.create({action:e})))})},raidSimPresets:[{spec:g.SpecSurvivalHunter,talents:de.data,specOptions:ce,consumes:re,defaultFactionRaces:{[_.Unknown]:D.RaceUnknown,[_.Alliance]:D.RaceNightElf,[_.Horde]:D.RaceOrc},defaultGear:{[_.Unknown]:{},[_.Alliance]:{1:se.gear},[_.Horde]:{1:se.gear}}}]});class me extends I{constructor(e,t){super(e,t,Ie)}}export{me as S};
//# sourceMappingURL=sim-DiMzwbmW.chunk.js.map
