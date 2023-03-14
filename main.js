(()=>{"use strict";function e(e,t){return this.row=e,this.col=t,{row:e,col:t,getPosString(){return`${this.row}, ${this.col}`}}}const t=[[1,2],[-1,2],[2,1],[-2,1],[-2,-1],[2,-1],[1,-2],[-1,-2]];function n(e,n){const o=[];for(let r of t){const t=e+r[0],s=n+r[1];t>0&&t<=8&&s>0&&s<=8&&o.push([t,s])}return o}const o=document.querySelector("form");o.addEventListener("submit",(t=>{t.preventDefault();const r=function(t,o){const r=[],s=new Set,l=new e(t[0],t[1]);r.push([l]);const c=new e(o[0],o[1]);for(;r.length;){const t=r.shift(),o=t[t.length-1];if(o.row===c.row&&o.col===c.col)return t.map((e=>[e.row,e.col]));s.add(o.getPosString());for(let l of n(o.row,o.col)){const n=new e(l[0],l[1]);s.has(n.getPosString())||r.push([...t,n])}if(!r.length)break}return null}(o.elements.start.value.split(",").map((e=>parseInt(e))),o.elements.target.value.split(",").map((e=>parseInt(e))));null===r?alert("Make sure the numbers are not higher than 8 - and separate them by comma.(n,n)"):function(e){const t=document.querySelector("#chessboard");t.innerHTML="";const n=document.createElement("table");for(let t=8;t>=1;t--){const o=document.createElement("tr");for(let n=1;n<=8;n++){const r=document.createElement("td");e.some((e=>e[0]===t&&e[1]===n))?r.style.backgroundColor="lightgreen":r.style.backgroundColor="white",r.innerText=`${n},${t}`,o.appendChild(r)}n.appendChild(o)}t.appendChild(n)}(r)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V1ksWUFBWVYsRUFDekIsQ0RQSVcsQ0FBU3ZDLEVBQ1gsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL3NyYy9zY3JpcHRzL05vZGUuanMiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL3NjcmlwdHMva25pZ2h0TW92ZXMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL3NyYy9zY3JpcHRzL0RPTS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb2RlKHJvdywgY29sKSB7XG4gIHRoaXMucm93ID0gcm93O1xuICB0aGlzLmNvbCA9IGNvbDtcblxuICByZXR1cm4ge1xuICAgIHJvdyxcbiAgICBjb2wsXG4gICAgZ2V0UG9zU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIGAke3RoaXMucm93fSwgJHt0aGlzLmNvbH1gXG4gICAgfVxuICB9XG59IiwiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJ1xuXG5jb25zdCBkaXJlY3Rpb25zID0gW1sxLCAyXSwgWy0xLCAyXSwgWzIsIDFdLCBbLTIsIDFdLCBbLTIsIC0xXSwgWzIsIC0xXSwgWzEsIC0yXSwgWy0xLCAtMl1dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtuaWdodE1vdmVzKHN0YXJ0UG9zLCB0YXJnZXRQb3MpIHtcblxuICBjb25zdCBxdWV1ZSA9IFtdXG4gIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0KClcbiAgXG4gIGNvbnN0IHN0YXJ0Tm9kZSA9IG5ldyBOb2RlKHN0YXJ0UG9zWzBdLCBzdGFydFBvc1sxXSlcbiAgcXVldWUucHVzaChbc3RhcnROb2RlXSlcbiAgY29uc3QgdGFyZ2V0Tm9kZSA9IG5ldyBOb2RlKHRhcmdldFBvc1swXSwgdGFyZ2V0UG9zWzFdKVxuXG4gIHdoaWxlKHF1ZXVlLmxlbmd0aCkge1xuICAgIC8vIGRlcXVldWUgZmlyc3QgYXJyYXlcbiAgICBjb25zdCBwYXRoID0gcXVldWUuc2hpZnQoKVxuICAgIC8vIGV4dHJhY3QgdGhlIGxhc3Qgbm9kZSBvZiB0aGUgcGF0aCh3aGljaCBpcyB0aGUgY3VycmVudCBsb2NhdGlvbiBvZiBrbmlnaHQpXG4gICAgY29uc3Qgbm9kZSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXVxuXG4gICAgLy8gcHJvY2VzcyBub2RlXG4gICAgLy8gaWYgaXQncyB0aGUgY29ycmVjdCBub2RlXG4gICAgaWYobm9kZS5yb3cgPT09IHRhcmdldE5vZGUucm93ICYmIG5vZGUuY29sID09PSB0YXJnZXROb2RlLmNvbCkge1xuICAgICAgLy8gcmV0dXJuIGEgbmV3IGFycmF5IHJlcHJlc2VudGluZyB0aGUgc2hvcnRlc3QgcGF0aFxuICAgICAgY29uc3Qgc2hvcnRlc3RQYXRoID0gcGF0aC5tYXAocGF0aE5vZGUgPT4gW3BhdGhOb2RlLnJvdywgcGF0aE5vZGUuY29sXSlcbiAgICAgIHJldHVybiBzaG9ydGVzdFBhdGhcbiAgICB9XG4gICAgLy8gaWYgaXQncyBub3QgdGhlIGNvcnJlY3Qgbm9kZSwgYWRkIGl0IHRvIHRoZSB2aXNpdGVkIGFycmF5IGFuZCBjb250aW51ZVxuICAgIHZpc2l0ZWQuYWRkKG5vZGUuZ2V0UG9zU3RyaW5nKCkpXG5cbiAgICAvLyBlbnF1ZXVlIG5laWdoYm9yc1xuICAgIGZvcihsZXQgbmVpZ2hib3Igb2YgZ2V0TmVpZ2hib3JzKG5vZGUucm93LCBub2RlLmNvbCkpIHtcbiAgICAgIGNvbnN0IG5laWdoYm9yTm9kZSA9IG5ldyBOb2RlKG5laWdoYm9yWzBdLCBuZWlnaGJvclsxXSlcblxuICAgICAgLy8gY2hlY2sgaWYgbm9kZSBpcyBpcyBhbHJlYWR5IHZpc2l0ZWRcbiAgICAgIGlmKCF2aXNpdGVkLmhhcyhuZWlnaGJvck5vZGUuZ2V0UG9zU3RyaW5nKCkpKSB7XG4gICAgICAgIC8vIGlmIG5vdCB2aXNpdGVkLCBtYWtlIGEgbmV3IGFycmF5IG9mIHRoZSBwYXRoICsgbmVpZ2hib3Igbm9kZSwgYW5kIGVucXVldWUgYXJyYXlcbiAgICAgICAgcXVldWUucHVzaChbLi4ucGF0aCwgbmVpZ2hib3JOb2RlXSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiB0aGUgcXVldWUgaXMgZW1wdHkgYmVmb3JlIGFjY2Vzc2luZyBub2RlIHByb3BlcnRpZXNcbiAgICBpZiAoIXF1ZXVlLmxlbmd0aCkge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICAvLyBubyBwYXRoIGZvdW5kXG4gIHJldHVybiBudWxsXG59XG5cblxuZnVuY3Rpb24gZ2V0TmVpZ2hib3JzKHJvdywgY29sKSB7XG4gIGNvbnN0IG5laWdoYm9ycyA9IFtdXG5cbiAgZm9yIChsZXQgZGlyZWN0aW9uIG9mIGRpcmVjdGlvbnMpIHtcbiAgICBjb25zdCByb3dDaGFuZ2UgPSBkaXJlY3Rpb25bMF1cbiAgICBjb25zdCBjb2xDaGFuZ2UgPSBkaXJlY3Rpb25bMV1cblxuICAgIGNvbnN0IG5laWdoYm9yUm93ID0gcm93ICsgcm93Q2hhbmdlXG4gICAgY29uc3QgbmVpZ2hib3JDb2wgPSBjb2wgKyBjb2xDaGFuZ2VcblxuICAgIC8vIEFkZCBuZWlnaGJvciB0byBsaXN0IG9mIG5laWdoYm9ycyBpZiBpdCBpcyB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGUgY2hlc3Nib2FyZFxuICAgIGlmIChuZWlnaGJvclJvdyA+IDAgJiYgbmVpZ2hib3JSb3cgPD0gOCAmJiBuZWlnaGJvckNvbCA+IDAgJiYgbmVpZ2hib3JDb2wgPD0gOCkge1xuICAgICAgbmVpZ2hib3JzLnB1c2goW25laWdoYm9yUm93LCBuZWlnaGJvckNvbF0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5laWdoYm9yc1xufSIsImltcG9ydCBrbmlnaHRNb3ZlcyBmcm9tIFwiLi9zY3JpcHRzL2tuaWdodE1vdmVzXCI7XG5pbXBvcnQgZHJhd1BhdGggZnJvbSBcIi4vc2NyaXB0cy9ET01cIjtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHN0YXJ0UG9zID0gZm9ybS5lbGVtZW50cy5zdGFydC52YWx1ZS5zcGxpdChcIixcIikubWFwKChuKSA9PiBwYXJzZUludChuKSk7XG4gIGNvbnN0IHRhcmdldFBvcyA9IGZvcm0uZWxlbWVudHMudGFyZ2V0LnZhbHVlLnNwbGl0KFwiLFwiKS5tYXAoKG4pID0+IHBhcnNlSW50KG4pKTtcbiAgY29uc3QgcGF0aCA9IGtuaWdodE1vdmVzKHN0YXJ0UG9zLCB0YXJnZXRQb3MpO1xuICBpZiAocGF0aCA9PT0gbnVsbCkge1xuICAgIGFsZXJ0KFwiTWFrZSBzdXJlIHRoZSBudW1iZXJzIGFyZSBub3QgaGlnaGVyIHRoYW4gOCAtIGFuZCBzZXBhcmF0ZSB0aGVtIGJ5IGNvbW1hLihuLG4pXCIpO1xuICB9IGVsc2Uge1xuICAgIGRyYXdQYXRoKHBhdGgpO1xuICB9XG59KTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmF3UGF0aChwYXRoKSB7XG4gIGNvbnN0IGNoZXNzYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NoZXNzYm9hcmRcIik7XG5cbiAgY2hlc3Nib2FyZC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgZm9yIChsZXQgaSA9IDg7IGkgPj0gMTsgaS0tKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDg7IGorKykge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgIGlmIChwYXRoLnNvbWUoKHBvcykgPT4gcG9zWzBdID09PSBpICYmIHBvc1sxXSA9PT0gaikpIHtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0Z3JlZW5cIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgfVxuICAgICAgY2VsbC5pbm5lclRleHQgPSBgJHtqfSwke2l9YDtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxuICBjaGVzc2JvYXJkLmFwcGVuZENoaWxkKHRhYmxlKTtcbn0iXSwibmFtZXMiOlsiTm9kZSIsInJvdyIsImNvbCIsInRoaXMiLCJnZXRQb3NTdHJpbmciLCJkaXJlY3Rpb25zIiwiZ2V0TmVpZ2hib3JzIiwibmVpZ2hib3JzIiwiZGlyZWN0aW9uIiwibmVpZ2hib3JSb3ciLCJuZWlnaGJvckNvbCIsInB1c2giLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBhdGgiLCJzdGFydFBvcyIsInRhcmdldFBvcyIsInF1ZXVlIiwidmlzaXRlZCIsIlNldCIsInN0YXJ0Tm9kZSIsInRhcmdldE5vZGUiLCJsZW5ndGgiLCJzaGlmdCIsIm5vZGUiLCJtYXAiLCJwYXRoTm9kZSIsImFkZCIsIm5laWdoYm9yIiwibmVpZ2hib3JOb2RlIiwiaGFzIiwia25pZ2h0TW92ZXMiLCJlbGVtZW50cyIsInN0YXJ0IiwidmFsdWUiLCJzcGxpdCIsIm4iLCJwYXJzZUludCIsInRhcmdldCIsImFsZXJ0IiwiY2hlc3Nib2FyZCIsImlubmVySFRNTCIsInRhYmxlIiwiY3JlYXRlRWxlbWVudCIsImkiLCJqIiwiY2VsbCIsInNvbWUiLCJwb3MiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwiZHJhd1BhdGgiXSwic291cmNlUm9vdCI6IiJ9