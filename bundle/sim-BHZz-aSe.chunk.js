import{l as e,W as t,n as s,X as a,Y as i,o,p as l,Z as r,q as n,_ as c,$ as p,a0 as d,T as m,y as h,z as u}from"./preset_utils-D9cZGIsL.chunk.js";import{ac as g,b as f,T as S,a0 as I,_ as G,a8 as v,ad as y,ae as w,af as T,ag as C,ah as k,S as A,Q as b,ai as P,W as R,X as B,Y as O,Z as E,a as x,$ as M,a1 as D,J as F,a2 as W,a3 as J,a4 as L,aj as H,ak as U,al as Y,am as N,F as j,R as q}from"./detailed_results-B8LXSl10.chunk.js";import{s as $}from"./apl_utils-Col7jRfc.chunk.js";const z=class e{constructor(t){this.player=t.player,this.sim=t.sim,this.gemPriorityByColor={};for(const s of e.allGemColors)this.gemPriorityByColor[s]=new Array;this.jcUpgradePriority=new Array,t.addAction("Suggest Gems","suggest-gems-action",(async()=>{this.optimizeGems()}))}async optimizeGems(){let t=this.player.getGear().withoutGems();this.numSocketedJcGems=0,this.epWeights=this.player.getEpWeights(),this.useJcGems=this.player.hasProfession(f.Jewelcrafting),this.isBlacksmithing=this.player.isBlacksmithing();const s=await this.updateGear(t);this.updateGemPriority(t,s),t=t.withMetaGem(this.sim.db.lookupGem(this.metaGemID)),t=this.activateMetaGem(t),await this.updateGear(t);for(const a of e.allGemColors)this.gemPriorityByColor[a].length>0&&(t=await this.fillGemsByColor(t,a),this.useJcGems&&(t=await this.substituteJcGems(t)))}async updateGear(e){return this.player.setGear(S.nextEventID(),e),await this.sim.updateCharacterStats(S.nextEventID()),I.fromProto(this.player.getCurrentStats().finalStats)}findStrongestSocketBonus(e,t,s,a){let i=null,o=1e-8;for(const l of e.getItemSlots()){const r=e.getEquippedItem(l);if(!r)continue;if(0!=r.numSocketsOfColor(a))continue;const n=r.numSocketsOfColor(t);if(0==n||s&&1!=n)continue;const c=new I(r.item.socketBonus).computeEP(this.epWeights)/n;c>o&&(i=l,o=c)}return{itemSlot:i,socketBonus:o}}socketGemInFirstMatchingSocket(e,t,s,a){if(null!=t){const i=e.getEquippedItem(t);if(!i)return e;for(const[o,l]of i.allSocketColors().entries())if(l==s)return e.withEquippedItem(t,i.withGem(this.sim.db.lookupGem(a),o),!0)}return e}async fillGemsByColor(e,t){const s=this.findSocketsByColor(e,t);return await this.fillGemsToCaps(e,s,this.gemPriorityByColor[t],0,0)}findSocketsByColor(e,t){const s=new Array;for(const a of e.getItemSlots()){const i=e.getEquippedItem(a);if(i)for(const[e,o]of i.curSocketColors(this.isBlacksmithing).entries())i.hasSocketedGem(e)||this.allowGemInSocket(t,o,a,i)&&s.push({itemSlot:a,socketIdx:e})}return s}async substituteJcGems(t){let s=t,a=0;for(;this.numSocketedJcGems<3&&a<this.jcUpgradePriority.length;){const t=this.jcUpgradePriority[a],i=this.sim.db.lookupGem(t.gemId);if(!s.getAllGems(this.isBlacksmithing).includes(i)){a+=1;continue}const o=this.sim.db.lookupGem(e.jcUpgradesById[t.gemId]),l=s.withSingleGemSubstitution(i,o,this.isBlacksmithing);(await this.updateGear(l)).belowCaps(t.statCaps)?(s=l,this.numSocketedJcGems+=1):(await this.updateGear(s),a+=1)}return s}async fillGemsToCaps(e,t,s,a,i){let o=e;const l=this.sim.db.lookupGem(s[a].gemId);if(0==a)for(const u of t.slice(i))o=o.withGem(u.itemSlot,u.socketIdx,l);let r=await this.updateGear(o);const n=s[a].statCaps;if(r.belowCaps(n)||a==s.length-1)return o;const c=this.sim.db.lookupGem(s[a+1].gemId),p=s[a+1].statCaps;let d=n.subtract(p);n.computeEP(d)<=0&&(d=n);let m=t.length-1;for(;m>=i&&!r.belowCaps(d);m--)o=o.withGem(t[m].itemSlot,t[m].socketIdx,c),r=await this.updateGear(o);let h=m+1;return r.belowCaps(n)||(h=i),await this.fillGemsToCaps(o,t,s,a+1,h)}};z.allGemColors=[g.GemColorRed,g.GemColorYellow,g.GemColorBlue],z.jcUpgradesById={40118:42154,40125:42156,40112:42143,40111:42142,40119:36767};let V=z;class _ extends V{constructor(e,t,s,a,i){super(e),this.metaGemID=41398,this.arpSlop=11,this.expSlop=4,this.hitTarget=262.32,this.hitSlop=4,this.useArpGems=t,this.useExpGems=s,this.useAgiGems=a,this.useStrGems=i}updateGemPriority(e,t){this.arpTarget=this.calcArpTarget(e);const s=this.calcCritCap(e),a=(new I).withStat(G.StatExpertise,this.calcExpTarget()+this.expSlop);this.passiveHit=t.getStat(G.StatMeleeHit);const i=(new I).withStat(G.StatMeleeHit,this.hitTarget+this.hitSlop);this.tearSlot=null,this.passiveArp=t.getStat(G.StatArmorPenetration),this.arpStackDetected=this.detectArpStackConfiguration(e);const o=this.arpStackDetected?4:this.arpSlop,l=(new I).withStat(G.StatArmorPenetration,this.arpTarget+o),r=new Array;this.useArpGems&&r.push({gemId:40117,statCaps:l}),this.useExpGems&&r.push({gemId:40118,statCaps:a}),this.useAgiGems&&r.push({gemId:40112,statCaps:s}),this.useStrGems&&r.push({gemId:40111,statCaps:new I}),this.gemPriorityByColor[g.GemColorRed]=r;const n=new Array;this.useExpGems&&n.push({gemId:40162,statCaps:i.add(a)}),n.push({gemId:40125,statCaps:i}),this.arpStackDetected&&n.push({gemId:40117,statCaps:l}),this.useExpGems&&n.push({gemId:40162,statCaps:i.add(a)}),this.useAgiGems&&n.push({gemId:40148,statCaps:i.add(s)}),this.useStrGems&&n.push({gemId:40143,statCaps:i}),this.useAgiGems&&n.push({gemId:40147,statCaps:s}),this.useStrGems&&n.push({gemId:40142,statCaps:s}),this.useStrGems&&n.push({gemId:40146,statCaps:new I}),this.gemPriorityByColor[g.GemColorYellow]=n,this.jcUpgradePriority=new Array,this.useExpGems&&this.jcUpgradePriority.push({gemId:40118,statCaps:a}),this.useAgiGems&&this.jcUpgradePriority.push({gemId:40112,statCaps:s}),this.useStrGems&&this.jcUpgradePriority.push({gemId:40111,statCaps:new I})}detectArpStackConfiguration(e){if(!this.useArpGems)return!1;const t=this.findSocketsByColor(e,g.GemColorRed).length-2;let s=this.passiveArp+20*t;return this.useJcGems&&(s+=42),this.arpTarget>1e3&&s>648&&s+20<this.arpTarget+4}activateMetaGem(e){const t=this.findBlueTearSlot(e),s=this.findYellowTearSlot(e);let a=g.GemColorBlue;return this.tearSlot=t.itemSlot,(null==this.tearSlot||this.arpStackDetected&&s.socketBonus>t.socketBonus)&&(a=g.GemColorYellow,this.tearSlot=s.itemSlot),this.socketTear(e,a)}socketTear(e,t){return this.socketGemInFirstMatchingSocket(e,this.tearSlot,t,49110)}findBlueTearSlot(e){const t=this.arpStackDetected?g.GemColorYellow:null;return this.findStrongestSocketBonus(e,g.GemColorBlue,!0,t)}findYellowTearSlot(e){return this.findStrongestSocketBonus(e,g.GemColorYellow,!1,g.GemColorBlue)}allowGemInSocket(e,t,s,a){const i=a.numSocketsOfColor(g.GemColorBlue)>0&&s!=this.tearSlot;let o=!1;return t!=g.GemColorYellow||i||(o=new I(a.item.socketBonus).computeEP(this.epWeights)>1e-8),e==g.GemColorYellow&&o||e==g.GemColorRed&&!o}findSocketsByColor(e,t){const s=super.findSocketsByColor(e,t);return this.arpStackDetected&&t==g.GemColorYellow&&this.sortYellowSockets(e,s),s}sortYellowSockets(e,t){t.sort(((t,s)=>{const a=t.itemSlot,i=s.itemSlot;if(a==i)return 0;if(a==this.tearSlot)return-1;if(i==this.tearSlot)return 1;const o=e.getEquippedItem(a),l=new I(o.item.socketBonus).computeEP(this.epWeights),r=e.getEquippedItem(i);return new I(r.item.socketBonus).computeEP(this.epWeights)/r.numSocketsOfColor(g.GemColorYellow)-l/o.numSocketsOfColor(g.GemColorYellow)}))}calcArpTarget(e){let t=1399;e.hasTrinket(45931)?t-=751:e.hasTrinket(50198)?t-=678:e.hasTrinket(40256)&&(t-=612);const s=e.getEquippedItem(v.ItemSlotMainHand);return 3225==s?.enchant?.effectId&&(t-=120),t}calcExpTarget(){return 213.135}calcCritCap(e){return new I}async fillGemsByColor(e,t){let s=e;return t==g.GemColorRed&&this.useArpGems&&this.useJcGems&&(s=this.optimizeJcArpGems(s)),t==g.GemColorYellow&&this.useJcGems&&this.numSocketedJcGems<3&&(s=this.fillJcHitGems(s)),await super.fillGemsByColor(s,t)}calcDistanceToArpTarget(e,t){const s=Math.max(0,Math.min(t-3,Math.floor((this.arpTarget+this.arpSlop-this.passiveArp-34*e)/20))),a=this.passiveArp+34*e+20*s;return Math.abs(a-this.arpTarget)}optimizeJcArpGems(e){const t=this.findSocketsByColor(e,g.GemColorRed),s=t.length;let a=[0,1,2,3].reduce(((e,t)=>this.calcDistanceToArpTarget(e,s)<this.calcDistanceToArpTarget(t,s)?e:t));a=Math.min(a,s);let i=e;for(let o=0;o<a;o++)i=i.withGem(t[o].itemSlot,t[o].socketIdx,this.sim.db.lookupGem(42153));return this.numSocketedJcGems=a,i}fillJcHitGems(e){const t=this.findSocketsByColor(e,g.GemColorYellow),s=Math.min(3-this.numSocketedJcGems,t.length),a=Math.max(0,Math.floor((this.hitTarget+this.hitSlop-this.passiveHit)/34)),i=Math.min(a,s);let o=e;for(let l=0;l<i;l++)o=o.withGem(t[l].itemSlot,t[l].socketIdx,this.sim.db.lookupGem(42156));return this.numSocketedJcGems+=i,o}}const X=e({fieldName:"latencyMs",label:"Latency",labelTooltip:"Player latency, in milliseconds. Adds a delay to actions that cannot be spell queued."}),Z=t({fieldName:"assumeBleedActive",label:"Assume Bleed Always Active",labelTooltip:"Assume bleed always exists for 'Rend and Tear' calculations. Otherwise will only calculate based on own rip/rake/lacerate.",extraCssClasses:["within-raid-sim-hide"]});function K(e){const t=e.getSimpleRotation();return t.manualParams&&t.rotationType==y.SingleTarget}function Q(e){const t=e.getSimpleRotation();return t.manualParams&&t.rotationType==y.Aoe}const ee={inputs:[s({fieldName:"rotationType",label:"Type",values:[{name:"Single Target",value:y.SingleTarget},{name:"AOE",value:y.Aoe}]}),a({fieldName:"prePopBerserk",label:"Pre-pop Berserk",labelTooltip:"Pre pop berserk 1 sec before fight",showWhen:e=>e.getTalents().berserk,changeEmitter:e=>S.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])}),a({fieldName:"manualParams",label:"Manual Advanced Parameters",labelTooltip:"Manually specify advanced parameters, otherwise will use preset defaults"}),i({fieldName:"maxFfDelay",label:"Max FF Delay",labelTooltip:"Max allowed delay to wait for ff to come off CD in seconds",float:!0,positive:!0,showWhen:e=>e.getSimpleRotation().manualParams}),i({fieldName:"minRoarOffset",label:"Roar Offset",labelTooltip:"Targeted offset in Rip/Roar timings",showWhen:K}),i({fieldName:"ripLeeway",label:"Rip Leeway",labelTooltip:"Rip leeway when determining roar clips",showWhen:K}),a({fieldName:"useRake",label:"Use Rake",labelTooltip:"Use rake during rotation",showWhen:K}),a({fieldName:"useBite",label:"Bite during rotation",labelTooltip:"Use bite during rotation rather than just at end",showWhen:K}),i({fieldName:"biteTime",label:"Bite Time",labelTooltip:"Min seconds on Rip/Roar to bite",showWhen:e=>K(e)&&1==e.getSimpleRotation().useBite&&e.getSimpleRotation().biteModeType==w.Emperical}),a({fieldName:"flowerWeave",label:"Flower Weave",labelTooltip:"Fish for clearcasting during rotation with gotw",showWhen:Q}),i({extraCssClasses:["used-in-apl"],fieldName:"raidTargets",label:"GotW Raid Targets",labelTooltip:"Raid size to assume for clearcast proc chance (can include pets as well, so 25 man raid potentically can be ~30)",showWhen:e=>e.aplRotation.type!=T.TypeSimple||Q(e)&&1==e.getSimpleRotation().flowerWeave}),i({fieldName:"hotUptime",label:"Revitalize Hot Uptime",labelTooltip:"Hot uptime percentage to assume when theorizing energy gains",percent:!0,showWhen:e=>1==e.getSimpleRotation().useBite&&e.getSimpleRotation().biteModeType==w.Analytical})]},te={items:[{id:40473,enchant:3817,gems:[41398,39996]},{id:44664,gems:[39996]},{id:40494,enchant:3808,gems:[39996]},{id:40403,enchant:3605},{id:40539,enchant:3832,gems:[39996]},{id:39765,enchant:3845,gems:[39996,0]},{id:40541,enchant:3604,gems:[0]},{id:40205,gems:[39996]},{id:44011,enchant:3823,gems:[39996,49110]},{id:40243,enchant:3606,gems:[40014]},{id:40474},{id:40717},{id:42987},{id:40256},{id:40388,enchant:3789},{},{id:39757}]},se={items:[{id:46161,enchant:3817,gems:[41398,40002]},{id:45517,gems:[40002]},{id:45245,enchant:3808,gems:[40002,40002]},{id:46032,enchant:3605,gems:[40002,40058]},{id:45473,enchant:3832,gems:[40002,40002,40002]},{id:45869,enchant:3845,gems:[40037]},{id:46158,enchant:3604,gems:[40002]},{id:46095,gems:[40002,40002,40002]},{id:45536,enchant:3823,gems:[39996,39996,39996]},{id:45564,enchant:3606,gems:[39996,39996]},{id:46048,gems:[45862]},{id:45608,gems:[39996]},{id:45931},{id:46038},{id:45613,enchant:3789,gems:[40037,42702]},{},{id:40713}]},ae={items:[{id:48204,enchant:3817,gems:[41398,40146]},{id:47060,gems:[40117]},{id:48207,enchant:3808,gems:[40146]},{id:47545,enchant:3605,gems:[40117]},{id:48206,enchant:3832,gems:[40117,40146]},{id:45611,enchant:3845,gems:[40146,0]},{id:47945,enchant:3604,gems:[40112,40117,0]},{id:47112,gems:[40146,40117,40117]},{id:48205,enchant:3823,gems:[40117,49110]},{id:47077,enchant:3606,gems:[40146,40117]},{id:47075,gems:[40117]},{id:45608,gems:[40117]},{id:45931},{id:47131},{id:47239,enchant:3789,gems:[40146,40117]},{},{id:47668}]},ie={items:[{id:51296,enchant:3817,gems:[41398,40117]},{id:50633,gems:[40117]},{id:51299,enchant:3808,gems:[40117]},{id:47545,enchant:3605,gems:[40117]},{id:51298,enchant:3832,gems:[40117,40125]},{id:50670,enchant:3845,gems:[40125,0]},{id:50675,enchant:3604,gems:[40162,40117,0]},{id:50707,gems:[40117,40117,40117]},{id:51297,enchant:3823,gems:[40117,40162]},{id:50607,enchant:3606,gems:[40143,40143]},{id:50604,gems:[40143]},{id:50402,gems:[40143]},{id:50363},{id:50343},{id:50735,enchant:3789,gems:[40117,49110,40143]},{},{id:50456}]},oe={type:"TypeAPL",prepullActions:[{action:{activateAura:{auraId:{spellId:16870}}},doAtValue:{const:{val:"-1s"}}},{action:{castSpell:{spellId:{spellId:50334}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{const:{val:"false"}},castSpell:{spellId:{spellId:50334}}}},{action:{catOptimalRotationAction:{manualParams:!1,maxFfDelay:.1,minRoarOffset:25,ripLeeway:4,useRake:!0,useBite:!0,biteTime:4}}}]},le={type:"TypeAPL",prepullActions:[{action:{activateAura:{auraId:{spellId:16870}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"30"}}}},castSpell:{spellId:{spellId:50213}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:16870}}}}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{not:{val:{dotIsActive:{spellId:{spellId:49800}}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}}]}},castSpell:{spellId:{spellId:49800}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:16870}}}}},{or:{vals:[{and:{vals:[{auraIsActive:{auraId:{spellId:50334}}},{cmp:{op:"OpLt",lhs:{currentEnergy:{}},rhs:{const:{val:"15"}}}}]}},{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:50334}}}}},{cmp:{op:"OpLt",lhs:{currentEnergy:{}},rhs:{const:{val:"87"}}}}]}}]}}]}},castSpell:{spellId:{spellId:16857}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{spellTimeToReady:{spellId:{spellId:50213}}},rhs:{const:{val:"15s"}}}},{dotIsActive:{spellId:{spellId:49800}}},{not:{val:{auraIsActive:{auraId:{spellId:16870}}}}}]}},castSpell:{spellId:{spellId:50334}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"1"}}}},{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:52610}}}}},{and:{vals:[{dotIsActive:{spellId:{spellId:49800}}},{cmp:{op:"OpGt",lhs:{math:{op:"OpSub",lhs:{remainingTime:{}},rhs:{dotRemainingTime:{spellId:{spellId:49800}}}}},rhs:{const:{val:"10s"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:52610}}},rhs:{math:{op:"OpAdd",lhs:{dotRemainingTime:{spellId:{spellId:49800}}},rhs:{const:{val:"4s"}}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:52610}}},rhs:{remainingTime:{}}}},{cmp:{op:"OpGe",lhs:{catNewSavageRoarDuration:{}},rhs:{math:{op:"OpAdd",lhs:{dotRemainingTime:{spellId:{spellId:49800}}},rhs:{const:{val:"25s"}}}}}}]}}]}}]}},castSpell:{spellId:{spellId:52610}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{not:{val:{auraIsActive:{auraId:{spellId:16870}}}}},{or:{vals:[{and:{vals:[{auraIsActive:{auraId:{spellId:50334}}},{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"25"}}}}]}},{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:50334}}}}},{cmp:{op:"OpLt",lhs:{currentEnergy:{}},rhs:{const:{val:"67"}}}}]}}]}},{or:{vals:[{and:{vals:[{dotIsActive:{spellId:{spellId:49800}}},{auraIsActive:{auraId:{spellId:52610}}},{cmp:{op:"OpGe",lhs:{dotRemainingTime:{spellId:{spellId:49800}}},rhs:{const:{val:"4s"}}}},{cmp:{op:"OpGe",lhs:{auraRemainingTime:{auraId:{spellId:52610}}},rhs:{const:{val:"4s"}}}}]}},{and:{vals:[{dotIsActive:{spellId:{spellId:49800}}},{cmp:{op:"OpLt",lhs:{math:{op:"OpSub",lhs:{remainingTime:{}},rhs:{dotRemainingTime:{spellId:{spellId:49800}}}}},rhs:{const:{val:"10s"}}}}]}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}}]}}]}},castSpell:{spellId:{spellId:48577}}}},{action:{condition:{and:{vals:[{auraShouldRefresh:{auraId:{spellId:48566},maxOverlap:{const:{val:"1s"}}}},{not:{val:{auraIsActive:{auraId:{spellId:16870}}}}}]}},castSpell:{spellId:{spellId:48566}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:16870}}}}},{not:{val:{dotIsActive:{spellId:{spellId:48574}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"9s"}}}}]}},castSpell:{spellId:{spellId:48574}}}},{action:{condition:{and:{vals:[{or:{vals:[{auraIsActive:{auraId:{spellId:16870}}},{cmp:{op:"OpGe",lhs:{catExcessEnergy:{}},rhs:{const:{val:"120"}}}}]}},{cmp:{op:"OpEq",lhs:{const:{val:"1"}},rhs:{const:{val:"0"}}}}]}},castSpell:{spellId:{spellId:48566}}}},{action:{condition:{and:{vals:[{or:{vals:[{auraIsActive:{auraId:{spellId:16870}}},{cmp:{op:"OpGe",lhs:{catExcessEnergy:{}},rhs:{const:{val:"42s"}}}}]}}]}},castSpell:{spellId:{spellId:48572}}}}]},re=o("Preraid Preset",{items:[{id:42550,enchant:3817,gems:[41398,39996]},{id:40678},{id:37139,enchant:3808,gems:[39996]},{id:37840,enchant:3605},{id:37219,enchant:3832},{id:44203,enchant:3845,gems:[0]},{id:37409,enchant:3604,gems:[0]},{id:40694,gems:[49110,39996]},{id:37644,enchant:3823},{id:44297,enchant:3606},{id:37642},{id:37624},{id:40684},{id:37166},{id:37883,enchant:3827},{},{id:40713}]}),ne=o("P1 Preset",te),ce=o("P2 Preset",se),pe=o("P3 Preset",ae),de=o("P4 Preset",ie),me=l("APL Default",oe),he=l("Custom APL Example",le),ue=C.create({rotationType:y.SingleTarget,bearWeaveType:k.None,minCombosForRip:5,minCombosForBite:5,useRake:!0,useBite:!0,mangleSpam:!1,biteModeType:w.Emperical,biteTime:4,berserkBiteThresh:25,berserkFfThresh:15,powerbear:!1,minRoarOffset:12,ripLeeway:3,maintainFaerieFire:!0,hotUptime:0,snekWeave:!1,flowerWeave:!1,raidTargets:30,maxFfDelay:.1,prePopOoc:!0}),ge=r("Simple Default",A.SpecFeralDruid,ue),fe={name:"Standard",data:b.create({})},Se=P.create({latencyMs:100,assumeBleedActive:!0}),Ie=R.create({flask:B.FlaskOfEndlessRage,food:O.FoodDragonfinFilet,defaultPotion:E.PotionOfSpeed}),Ge=n(A.SpecFeralDruid,{cssClass:"feral-druid-sim-ui",cssScheme:x.getCssClass(x.Druid),knownIssues:[],warnings:[],epStats:[G.StatStrength,G.StatAgility,G.StatAttackPower,G.StatMeleeHit,G.StatMeleeCrit,G.StatMeleeHaste,G.StatArmorPenetration,G.StatExpertise],epPseudoStats:[M.PseudoStatMainHandDps],epReferenceStat:G.StatAttackPower,displayStats:[G.StatHealth,G.StatStrength,G.StatAgility,G.StatAttackPower,G.StatMeleeHit,G.StatMeleeCrit,G.StatMeleeHaste,G.StatArmorPenetration,G.StatExpertise,G.StatMana],defaults:{gear:de.gear,epWeights:I.fromMap({[G.StatStrength]:2.4,[G.StatAgility]:2.39,[G.StatAttackPower]:1,[G.StatMeleeHit]:2.51,[G.StatMeleeCrit]:2.23,[G.StatMeleeHaste]:1.83,[G.StatArmorPenetration]:2.08,[G.StatExpertise]:2.44},{[M.PseudoStatMainHandDps]:16.5}),consumes:Ie,talents:fe.data,specOptions:Se,raidBuffs:D.create({arcaneBrilliance:!0,giftOfTheWild:F.TristateEffectImproved,bloodlust:!0,manaSpringTotem:F.TristateEffectRegular,strengthOfEarthTotem:F.TristateEffectImproved,battleShout:F.TristateEffectImproved,unleashedRage:!0,icyTalons:!0,swiftRetribution:!0,sanctifiedRetribution:!0}),partyBuffs:W.create({heroicPresence:!0}),individualBuffs:J.create({blessingOfKings:!0,blessingOfMight:F.TristateEffectImproved}),debuffs:L.create({judgementOfWisdom:!0,bloodFrenzy:!0,giftOfArthas:!0,exposeArmor:!0,faerieFire:F.TristateEffectImproved,sunderArmor:!0,curseOfWeakness:F.TristateEffectRegular,heartOfTheCrusader:!0})},playerIconInputs:[],rotationInputs:ee,includeBuffDebuffInputs:[c,p,d],excludeBuffDebuffInputs:[],otherInputs:{inputs:[X,Z,m,h]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[fe],rotations:[ge,me,he],gear:[re,ne,ce,pe,de]},autoRotation:e=>me.rotation.rotation,simpleRotation:(e,t,s)=>{const[a,i]=$(s),o=H.fromJsonString('{"action":{"activateAura":{"auraId":{"spellId":16870}}},"doAtValue":{"const":{"val":"-1s"}}}'),l=H.fromJsonString('{"action":{"castSpell":{"spellId":{"spellId":50334}}},"doAtValue":{"const":{"val":"-1s"}}}'),r=U.fromJsonString('{"condition":{"const":{"val":"false"}},"castSpell":{"spellId":{"spellId":50334}}}'),n=U.fromJsonString(`{"catOptimalRotationAction":{"rotationType":${t.rotationType},"manualParams":${t.manualParams},"maxFfDelay":${t.maxFfDelay.toFixed(2)},"minRoarOffset":${t.minRoarOffset.toFixed(2)},"ripLeeway":${t.ripLeeway.toFixed(0)},"useRake":${t.useRake},"useBite":${t.useBite},"biteTime":${t.biteTime.toFixed(2)},"flowerWeave":${t.flowerWeave}}}`);return a.push(...[t.prePopOoc?o:null,t.prePopBerserk?l:null].filter((e=>e))),i.push(...[r,n].filter((e=>e))),Y.create({prepullActions:a,priorityList:i.map((e=>N.create({action:e})))})},raidSimPresets:[{spec:A.SpecFeralDruid,talents:fe.data,specOptions:Se,consumes:Ie,defaultFactionRaces:{[j.Unknown]:q.RaceUnknown,[j.Alliance]:q.RaceNightElf,[j.Horde]:q.RaceTauren},defaultGear:{[j.Unknown]:{},[j.Alliance]:{1:ne.gear,2:ce.gear,3:pe.gear,4:de.gear},[j.Horde]:{1:ne.gear,2:ce.gear,3:pe.gear,4:de.gear}}}]});class ve extends u{constructor(e,t){super(e,t,Ge),new ye(this)}}class ye extends _{constructor(e){super(e,!0,!0,!0,!0)}calcCritCap(e){let t=0;return e.hasRelic(47668)&&(t+=200),e.hasRelic(50456)&&(t+=220),(e.hasTrinket(47131)||e.hasTrinket(47464))&&(t+=510),(e.hasTrinket(47115)||e.hasTrinket(47303))&&(t+=450),(e.hasTrinket(44253)||e.hasTrinket(42987))&&(t+=300),(new I).withStat(G.StatMeleeCrit,45.91*(77.8-1.1*t*1.06*1.02/83.33))}}export{ve as F};
//# sourceMappingURL=sim-BHZz-aSe.chunk.js.map
