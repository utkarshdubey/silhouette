function o(o){return"#"+("000000"+(16777215^parseInt(o.substring(1),16)).toString(16)).slice(-6)}function t(t,n){const r=t.split(" ").map((o,t,n)=>0===t||t+1===n.length?o[0]:null).join("");let l;const a="#"+((1<<24)*Math.random()|0).toString(16);return l=n?{backgroundColor:n.backgroundColor?n.backgroundColor:a,textColor:o(n.backgroundColor?n.backgroundColor:a),font:"sans-serif"}:{backgroundColor:a,textColor:o(a),font:"sans-serif"},"data:image/svg+xml;base64,"+window.btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 746.49 836.37"><path fill="${l.backgroundColor||"#d8bfdc"}" d="M0 0h746.5v836.37H0z"/><text transform="matrix(.9 0 0 1 182 543.81)" font-size="428.57" fill="${l.textColor||"#231f20"}" font-family="${l.font}">${r}</text></svg>`)}export{t as generateAvatar};
//# sourceMappingURL=silhouettejs.modern.js.map
