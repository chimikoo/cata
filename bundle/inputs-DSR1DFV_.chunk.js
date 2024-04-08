import{a5 as e,C as t,f as a,ad as o,j as s}from"./preset_utils-D9cZGIsL.chunk.js";import{a_ as n,A as l,b5 as i,v as r,b0 as p,a$ as c,b3 as m,b1 as d,S as u}from"./detailed_results-B8LXSl10.chunk.js";const S=()=>e({fieldName:"shield",values:[{value:n.NoShield,tooltip:"No Shield"},{actionId:l.fromSpellId(57960),value:n.WaterShield},{actionId:l.fromSpellId(49281),value:n.LightningShield}]}),f=()=>e({fieldName:"imbueMh",values:[{value:i.NoImbue,tooltip:"No Main Hand Enchant"},{actionId:l.fromSpellId(58804),value:i.WindfuryWeapon},{actionId:l.fromSpellId(58790),value:i.FlametongueWeapon,text:"R10"},{actionId:l.fromSpellId(58789),value:i.FlametongueWeaponDownrank,text:"R9"},{actionId:l.fromSpellId(58796),value:i.FrostbrandWeapon}]});function O(e,n){const i=new t(e,"totems-settings",{header:{title:"Totems"}}),S=r.newGroupContainer();S.classList.add("totem-dropdowns-container","icon-group");const f=document.createElement("div");if(f.classList.add("fire-elemental-input-container"),i.bodyElement.appendChild(S),i.bodyElement.appendChild(f),new a(S,n.player,{extraCssClasses:["earth-totem-picker"],numColumns:1,values:[{color:"#ffdfba",value:p.NoEarthTotem},{actionId:l.fromSpellId(58643),value:p.StrengthOfEarthTotem},{actionId:l.fromSpellId(58753),value:p.StoneskinTotem},{actionId:l.fromSpellId(8143),value:p.TremorTotem}],equals:(e,t)=>e==t,zeroValue:p.NoEarthTotem,changedEvent:e=>e.specOptionsChangeEmitter,getValue:e=>e.getSpecOptions().classOptions?.totems?.earth||p.NoEarthTotem,setValue:(e,t,a)=>{const o=t.getSpecOptions();o.classOptions?.totems||(o.classOptions.totems=c.create()),o.classOptions.totems.earth=a,t.setSpecOptions(e,o)}}),new a(S,n.player,{extraCssClasses:["water-totem-picker"],numColumns:1,values:[{color:"#bae1ff",value:m.NoWaterTotem},{actionId:l.fromSpellId(58774),value:m.ManaSpringTotem},{actionId:l.fromSpellId(58757),value:m.HealingStreamTotem}],equals:(e,t)=>e==t,zeroValue:m.NoWaterTotem,changedEvent:e=>e.specOptionsChangeEmitter,getValue:e=>e.getSpecOptions().classOptions?.totems?.water||m.NoWaterTotem,setValue:(e,t,a)=>{const o=t.getSpecOptions();o.classOptions?.totems||(o.classOptions.totems=c.create()),o.classOptions.totems.water=a,t.setSpecOptions(e,o)}}),new a(S,n.player,{extraCssClasses:["air-totem-picker"],numColumns:1,values:[{color:"#baffc9",value:d.NoAirTotem},{actionId:l.fromSpellId(8512),value:d.WindfuryTotem},{actionId:l.fromSpellId(3738),value:d.WrathOfAirTotem}],equals:(e,t)=>e==t,zeroValue:d.NoAirTotem,changedEvent:e=>e.specOptionsChangeEmitter,getValue:e=>e.getSpecOptions().classOptions?.totems?.air||d.NoAirTotem,setValue:(e,t,a)=>{const o=t.getSpecOptions();o.classOptions?.totems||(o.classOptions.totems=c.create()),o.classOptions.totems.air=a,t.setSpecOptions(e,o)}}),n.player.getSpec()!=u.SpecEnhancementShaman){const e=o({getModObject:e=>e,getValue:e=>e.getSpecOptions().classOptions?.totems||c.create(),setValue:(e,t,a)=>{const o=t.getSpecOptions();o.classOptions.totems=a,t.setSpecOptions(e,o)},changeEmitter:e=>e.specOptionsChangeEmitter},l.fromSpellId(2894),"useFireElemental");new s(f,n.player,e)}return i}export{S,O as T,f as a};
//# sourceMappingURL=inputs-DSR1DFV_.chunk.js.map
