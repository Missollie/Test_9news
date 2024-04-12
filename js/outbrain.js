window.OBR || (function() {
  window.OBR = {
      _jsc: {},
      "env": 1,
      "settings": {
          "fraudDetection": "0",
          "disableLocalStorageGdpr": false,
          "delayWidgetTime": 0,
          "delayWidgetInterval": 0,
          "disableLslGdprEuUsers": false,
          "skeletonData": "[[\"HPC\",0.63,4, \"desktop\"]]",
          "enableDebuggingReports": 0,
          "loadingOnGDPRSignal": 0,
          "skipAdblock": 0,
          "publisherSubscriptionSelector": ".sso__link",
          "_pid": "30836",
          "country": "PL",
          "gdpr": 1,
          "ab": "1451-5135-5136~100"
      }
  };
  OBR.error = function(a) {
      var d = ["www.vanguardngr.com"];
      if (!0 !== a) {
          var b, c = document,
              h = window.OB_releaseVer,
              k = OBR && OBR.env ? OBR.env : 1,
              l = a.isMonitorRepeated ? "&isMonitorRepeated=true" : "",
              m = a.errorEleUrl ? "&errorEleUrl=" + encodeURIComponent(a.errorEleUrl) : "",
              n = OBR && OBR.settings && (OBR.settings.disableLocalStorageGdpr || 1 === OBR.settings.disableStorageAndCookies),
              f = OBR.localStorageAvailable;
          d = window.location && window.location.hostname && -1 < d.indexOf(window.location.hostname);
          if (!c.getElementById("obMntor") && !d) {
              var g =
                  function() {
                      b = c.createElement("iframe");
                      b.setAttribute("id", "obMntor");
                      b.style.display = "none";
                      c.body.appendChild(b);
                      var e = "https://widgets.outbrain.com/widgetMonitor/monitor.html?name=" + encodeURIComponent(a.name) + "&env=" + k + "&message=" + encodeURIComponent(a.message) + l + "&stack=" + encodeURIComponent(a.stack) + "&ver=" + encodeURIComponent(h) + "&ren=" + encodeURIComponent(OBR.ren) + m;
                      OBR && OBR.monitorData && (e += "&sId=" + OBR.monitorData.sourceId + "&dId=" + OBR.monitorData.docId + "&pId=" + OBR.monitorData.pubId);
                      if (!1 === f ||
                          n && "undefined" == typeof f) e += "&dLs=1";
                      b.src = e;
                      "function" === typeof OBR.issue && OBR.issue(a)
                  };
              c.body ? g() : setTimeout(function() {
                  c.body && g()
              }, 1E4)
          }
      }
  };
  OBR.error.cleanLS = function() {
      if (!window.obMonitorLocalstorageCleaned) {
          window.obMonitorLocalstorageCleaned = !0;
          try {
              const a = document.createElement("iframe");
              a.onload = function() {
                  try {
                      this.remove()
                  } catch (d) {}
              };
              a.id = "obMntorDeleteLS";
              a.src = "https://widgets.outbrain.com/widgetMonitor/monitor.html?deletelocalstorage=true";
              document.body.appendChild(a)
          } catch (a) {}
      }
  };;
  try {
      var ccs = function() {
          (function() {
              var ba, x, fa, ha, ja, ka, la, na, pa, qa, sa, ra, ta, ua, va, wa, Ba, Ca, Da, Ea, Fa, Ma, F, Oa, Pa, Ra, Sa, Ta, Xa, Wa, Za, Ua, Va, $a, Ya, bb, cb, ab, db, gb, eb, fb, lb, pb, mb, nb, ob, tb, ub, vb, wb, xb, yb, Cb, Eb, Fb, zb, Tb, Bb, Ub, Vb, Yb, Zb, $b, ac, bc, cc, dc, ec, gc, hc, ic, jc, qc, rc, lc, xc, Ac, Bc, sc, tc, uc, vc, zc, Cc, Hc, wc, Lc, Mc, Nc, Oc, Qc, Rc, Sc, Pc, Tc, Uc, Vc, Xc, Yc, Zc, $c, ad, cd, ed, fd, gd, id, jd, kd, md, ld, nd, pd, qd, rd, sd, td, ud, vd, wd, xd, yd, Ad, Ed, Gd, Jd, Hd, Id, L, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd, Yd, Zd, $d, ae, be, ce, de, ee, fe, M, ge, qe, re, se, te, ue, ve, xe, ye, Fe, ze, Ae, Be,
                  Ce, De, Ee, Ie, Je, Ke, Le, Me, Ne, Oe, Qe, Se, Ue, Ve, We, Ye, Te, Ze, Xe, $e, af, bf, cf, df, ef, Re, ff, gf, jf, hf, kf, lf, mf, nf, of , rf, sf, If, Ab, Lf, Kf, Of, Pf, Qf, Rf, Uf, Yf, Zf, ag, Sf, Tf, bg, cg, Wf, Vf, Xf, $f, fg, gg, eg, dg, hg, jg, kg, lg, mg, ng, og, qg, rg, sg, ug, vg, tg, yg, xg, zg, wg, Bg, Ag, Cg, Dg, Eg, Fg, Gg, Hg, Ig, Jg, Kg, Mg, Ng, Og, Pg, Qg, Sg, Tg, Ug, Rg, Lg, Vg, Wg, Yg, Zg, $g, Xg, ch, dh, ah, bh, fh, gh, hh, ea, da;
              ba = function(a) {
                  a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
                  for (var b = 0; b < a.length; ++b) {
                      var c = a[b];
                      if (c && c.Math == Math) return c
                  }
                  throw Error("Cannot find global object");
              };
              x = function(a, b) {
                  if (b) a: {
                      var c = da;a = a.split(".");
                      for (var d = 0; d < a.length - 1; d++) {
                          var e = a[d];
                          if (!(e in c)) break a;
                          c = c[e]
                      }
                      a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ea(c, a, {
                          configurable: !0,
                          writable: !0,
                          value: b
                      })
                  }
              };
              fa = function(a) {
                  function b(d) {
                      return a.next(d)
                  }

                  function c(d) {
                      return a.throw(d)
                  }
                  return new Promise(function(d, e) {
                      function f(g) {
                          g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
                      }
                      f(a.next())
                  })
              };
              OBR._jsc.z = function(a) {
                  return fa(a())
              };
              ha = function(a) {
                  a = Math.trunc(a) || 0;
                  0 > a && (a += this.length);
                  if (!(0 > a || a >= this.length)) return this[a]
              };
              ja = function(a) {
                  return a ? a : ha
              };
              ka = function(a, b) {
                  a instanceof String && (a += "");
                  var c = 0,
                      d = !1,
                      e = {
                          next: function() {
                              if (!d && c < a.length) {
                                  var f = c++;
                                  return {
                                      value: b(f, a[f]),
                                      done: !1
                                  }
                              }
                              d = !0;
                              return {
                                  done: !0,
                                  value: void 0
                              }
                          }
                      };
                  e[Symbol.iterator] = function() {
                      return e
                  };
                  return e
              };
              la = function(a) {
                  if (!a.MG) {
                      a.MG = !0;
                      var b = new Event("obEventsChange");
                      Object.defineProperty(a.tp, "push", {
                          enumerable: !1,
                          configurable: !0,
                          writable: !0,
                          value: function() {
                              Array.prototype.push.apply(this, arguments);
                              window.dispatchEvent(b)
                          }
                      });
                      window.addEventListener("obEventsChange", () => a.A())
                  }
              };
              na = function() {
                  window.OBR && (OBR.issue = a => {
                      if (a && ["TypeError", "obm-ContainerNotFound", "obm-cmp_fail"].includes(a.name)) {
                          var b = ma;
                          a && a.message && b.fire({
                              name: "issue",
                              widgetId: null,
                              timestamp: Date.now(),
                              version: window.OB_releaseVer,
                              data: {
                                  name: a.name,
                                  message: a.message
                              }
                          })
                      }
                  })
              };
              pa = function(a) {
                  const b = [];
                  if (!a) return b;
                  Array.isArray(a) ? b.push(...a.filter(c => oa.includes(c))) : "all" === a ? b.push(...oa) : a && oa.includes(a) && b.push(a);
                  return b
              };
              qa = function(a, b, c) {
                  return "string" === typeof a && oa.includes(a) && "function" === typeof b && (!c || "all" === c || "string" === typeof c || Array.isArray(c) && c.every(d => "string" === typeof d))
              };
              sa = function(a, b) {
                  const c = ra(b),
                      d = !a.widgetId || "all" === a.widgetId || "string" === typeof a.widgetId && c.includes(a.widgetId) || Array.isArray(a.widgetId) && a.widgetId.some(e => c.includes(e));
                  return b.parentWidgetId && "rendered" === b.name ? a.feedCards && d : d
              };
              ra = function(a) {
                  return [a.widgetId, a.servedWidgetId, a.parentWidgetId, a.servedParentWidgetId].filter((b, c, d) => !!b && d.indexOf(b) === c)
              };
              ta = function(a, b) {
                  const c = ma.B[a];
                  return c ? c.filter(d => sa(d, {
                      name: a,
                      widgetId: b
                  })).some(d => !!d.feedCards) : !1
              };
              ua = function() {
                  try {
                      let a = window.localStorage ? window.localStorage.getItem("_lr_env") : "";
                      if (a) return a = atob(a), a = JSON.parse(a).kD;
                      document.cookie.split(";").forEach(b => {
                          b = b.trim();
                          0 === b.indexOf("_lr_env=") && (a = JSON.parse(atob(decodeURIComponent(decodeURIComponent(b.split("=")[1])))).envelope)
                      });
                      return a ? a : ""
                  } catch (a) {}
              };
              va = function(a) {
                  const b = OBR._jsc.B("widgetsLevelLazyLoad");
                  return (null == b ? void 0 : b.length) && -1 < b.indexOf(a) || !1
              };
              OBR._jsc.B = function(a) {
                  return OBR.settings && OBR.settings[a]
              };
              wa = function(a) {
                  var b = window;
                  try {
                      return a.split(".").reduce((c, d) => (c || {})[d], b) || void 0
                  } catch (c) {}
              };
              Ba = function() {
                  if (xa.xe) return !0;
                  try {
                      if (window.localStorage && window.localStorage.getItem) return !0
                  } catch (a) {
                      return !1
                  }
              };
              Ca = function(a) {
                  return {
                      Mk: a || {},
                      setItem: function(b, c) {
                          this.Mk[b] = c
                      },
                      removeItem: function(b) {
                          this.Mk[b] = void 0
                      },
                      getItem: function(b) {
                          return "undefined" !== typeof this.Mk[b] ? this.Mk[b] : null
                      }
                  }
              };
              Da = function(a) {
                  const b = {};
                  Object.values(OBR._jsc.C).forEach(c => {
                      a.get(c, !1) && (b[c] = a.get(c));
                      a.delete(c)
                  });
                  a.xe = Ca(b)
              };
              Ea = function(a) {
                  Object.values(OBR._jsc.C).forEach(b => {
                      a.delete(b)
                  });
                  OBR.error && OBR.error.cleanLS && OBR.error.cleanLS()
              };
              Fa = function(a) {
                  Object.keys(a.cache).forEach(b => {
                      a.set(b, a.cache[b])
                  })
              };
              Ma = function(a = null) {
                  return a && a.l("disableLocalStorageGdpr", !1) ? !0 : OBR.settings && "undefined" !== typeof OBR.settings.disableLocalStorageGdpr ? !!OBR.settings.disableLocalStorageGdpr : window.OBBridge && window.OBBridge.disableLocalStorage ? !0 : a ? !a.fc() : !0
              };
              F = function(a, b, c) {
                  return (a = a.CL.get(b)) ? a : c
              };
              Oa = function(a, b) {
                  a.yF = `${b.qy}/widgetOBUserSync/obUserSync.html#pid=${b.Cw}&dmpenabled=${b.Om}&filterDMP=${b.kt}&d=${b.Ys}${b.Ds}&gdpr=${b.Ct}&cmpNeeded=${b.Eu}&gdprVer=${b.Cb}&ccpa=${b.us}&country=${b.country}${b.Jw}&initiator=${b.wu}`;
                  a.mo()
              };
              Pa = function(a, b, c) {
                  b = `${"ob-mark-"}${c?"0-":"1-"}${b}`;
                  a.im.mark(b);
                  a.marks.push(b);
                  return b
              };
              Ra = function() {
                  return performance.getEntriesByType("resource").filter(a => Qa.test(a.name))
              };
              Sa = function(a, b) {
                  OBR.logger.log("remove event :" + b);
                  for (let c = 0, d = a.B.length; c < d; c += 1)
                      if (a.B[c] && a.B[c].name && a.B[c].name === b) try {
                          a.B.splice(c, 1)
                      } catch (e) {
                          OBR.logger.log("rm evnt err: " + e), OBR.error(e)
                      }
              };
              Ta = function(a) {
                  if (window.__tcfapi && "function" === typeof window.__tcfapi) var b = 2;
                  else a: {
                      if (OBR.i.Xc) {
                          let c = window,
                              d = 0;
                          for (; c && 10 > d;) try {
                              if (c.frames.__tcfapiLocator) {
                                  a.Aq = c;
                                  b = 2;
                                  break a
                              }
                              if (c === window.top) break;
                              c = c.parent;
                              d++
                          } catch (e) {
                              break
                          }
                      }
                      b = null
                  }
                  return b
              };
              Xa = function(a) {
                  if (!OBR.i.eb) {
                      var b = Ua(),
                          c = null === a.Cb;
                      0 < b && c && (a.mc = !0, 1 === b && (a.Mq = !0), Va(a).then(d => {
                          a.Cb = d;
                          a.mc = null !== d;
                          Wa(a)
                      }).catch(() => {
                          a.mc = !1;
                          a.$j()
                      }))
                  }
              };
              Wa = function(a) {
                  if (typeof OBR.i.gl.OB_CONSENT === OBR.i.ks && !1 === OBR.i.gl.OB_CONSENT) a.mc = !0;
                  else if (a.mc) switch (a.Cb) {
                      case 2:
                          Ya(a)
                  }
              };
              Za = function(a) {
                  a.pq && window.__uspapi("getUSPData", 1, (b, c) => {
                      c && b && b.uspString ? (OBR.logger.log("getCCPAData: " + b.uspString), OBR.g.Fa(OBR._jsc.C.Vh, b.uspString), a.Xb = b.uspString) : OBR.g.ie("obm-ccpa_fail", document.location.hostname, !1, 100)
                  })
              };
              Ua = function() {
                  return OBR.settings && OBR.settings.loadingOnGDPRSignal ? OBR.settings.loadingOnGDPRSignal : 0
              };
              Va = function(a) {
                  const b = Date.now(),
                      c = (d, e) => {
                          const f = Ta(a);
                          f ? d(f) : 5E3 <= Date.now() - b ? e() : setTimeout(() => c(d, e), 100)
                      };
                  return new Promise(c)
              };
              $a = function(a, b) {
                  a.ky = !0;
                  const c = OBR.g.oa(b);
                  OBR.logger.log("Consent on user selection");
                  OBR.logger.log(`getConsentData: ${c}`);
                  OBR.g.Fa(OBR._jsc.C.qc, c);
                  a.mb = b;
                  a.$j()
              };
              Ya = function(a) {
                  null != a.Aq && ab(a);
                  try {
                      window.__tcfapi("addEventListener", a.Kh, (b, c) => {
                          "cmpuishown" === b.eventStatus && (a.Mq = !0, bb(a));
                          c && "tcloaded" === b.eventStatus ? (b = b.tcString) ? (b = OBR.g.oa(b), OBR.logger.log("getConsentData: " + b), OBR.g.Fa(OBR._jsc.C.qc, b), a.Em || (a.mb = b), bb(a)) : (OBR.g.Zd(OBR._jsc.C.qc), a.mc = Ua()) : cb(a)
                      })
                  } catch (b) {
                      OBR.g.ie("obm-cmp_fail", document.location.hostname, !1, 100), a.cO("no_consent"), a.mc = !0
                  }
              };
              bb = function(a) {
                  Ua() && window.__tcfapi("addEventListener", a.Kh, (b, c) => {
                      !c || "tcloaded" !== b.eventStatus && "useractioncomplete" !== b.eventStatus || (Ua() && $a(a, b.tcString), window.__tcfapi("removeEventListener", a.Kh, () => {}, b.listenerId))
                  })
              };
              cb = function(a) {
                  window.__tcfapi("addEventListener", a.Kh, (b, c) => {
                      !c || "tcloaded" !== b.eventStatus && "useractioncomplete" !== b.eventStatus ? OBR.g.ie("obm-cmp_fail", document.location.hostname, !1, 100) : b.tcString ? (c = OBR.g.oa(b.tcString), OBR.logger.log("getConsentData: " + c), OBR.g.Fa(OBR._jsc.C.qc, c), a.Em || (a.mb = c), window.__tcfapi("removeEventListener", a.Kh, () => {}, b.listenerId)) : a.mc = !1
                  })
              };
              ab = function(a) {
                  window.__tcfapi = (b, c, d, e) => {
                      const f = Math.random() + "";
                      b = {
                          __tcfapiCall: {
                              command: b,
                              parameter: e,
                              version: c,
                              callId: f
                          }
                      };
                      a.si[f] = d;
                      a.Aq.postMessage(b, "*")
                  };
                  window.addEventListener("message", function(b) {
                      let c = {};
                      try {
                          c = "string" === typeof b.data ? JSON.parse(b.data) : b.data
                      } catch (d) {
                          return
                      }(b = c.__tcfapiReturn) && "function" === typeof this.si[b.callId] && (this.si[b.callId](b.returnValue, b.success), this.si[b.callId] = null)
                  }.bind(a), !1)
              };
              db = function() {
                  var a = OBR.settings.preloadScripts;
                  return Array.isArray(a) && a.every(b => "string" === typeof b)
              };
              gb = function(a, b) {
                  OBR.i.Kj() || OBR.i.Lj() || OBR.i.eb ? (a.lb = "false", a.fe = "false", a.Ri = !0, a.og = OBR.g.yi([!1, !1]), a.pg = OBR.g.yi([!1, !1]), eb(a)) : a.Ri ? OBR.logger.log("AdBlock - skipped full check detection (called once)") : document.body ? fb(a) : b && b.uH ? window.addEventListener("DOMContentLoaded", a.fI.bind(a)) : (OBR.logger.log("AdBlock - Don't have body. skip full check"), a.lb = a.lb ? a.lb : "false", a.fe = a.fe ? a.fe : "false", a.om.fire("onAdBlockStatusReady", [a.lb]))
              };
              eb = function(a) {
                  a.lb = (0 < a.og).toString();
                  OBR.logger.log(`AdBlock - finish long status check. adBlock = ${a.lb} wl = ${a.pg}`);
                  OBR.g.Fa(OBR._jsc.C.Sq, a.lb);
                  OBR.g.Fa(OBR._jsc.C.Tq, a.fe);
                  a.om.fire("onAdBlockStatusReady", [a.lb])
              };
              fb = function(a) {
                  a.Ri || (OBR.logger.log("AdBlock - start detection"), a.Ri = !0, lb(a))
              };
              lb = function(a) {
                  Promise.all([mb(a), nb(a), ob(a)]).then(([b, c, d]) => {
                      var e = b && c;
                      b = [e, b];
                      e = [e && d, !1];
                      a.fe = c ? d.toString() : "false";
                      a.og = OBR.g.yi(b);
                      a.pg = OBR.g.yi(e);
                      0 === a.og && 2 === a.pg && OBR.error({
                          name: "adblock",
                          message: "got 0 2 in ad blocker detection"
                      });
                      eb(a)
                  })
              };
              pb = function(a, b) {
                  var c = OBR.kb;
                  return b === c.bt.stopped || b === c.bt.Hq ? !1 : (a = (a = OBR.g.v(a)) && Array.from(OBR.g.H(a).querySelectorAll(".ob-p > a"))) && a.some(d => !!d.offsetParent && 10 < d.parentElement.offsetHeight)
              };
              mb = function(a) {
                  const b = OBR._jsc.qb('<div style="position:fixed!important;top:-9999px!important;left:-9999px;!important;width:1px!important;height:1px!important;"></div>'),
                      c = OBR.g.createElement("a", "ob_ad", a.cssText);
                  c.className = "Ads_4 AD_area ADBox AdsRec";
                  c.href = "https://paid.outbrain.com/network/redir?";
                  b.appendChild(c);
                  document.body.appendChild(b);
                  return rb((d, e) => {
                      setTimeout(() => {
                          d || (d = !0, e(!c.offsetParent), document.body.removeChild(b))
                      }, 0)
                  }, a.Nm)
              };
              nb = function(a) {
                  return rb((b, c) => {
                      const d = new Image;
                      d.onload = () => {
                          b || (b = !0, c(!1))
                      };
                      d.onerror = () => {
                          b || (b = !0, c(!0))
                      };
                      d.src = "https://widget-pixels.outbrain.com/widget/detect/px.gif?ch=1"
                  }, a.Nm)
              };
              ob = function(a) {
                  return rb((b, c) => {
                      const d = OBR._jsc.qb('<div class="ob-p ob-dynamic-rec-container" style="position:fixed!important;top:-9999px!important;left:-9999px;!important;width:1px!important;height:1px!important;"></div>'),
                          e = OBR._jsc.qb(`<a style="${a.cssText}" onmousedown="this.href='http://paid.outbrain.com/network/redir?'" target="_blank" >ad</a>`);
                      d.appendChild(e);
                      document.body.appendChild(d);
                      setTimeout(() => {
                          b || (b = !0, c(!!e.offsetParent), document.body.removeChild(d))
                      }, 0)
                  }, a.Nm)
              };
              tb = function(a) {
                  a = `<div class="ob-chunks-loader${a.md?` ${a.md}`:""}">${a.tg.map(c=>{const d=.5<c?[1]:.4<c?[2]:.3<c?[2,3]:0<c?[3]:[1],e=d[~~(Math.random()*d.length)];return Array(e).fill(null).map(()=>`<div style="padding-top: calc(${100*c}% - 44px); min-width: ${`calc(${(100/e).toFixed(2)}% - ${(16*(e-1)/e).toFixed(2)}px)`};"></div>`).join("")}).join("")}</div>`;
                  if (!sb) {
                      var b = [{
                          time: 0,
                          opacity: .8
                      }, {
                          time: 300,
                          opacity: .8
                      }, {
                          time: 1500,
                          opacity: .2
                      }, {
                          time: 300,
                          opacity: .2
                      }, {
                          time: 1500,
                          opacity: .8
                      }];
                      const c = b.reduce((d,
                          e) => e.SA = d + e.time, 0);
                      b = `
      @keyframes ob-chunks-anim {
        ${b.map(d=>`${(d.SA/c*100).toFixed(2)}% { opacity: ${d.opacity} }`).join("\n")}
      }

      .ob-chunks-loader {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      .ob-chunks-loader div {
        position: relative;
        margin: 20px 0 64px 0;
        background-color: #e2dfde;
        animation: ob-chunks-anim ${c}ms ease-in-out 0s infinite;
      }

      .ob-chunks-loader div::before, .ob-chunks-loader div::after {
        content: '';
        position: absolute;
        left: 0;
        height: 14px;
        background-color: #e2dfde;
      }

      .ob-chunks-loader div::before {
        width: 75%;
        bottom: -22px;
      }

      .ob-chunks-loader div::after {
        width: 84%;
        bottom: -44px;
      }
    `;
                      OBR.g.ia(b);
                      sb = !0
                  }
                  return a
              };
              ub = function(a = {}) {
                  a.tg ? a = tb(a) : (OBR.g.ia(".ob_sf_loader {margin: 25px auto 20px; width: 70px; text-align: center;} .ob_sf_loader > div {width: 18px; height: 18px; background-color: #333; border-radius: 100%; display: inline-block;  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both; animation: sk-bouncedelay 1.4s infinite ease-in-out both; }  .ob_sf_loader .bounce1 { -webkit-animation-delay: -0.32s;  animation-delay: -0.32s;  } .ob_sf_loader .bounce2 { -webkit-animation-delay: -0.16s;  animation-delay: -0.16s; }  @-webkit-keyframes sk-bouncedelay { 0%, 80%, 100% { -webkit-transform: scale(0) } 40% { -webkit-transform: scale(1.0) }  }  @keyframes sk-bouncedelay { 0%, 80%, 100% { -webkit-transform: scale(0); transform: scale(0); } 40% { -webkit-transform: scale(1.0);  transform: scale(1.0);  }  }"), a =
                      '<div class="ob_sf_loader">\n                      <div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div>\n                     </div>\n                    ');
                  return OBR.g.Oa(a)
              };
              vb = function() {
                  try {
                      const a = JSON.parse(OBR.g.U(OBR._jsc.C.Ge, null));
                      return a ? a : null
                  } catch (a) {
                      OBR.logger.log("failed to parse Local Storage for skeleton")
                  }
              };
              wb = function(a) {
                  try {
                      const b = JSON.parse(OBR.g.U(OBR._jsc.C.Ge, null));
                      b && (b.wl = b.wl.filter(c => c.fx !== +a), b.wl && (b.wl.length ? OBR.g.Fa(OBR._jsc.C.Ge, JSON.stringify(b)) : OBR.g.Zd(OBR._jsc.C.Ge)))
                  } catch (b) {
                      OBR.logger.log("failed to delete Local Storage for skeleton")
                  }
              };
              xb = function(a) {
                  try {
                      if (a.Yb) return a.Yb;
                      if (OBR._jsc.B("skeletonData")) return JSON.parse(OBR.settings.skeletonData)
                  } catch (b) {
                      OBR.logger.log("failed to parse skeletonData")
                  }
              };
              yb = function(a, b, c, d) {
                  if ((b = b.wl.find(e => e.n === c)) && d)
                      if (b.h) try {
                          OBR.g.Zd(OBR._jsc.C.Ge)
                      } catch (e) {
                          OBR.logger.log("failed to delete Local Storage for skeleton")
                      } else b = b.r, b = Array(Math.ceil(b)).fill(b), a.Ie(d, b, c)
              };
              Cb = function(a, b, c) {
                  if (a.Yb && !a.li.find(g => g.md === b)) {
                      var d = zb(a, b);
                      if (d) {
                          var e = Ab(c);
                          const [, g, k] = d;
                          if (2 >= k) d = Array(1).fill(+g), a.Ie(c, d, b);
                          else {
                              d = +g * e.width;
                              var f = d * k;
                              e = Bb(e, f, +k);
                              1 < e.length && (a.K[b] = {
                                  PM: e,
                                  sL: f,
                                  RN: d
                              });
                              a.Ie(c, e, b)
                          }
                      }
                  }
              };
              Eb = function(a) {
                  var b = Db;
                  const c = a && a.D();
                  b.K[c] && (a = a.v(), (b = b.li.find(d => d.md === c)) && b.ip && a.appendChild(b.ip))
              };
              Fb = function(a, b) {
                  return (a = a.li.filter(c => c.md === b.md).map(c => c.ip)) && a.length ? a[0] : ub(b)
              };
              zb = function(a, b) {
                  return a.Yb.find(c => c.includes(b) && c.includes(a.platform))
              };
              Tb = function(a) {
                  var b = Db;
                  let c = a.D();
                  a = b.mf && b.mf.wl.find(d => d.n === c);
                  b = b.Yb && zb(b, c);
                  return !!a || !!b
              };
              Bb = function(a, b, c) {
                  return Ub(b, c).map(d => d / a.width)
              };
              Ub = function(a, b) {
                  b = Math.floor(Math.random() * (b + 2 - b) + b);
                  return Vb(a, 0 < b ? b : 1)
              };
              Vb = function(a, b) {
                  return Array(b).fill(a).map((c, d) => {
                      c = .8 * a;
                      return (Math.random() * (a - c) + c) / b + (d < a % b)
                  })
              };
              Yb = function() {
                  if (Xb.isEnabled) {
                      var a = window.performance.getEntries();
                      if (a && a.length) {
                          var b = `${OBR.i.Xa||"https://widgets.outbrain.com"}/outbrain.js`;
                          return a.find(c => c.name.includes(b))
                      }
                  }
              };
              Zb = function(a, b, c) {
                  if (Xb.isEnabled) {
                      var d = a.Y();
                      d = d ? d : a;
                      if ("odb" === b || "mv" === b) return d.du(`${b}-${c}`);
                      if ("rendered" === b) return a.du(b)
                  }
              };
              $b = function(a, b) {
                  return "number" !== typeof a || "number" !== typeof b ? null : b - a
              };
              ac = function() {
                  return {
                      iw: void 0,
                      obLoaded: void 0,
                      odbReq: void 0,
                      odbRes: void 0,
                      mvReq: void 0,
                      mvRes: void 0,
                      rendered: void 0,
                      timeOrigin: void 0,
                      actualSizeChunk: void 0,
                      connectionEffectiveType: void 0,
                      Dv: void 0
                  }
              };
              bc = function(a, b, c, d = !1) {
                  if (a.cache.has(b) && !d) return a.cache.get(b);
                  c = c();
                  a.cache.set(b, c ? `&${b}=${c}` : "");
                  return a.cache.get(b)
              };
              cc = function(a) {
                  return bc(a, "reload", () => OBR.i.RE())
              };
              dc = function(a, b) {
                  return bc(a, "darkMode", () => b.xj())
              };
              ec = function(a, b) {
                  return bc(a, "wdr-dark-mode", () => {
                      const c = b.yn(),
                          d = b.Vu(),
                          e = b.Kg();
                      if (!0 === c || e || d) return "ob-dark-mode"
                  })
              };
              gc = function(a) {
                  return bc(a, "obRecsAbtestVars", () => {
                      let b = OBR.i.$H || "";
                      if (OBR.i.kg && 0 < OBR.i.kg) {
                          var c = 1 === OBR.i.kg ? "1407-4915" : "1407-4916";
                          b = b ? `${b},${c}` : c
                      }
                      window.OBBridge && window.OBBridge.bridgeIntersectionTestVariant && (c = window.OBBridge.bridgeIntersectionTestVariant, b = b ? `${b},${c}` : c);
                      (c = fc.Ur || "") && "" != c && (b = b ? `${b},${c}` : c);
                      return b
                  })
              };
              hc = function(a) {
                  return bc(a, "forcePartner", () => {
                      const b = OBR.g.L("forcePartner", !1);
                      if (b) return b
                  })
              };
              ic = function(a) {
                  return bc(a, "forceDeal", () => {
                      const b = OBR.g.L("forceDeal", !1);
                      if (b) return b
                  })
              };
              jc = function(a) {
                  return bc(a, "tch", () => OBR.i.Nh ? "1" : "0")
              };
              qc = function(a) {
                  var b = kc;
                  const c = OBR.i.Tc ? "&forceCards=" + OBR.i.Tc : "",
                      d = cc(b),
                      e = dc(b, a),
                      f = ec(b, a),
                      g = a.Hn() ? `&news=${a.Hn()}` : "",
                      k = a.Tt() ? `&newsFrom=${a.Tt()}` : "",
                      l = gc(b),
                      q = OBR.i.Kk ? "&wdr-cosc=1" : "",
                      h = hc(b),
                      m = ic(b);
                  var p = (p = a.ac()) ? `&key=${p}` : `&key=${OBR.i.vI}`;
                  const r = `&adblck=${lc()}`,
                      t = `&abwl=${"true"===OBR.kb.vj()}`,
                      u = `&ab=${+lc()}`,
                      v = `&wl=${+("true"===OBR.kb.vj())}`,
                      w = `&activeTab=${b.eG?"true":!document.hidden}`,
                      A = jc(b);
                  b = b.jc && b.jc.extraParams && "string" === typeof b.jc.extraParams ? `&${b.jc.extraParams}` :
                      "";
                  const D = OBR.i.hj ? `&gpp=${OBR.i.hj}` : "",
                      E = OBR.i.On ? `&gpp_sid=${OBR.i.On}` : "",
                      J = OBR.i.iG ? "&noclip=1" : "";
                  mc = !0;
                  var I = nc;
                  return `&settings=true&recs=true${p}${OBR.i.XH}${c}${A}${d}${e}${f}${g}${k}${OBR.i.dw?`&dicbo=${OBR.i.dw}`:""}${OBR.i.ew?`&clickVersion=${OBR.i.ew}`:""}${oc||""}${r}${t}${u}${v}${l}${q}${h}${m}${w}${b}${D}${E}${J}${a.Mg()?`&psub=${a.Mg()}`:""}${I?`&tpcdl=${I}`:""}${pc||""}`
              };
              rc = function(a, b) {
                  return bc(a, "ppids", () => {
                      const c = [],
                          d = b.bj(),
                          e = !(!d || d.includes("DROP_")),
                          f = window.OB_ppids;
                      try {
                          if (e) {
                              const g = JSON.parse(decodeURIComponent(d));
                              c.push({
                                  attribute: g
                              })
                          }
                          0 < (null == f ? void 0 : f.length) && f.forEach(g => {
                              if (g.name && (g.value || g.id)) {
                                  const k = {};
                                  k[g.name] = g.value || g.id;
                                  c.push(k)
                              }
                          });
                          return 0 === c.length ? "" : btoa(JSON.stringify(c))
                      } catch (g) {
                          return OBR.error({
                              name: "obm-badppid",
                              message: "parse error: " + g.message,
                              stack: g.stack
                          }), ""
                      }
                  }, !!window.OB_ppids || !!b.bj())
              };
              lc = function() {
                  return OBR.i.$m.getValue() || "true" === OBR.kb.uj()
              };
              xc = function(a) {
                  a.xa = OBR.g.Oa(a.j.xd());
                  a.Vd(a.xa);
                  const b = sc(a),
                      c = tc(a.j);
                  return {
                      setHooks: d => {
                          a.ij = d
                      },
                      render: () => a.Ie(),
                      getNode: () => {
                          !a.xa.isConnected && a.ic && (a.xa = a.j.gu());
                          var d = a.xa;
                          return d
                      },
                      setNode: d => {
                          a.j.v().append(d)
                      },
                      setStyles: d => {
                          "string" === typeof d && (a.xa.querySelector(".ob-gnr-css").innerHTML = d)
                      },
                      getSetting: (d, e) => a.j.l(d, e),
                      getMeta: d => a.j.ba(d, null),
                      getData: d => a.j.dc(d, null),
                      getRequest: (d, e) => a.j.o(d, e),
                      getWidgetId: () => a.j.D(),
                      getWidgetIndex: () => a.j.G(),
                      getGnrData: () => b,
                      getCallParam: (d,
                          e) => c[d] || e,
                      sendBiData: (d, e, f) => uc(a, d, e, f),
                      sendData: (d, e, f, g) => vc(a, d, e, f, g),
                      addViewabilityObserver: d => {
                          const e = d && d.getAttribute("data-pos");
                          e && a.ld.includes(e) && a.uc.push(...OBR.Ha.Fc(a.j, [d]))
                      },
                      lazyLoadModule: (d, e, f) => {
                          var g = a.qf;
                          const k = !a.j.ba("gnr").qf;
                          e = e.replace(/\.[^/.]+$/, "");
                          wc(f, g, d, e, k)
                      },
                      moduleName: a.qf
                  }
              };
              Ac = function(a) {
                  a.xa = yc(a.j);
                  zc(a);
                  const b = sc(a),
                      c = tc(a.j);
                  return {
                      getNode: () => a.xa,
                      getSetting: (d, e) => a.j.l(d, e),
                      setStyles: d => {
                          if ("string" === typeof d) {
                              const e = a.xa.querySelector(".ob-gnr-features");
                              e.innerHTML = `${e.innerHTML}${d}`
                          }
                      },
                      getMeta: d => a.j.ba(d, null),
                      getData: d => a.j.dc(d, null),
                      getRequest: (d, e) => a.j.o(d, e),
                      getWidgetId: () => a.j.D(),
                      getWidgetIndex: () => a.j.G(),
                      getGnrData: () => b,
                      getCallParam: (d, e) => c[d] || e,
                      sendBiData: (d, e, f) => uc(a, d, e, f),
                      sendData: (d, e, f, g) => vc(a, d, e, f, g),
                      lazyLoadModule: (d, e, f) => {
                          var g =
                              a.qf;
                          const k = !a.j.ba("gnr").qf;
                          e = e.replace(/\.[^/.]+$/, "");
                          wc(f, g, d, e, k)
                      },
                      moduleName: a.qf,
                      render: a.j.Go() ? () => a.Ie() : null
                  }
              };
              Bc = function(a, b, c, d) {
                  const e = c.getAttribute("data-pos");
                  a.ld = a.ld.filter(f => f !== e);
                  (b = a.uc.includes(d)) && a.uc.splice(b, 1)
              };
              sc = function(a) {
                  const b = {};
                  try {
                      const c = a.j.ba("gnr", null),
                          d = c && c.docs;
                      d && Object.keys(d).forEach(e => b[e] = JSON.parse(d[e]))
                  } catch (c) {
                      OBR.logger.log("could not parse GNR json")
                  }
                  return b
              };
              tc = function(a) {
                  const b = {};
                  try {
                      const c = a.Si(),
                          d = new URLSearchParams(c ? c.split("?")[1] : window.location.search.slice(1));
                      for (const [e, f] of d.entries()) b[e] = f
                  } catch (c) {}
                  return b
              };
              uc = function(a, b, c, d) {
                  const e = a.j.o("lsd", "");
                  b = Object.assign({
                      method: OBR.i.V.Da,
                      sessionId: e
                  }, {
                      method: b
                  });
                  a.dataBI.fire(66E3 + c, d, b)
              };
              vc = function(a, b, c, d, e) {
                  var f = a.j.o("lsd", "");
                  c = Object.assign({
                      method: OBR.i.V.Da,
                      sessionId: f
                  }, {
                      method: c
                  });
                  f = e && e.callback ? e.callback : () => {};
                  a = e && e.enrichWithClientData ? a.dataBI.ei(null, d, c) : d;
                  OBR.ya.send(c.method, b, a, f, !0, null, null, !0)
              };
              zc = function(a) {
                  if (!a.WC) {
                      var b = document.createElement("style");
                      b.setAttribute("class", "ob-gnr-features");
                      a.xa.append(b);
                      a.xa.insertBefore(b, a.xa.children[0]);
                      a.WC = !0
                  }
              };
              Cc = function(a, b) {
                  if (a.ij && a.ij[b] && "function" === typeof a.ij[b]) a.ij[b]()
              };
              Hc = function(a) {
                  a = a.j.D();
                  !OBR._jsc.Dc(Gc) && Gc[a] && (Gc[a].forEach(b => b && b()), delete Gc[a])
              };
              wc = function(a, b, c, d, e) {
                  var f = Ic;
                  b = `${b}/${c}/${d}`;
                  OBR.s.Fw(b, e ? "gnr_feature_internal_lazy" : "gnr_module_internal_lazy");
                  f.cd[b] = {
                      loaded: !1,
                      options: null,
                      Fp: []
                  };
                  f.zf[b] = Jc(a, b);
                  f.zf[b].then(g => g())
              };
              Lc = function(a, b, c) {
                  try {
                      a: {
                          var d = new Kc(a, c);
                          switch (b.version) {
                              case "v1":
                                  var e = xc(d);
                                  break a;
                              case "f_v1":
                                  e = Ac(d);
                                  break a;
                              default:
                                  e = xc(d)
                          }
                      }
                      a.pK("manual" === b.statistics);b.callback(e)
                  }
                  catch (f) {
                      OBR.error({
                          name: "obm-GNR",
                          message: `Module name: ${c}, ${f.message}`,
                          stack: f.stack
                      })
                  }
              };
              Mc = function(a, b) {
                  var c = Ic;
                  try {
                      const d = a.Dn();
                      c.zf[d] ? Gc[a.D()] = b.map(e => () => c.A(a, e, !0)) : b.forEach(e => c.A(a, e, !0))
                  } catch (d) {
                      OBR.error({
                          name: "obm-GNR",
                          message: "Error in gnr features init",
                          stack: d.stack
                      })
                  }
              };
              Nc = function(a, b, c) {
                  a.cd[b].options = c;
                  a.cd[b].loaded = !0;
                  a.cd[b].Fp.forEach(d => {
                      Lc(d, c, b)
                  })
              };
              Oc = function(a, b) {
                  var c = Ic;
                  const d = OBR.s.St(a);
                  d ? (OBR.s.S(d), c.zf[a].then(() => Nc(c, a, b))) : OBR.error({
                      name: "obm-GNR",
                      message: `Module name: ${a} was not found`,
                      stack: "None"
                  })
              };
              Qc = function(a) {
                  window.addEventListener("pagehide", () => Pc(a, a.Zw.takeRecords()))
              };
              Rc = function(a) {
                  a.Zw = new ReportingObserver(b => {
                      Pc(a, b)
                  }, {
                      types: ["intervention"],
                      buffered: !1
                  });
                  a.Zw.observe()
              };
              Sc = function(a, b) {
                  a.zj && a.ro && (a.xg[0] |= 1 << b, OBR.g.Fa(OBR._jsc.C.Yq, a.xg.join(",")))
              };
              Pc = function(a, b) {
                  return OBR._jsc.z(function*() {
                      const c = b.find(({
                          type: e = "",
                          body: f = {}
                      }) => "intervention" === e && "HeavyAdIntervention" === f.id);
                      if (c) {
                          Sc(a, 2);
                          var d = `${OBR.i.fl}/WidgetErrorMonitor/api/report`;
                          if (OBR.i.Ok && a.eh) {
                              const {
                                  rH: e,
                                  eF: f
                              } = a.getError(c);
                              a.Ee && a.Ee.B.ez.fire(f, {
                                  method: OBR.i.V.Lc
                              });
                              OBR.ya.send(OBR.i.V.Lc, d, e)
                          }
                      }
                  })
              };
              Tc = function(a) {
                  return a.zj ? a.xg ? a.xg : OBR.g.U(OBR._jsc.C.Yq, "").split(",").filter(b => !!b).slice(0, 50) : []
              };
              Uc = function(a) {
                  a.F = a.F || OBR.F.map(b => ({
                      name: b.D(),
                      id: b.o("wnid", b.D()),
                      vid: b.o("vid", 0)
                  }));
                  return a.F
              };
              Vc = function(a, b) {
                  a.eh && a.thresholds && a.thresholds.forEach(c => {
                      !c.ud && b >= c.size && (c.ud = !0, Sc(a, c.LD), c.event.fire({
                          log: Tc(a).join(","),
                          widgets: Uc(a)
                      }, {
                          method: OBR.i.V.Lc
                      }))
                  })
              };
              Xc = function(a) {
                  const b = [a.Ee.B.Uz, a.Ee.B.Vz, a.Ee.B.Wz, a.Ee.B.Xz],
                      c = [4, 5, 6, 7];
                  return Wc.map((d, e) => ({
                      xI: d,
                      size: 4E6 * d,
                      event: b[e],
                      LD: c[e],
                      ud: !1
                  }))
              };
              Yc = function(a) {
                  a.xg = [0, ...Tc(a)];
                  Sc(a, 0);
                  document.addEventListener("click", () => {
                      Sc(a, 3)
                  }, {
                      once: !0
                  })
              };
              Zc = function(a) {
                  return /network usage/i.test(a) ? "NETWORK-USAGE" : /CPU usage/i.test(a) ? "CPU-USAGE" : a
              };
              $c = function(a) {
                  a.wm = new PerformanceObserver(b => {
                      for (const c of b.getEntries()) a.Fq += c.value
                  });
                  a.wm.observe({
                      type: "layout-shift",
                      buffered: !0
                  })
              };
              ad = function(a, b) {
                  var c = b.v().parentNode;
                  a = a.bd[b.D()].height;
                  c = c.getBoundingClientRect();
                  return -100 < (window.innerHeight || document.documentElement.clientHeight) - (c.bottom - (c.height - a))
              };
              cd = function(a) {
                  var b = OBR._jsc.bd;
                  b.Zg || ($c(b), b.jo(), b.Zg = !0);
                  b.bd[a.D()] || (b.bd[a.D()] = {
                      j: a,
                      aa: new OBR.dataBI(a, d => d.eA)
                  });
                  const c = b.bd[a.D()];
                  c.height = a.getBoundingClientRect().height;
                  c.Yu = ad(b, a);
                  a.D() !== a.o("widgetJsId", a.D()) && (c.ZI = a.o("widgetJsId", a.D()));
                  c.Yu && !b.aq && ("undefined" === typeof c.Tb && (c.Tb = 0), b.aq = !0, b.kh = [])
              };
              ed = function(a) {
                  var b = dd;
                  if (!b.QG || !b.fc(a)) return !1;
                  if (b.ex) return b.Jo;
                  a = 1 * OBR.g.U("debug-webvitals-monitor-sample", 100);
                  b.Jo = 1 > Math.floor(Math.random() * a);
                  b.ex = !0;
                  return b.Jo
              };
              fd = function(a) {
                  const b = OBR._jsc.B("widgetLazyLoadMargin") ? OBR.settings.widgetLazyLoadMargin : 500;
                  return a && a.l("widgetLazyLoadMargin", b) || b
              };
              gd = function(a, b, c) {
                  b = new OBR.IntersectionObserver({
                      callback: d => {
                          d.CK();
                          OBR.wa.VG(d) ? OBR.wa.fire(d) : OBR.wa.register(d)
                      },
                      callbackParams: [c],
                      element: b,
                      rootMargin: `${a.Uo}px`,
                      threshold: [0],
                      unobserve: !0
                  });
                  b.observe();
                  a.Vo.push(b)
              };
              id = function(a) {
                  var b = hd;
                  const c = a.v(),
                      d = c ? OBR.g.H(c).querySelector(".ob_what.ob-branding-lazy-load") : null;
                  d && (a = {
                      callback: () => d.classList.remove("ob-branding-lazy-load"),
                      callbackParams: [a],
                      element: c,
                      rootMargin: `${fd(a)}px`,
                      threshold: [0],
                      unobserve: !0
                  }, a = new OBR.IntersectionObserver(a), a.observe(), b.Vo.push(a))
              };
              jd = function(a) {
                  try {
                      if (!a) return null;
                      const b = a.split("/").pop().split(".")[0],
                          c = decodeURIComponent(window.atob(b));
                      return JSON.parse(c)
                  } catch (b) {
                      return null
                  }
              };
              kd = function(a) {
                  const b = {
                      onShow: () => {
                          a.v().querySelector(".ob-onyx-sponsored-container").classList.remove("ob-sponsored-hide")
                      }
                  };
                  OBR.controller.zh(a, c => {
                      window.OB_VIDEO.init(c.currentWidget, c.beforeLoadTime, b)
                  })
              };
              md = function(a, b) {
                  ld(a, b);
                  a.ud[`${a.td}-${b}`]++
              };
              ld = function(a, b) {
                  a.ud[`${a.td}-${b}`] || (a.ud[`${a.td}-${b}`] = 0)
              };
              nd = function(a) {
                  return OBR.g.oa(a)
              };
              pd = function({
                  qe: a,
                  ra: b,
                  ja: c,
                  cardIdx: d,
                  fatherCardIdx: e,
                  bM: f,
                  rj: g,
                  sj: k,
                  ii: l,
                  ze: q,
                  GC: h,
                  Wb: m,
                  os: p,
                  gd: r,
                  SH: t,
                  dh: u
              }) {
                  const v = [];
                  k && v.push(`data-ob-installation-type=${k}`);
                  q && v.push(`data-ob-user-id=${q}`);
                  l && v.push(`data-ob-app-ver=${l}`);
                  g && v.push(`data-ob-installation-key=${g}`);
                  h && v.push(`data-click-url=${h}`);
                  t && v.push(`data-on-news=${t}`);
                  r && v.push(`data-pub-imp-id=${r}`);
                  u && v.push(`data-ob-lazy-render=${u}`);
                  g = f && f.includes("ob-gnr-layout");
                  return od(`<div class="OUTBRAIN" data-src="${a}" data-widget-id="${b}" data-card-idx="${d}" data-feed-father-idx="${e}"
                          data-ob-mark="true" data-browser="${m}" data-os="${p}" data-dynload data-idx="${c}" id="outbrain_widget_${c}" ${v.join(" ")}>${g?"":f}</div>`)
              };
              qd = function(a) {
                  OBR.logger.log(`[WARNING] ${a}`)
              };
              rd = function(a) {
                  OBR.logger.log("[DFP Data] glade DFP ad requested");
                  a.pd({
                      event: a.dataBI.B.Nz,
                      data: a.ti
                  })
              };
              sd = function(a) {
                  OBR.logger.log("[DFP Data] glade DFP ad served");
                  a.pd({
                      event: a.dataBI.B.Pz,
                      data: a.ti
                  })
              };
              td = function(a) {
                  OBR.logger.log("[DFP Data] glade DFP got empty ad");
                  a.pd({
                      event: a.dataBI.B.EMPTY,
                      data: a.ti
                  })
              };
              ud = function(a) {
                  OBR.logger.log("[DFP Data] glade DFP got error");
                  a.pd({
                      event: a.dataBI.B.Wy,
                      data: a.ti
                  })
              };
              vd = function(a) {
                  var b = a.adInfo.cardIdx;
                  const c = a.adInfo.fatherCardIdx,
                      d = a.adInfo.adPath,
                      e = a.adInfo.adId,
                      f = a.adInfo.adWidth,
                      g = a.adInfo.adHeight,
                      k = a.adInfo.adStyle;
                  OBR.gptAds = OBR.gptAds || [];
                  const l = G.createElement("script", null, null, {
                          src: "//securepubads.g.doubleclick.net/tag/js/gpt.js"
                      }),
                      q = G.createElement("script", null, null, {
                          type: "text/javascript"
                      });
                  q.appendChild(document.createTextNode(`
      window.googletag = window.googletag || {cmd: []};
      window.googletag.cmd.push(function () {
          var slot = window.googletag.defineSlot('${d}/${f}x${g}', [${f}, ${g}], '${e}');
          OBR.gptAds['${e}'] = slot;
          if(slot) {slot.addService(googletag.pubads())}
          window.googletag.pubads().enableSingleRequest();
          window.googletag.pubads().collapseEmptyDivs();
          window.googletag.pubads().setTargeting('publisher_id', []).setTargeting('variant_id', []).setTargeting('feed_id', []);
          window.googletag.pubads().addEventListener('slotRenderEnded', (event) => {
            var customEvent = new CustomEvent('${"onOBGptLoadedEvent"}', {detail: event});
            document.dispatchEvent(customEvent);
          })
          window.googletag.enableServices();
      });
  `));
                  try {
                      const h = G.createElement("div", e, `display:none;${k}`, {
                          "class": a.className,
                          "data-card-idx": b,
                          "data-feed-father-idx": c
                      });
                      b = `window.googletag.cmd.push(function() { 
      window.googletag.display('${e}');
      window.googletag.pubads().refresh([OBR.gptAds['${e}']]);
    });`;
                      document.head.appendChild(l);
                      document.head.appendChild(q);
                      const m = G.createElement("script", null, null, {
                          type: "text/javascript"
                      });
                      m.appendChild(document.createTextNode(b));
                      h.appendChild(m);
                      rd(a.sd);
                      document.addEventListener("onOBGptLoadedEvent", p => {
                          (p.detail || {
                              empty: !0
                          }).empty ? (td(a.sd), a.logger.error("createGPT failed - got an empty ad (event.detail.empty === true); check the ad settings"), h.style.display = "none") : (h.style = `display:block; ${k}`, sd(a.sd))
                      });
                      return h
                  } catch (h) {
                      a.logger.error(h),
                          ud(a.sd)
                  }
              };
              wd = function(a) {
                  var b = a.adInfo.cardIdx;
                  const c = a.adInfo.fatherCardIdx,
                      d = a.adInfo.adPath,
                      e = a.adInfo.adData,
                      f = a.adInfo.adWidth,
                      g = a.adInfo.adHeight,
                      k = a.adInfo.adContainerWidth,
                      l = a.adInfo.adContainerHeight;
                  try {
                      const q = {
                          "class": a.className,
                          "data-card-idx": b,
                          "data-feed-father-idx": c
                      };
                      (b = k || l ? (k ? `width:${k}px;` : "") + (l ? `height:${l}px;` : "") + "display:none;" : null) && (q.style = b);
                      const h = G.createElement("div", null, null, q),
                          m = G.createElement("script", null, null, {
                              src: "//securepubads.g.doubleclick.net/static/glade.js",
                              async: "true"
                          }),
                          p = G.createElement("div", null, "display: none;", {
                              "data-glade": "",
                              "data-ad-unit-path": d,
                              "data-json": e || "",
                              width: f,
                              height: g
                          });
                      h.appendChild(p);
                      h.appendChild(m);
                      rd(a.sd);
                      p.addEventListener("gladeAdFetched", r => {
                          (r.detail || {
                              empty: !0
                          }).empty ? (td(a.sd), a.logger.error("createDFPAd failed - got an empty ad (event.detail.empty === true); check the ad settings"), p.style.display = "none", h.style.display = "none") : (p.style.display = "block", h.style.display = "block", sd(a.sd))
                      });
                      return h
                  } catch (q) {
                      a.logger.error(q), ud(a.sd)
                  }
              };
              xd = function() {
                  return od('<div class="ob-no-joker-card"></div>')
              };
              yd = function(a) {
                  var b = window.addEventListener ? "addEventListener" : "attachEvent";
                  (0, window[b])("attachEvent" === b ? "onmessage" : "message", function(c) {
                      var d = c.message ? "message" : "data",
                          e = c[d].message || c[d];
                      "ob-pb-ad-loaded" === e ? a.style.display = "block" : "ob-pb-ad-after-render" === e && (a.style.height = `${c[d].data}px`)
                  }, !1)
              };
              Ad = function(a, b, c) {
                  try {
                      const d = "string" === typeof a ? JSON.parse(a) : a,
                          e = zd[d.type](d, b, c);
                      e.jokerProps = d;
                      return e
                  } catch (d) {
                      return null
                  }
              };
              Ed = function(a, b) {
                  var c = K.Ja();
                  const {
                      ta: d,
                      cardIdx: e
                  } = a.$(), f = G.na(b);
                  if (f) switch (d) {
                      case "widget":
                          const {
                              Wb: g, os: k
                          } = G.T(), {
                              ra: l,
                              ja: q,
                              html: h,
                              dh: m
                          } = a.$();
                          return pd({
                              qe: c,
                              ra: l,
                              fatherCardIdx: b,
                              ja: q,
                              cardIdx: e,
                              dh: m,
                              bM: h,
                              rj: f.ac(),
                              sj: f.bc(),
                              ii: f.$b(),
                              ze: f.ob(),
                              GC: f.yc(),
                              SH: f.Hn(),
                              Wb: g,
                              os: k,
                              gd: f.yd()
                          });
                      case "joker":
                          return a = a.$().Oj, Ad(a, e, b);
                      case "adJoker":
                          const {
                              adType: p, adId: r, adWidth: t, adHeight: u, adPath: v, adData: w, adClient: A, adSlot: D, adContainerWidth: E, adContainerHeight: J, adStyle: I
                          } = a.$();
                          return Bd.create({
                              adInfo: {
                                  cardIdx: e,
                                  fatherCardIdx: b,
                                  adType: p,
                                  adId: r,
                                  adWidth: t,
                                  adHeight: u,
                                  adPath: v,
                                  adData: w,
                                  adClient: A,
                                  adSlot: D,
                                  adContainerWidth: E,
                                  adContainerHeight: J,
                                  adStyle: I
                              }
                          });
                      case "placeholderJoker":
                          return {
                              Oc: a
                          } = a.$(), Cd.create({
                              cardIdx: e,
                              fatherCardIdx: b,
                              UM: a
                          });
                      case "passback":
                          return {
                              wI: a
                          } = a.$(), Dd.create(a, b)
                  }
              };
              Gd = function(a) {
                  const b = Fd.find(c => c.feedIdx === +a);
                  return !(!b || !b.isSkeleton)
              };
              Jd = function(a, b) {
                  var c = vb();
                  c = null !== c ? c : {
                      fb: {},
                      wl: []
                  };
                  const d = {
                      n: a.widgetName,
                      r: 0 < a.height ? a.height / a.width : 0,
                      fx: +b
                  };
                  a = c.wl.filter(e => e.n === d.n && 0 !== e.r).map(e => {
                      const f = e.m ? e.m + 1 : 1;
                      var g = e.r,
                          k = d.r;
                      return {
                          n: e.n,
                          m: f,
                          r: f ? 1 === f ? (g + k) / 2 : ((f - 1) * g + k) / f : k,
                          fx: +b
                      }
                  })[0];
                  c.fb.r = Hd(c, d);
                  a = Id(c, a, d);
                  try {
                      OBR.g.Fa(OBR._jsc.C.Ge, JSON.stringify(a))
                  } catch (e) {
                      OBR.logger.log("failed to set Local Storage for skeleton")
                  }
              };
              Hd = function(a, b) {
                  return a.wl && a.wl.length ? a.wl.reduce((c, d) => c + d.r, 0) / a.wl.length : b.r
              };
              Id = function(a, b, c) {
                  a = Object.assign({}, a);
                  if (b && b.n) return a.wl = a.wl.map(d => d.n === b.n ? b : d), a;
                  c && c.r && a.wl.push(c);
                  return a
              };
              L = function(a) {
                  return Math.min(...Object.keys(a.K))
              };
              Kd = function(a, b) {
                  var c = K;
                  c.K[a].cn = [];
                  try {
                      c.K[a].cn = JSON.parse(b).filter(d => "widget" === d.type)
                  } catch (d) {}
              };
              Ld = function(a) {
                  var b = K;
                  const c = b.K[a].ss,
                      d = b.K[a].cn.splice(0, b.K[a].Gg);
                  b.K[a].cn.push(...d.filter(e => !c.find(f => f.id === e.id)));
                  return d
              };
              Md = function(a) {
                  K.To = a;
                  OBR.bb.Ki = a
              };
              Nd = function(a, b = L(a)) {
                  return a.K[b].st
              };
              Od = function(a, b = L(a)) {
                  a.K[b].st = !0
              };
              Pd = function(a, b, {
                  cardIdx: c
              }) {
                  var d = K;
                  const {
                      ug: e
                  } = d.K[b];
                  d.K[b] = Object.assign(d.K[b], {
                      ad: c ? c : 0,
                      ce: a,
                      ug: c ? [...e, c] : e
                  })
              };
              Qd = function(a = 0, b) {
                  if (a = K.K[a]) a.pw = b
              };
              Rd = function(a) {
                  var b = K;
                  if (!isNaN(a)) return b.K[a].ad
              };
              Sd = function(a, b) {
                  ({
                      ug: a
                  } = K.K[a]);
                  return -1 < a.indexOf(b)
              };
              Td = function(a, b) {
                  var c = K;
                  const {
                      ug: d
                  } = c.K[a];
                  c.K[a].ug = d.filter(e => e != b)
              };
              Ud = function(a, b = L(a)) {
                  return a.K[b].rt
              };
              Vd = function(a, b, c = L(a)) {
                  a.K[c].rt = b
              };
              Wd = function(a, b, c, d = L(a)) {
                  a.K[d].features[b] = c
              };
              Xd = function(a, b, c = L(a)) {
                  return a.K[c].features[b]
              };
              Yd = function(a, b, c = L(a)) {
                  a.K[c].it = b
              };
              Zd = function(a, b = L(a)) {
                  return a.K[b].it
              };
              $d = function(a, b, c = L(a)) {
                  a.K[c].sf = b
              };
              ae = function(a, b = L(a)) {
                  return a.K[b].sf
              };
              be = function(a, b = L(a)) {
                  a.K[b].Jj = !0
              };
              ce = function(a, b = L(a), c, d) {
                  !c || OBR.ga.ui || OBR.ga.mb || (a.K[b].Fm = c, "1" !== d && 1 !== d) || (a.K[b].Es = 1)
              };
              de = function(a, b = L(a)) {
                  return a.K[b].Fm ? {
                      consentString: a.K[b].Fm,
                      consentVersion: a.K[b].Es
                  } : null
              };
              ee = function(a, b) {
                  K.K[a].aa.zo = b
              };
              fe = function(a, b) {
                  if (b) {
                      const c = a.Ef;
                      c.endsWith("&") || c.endsWith("?") || b.startsWith("&") ? a.Ef += b : a.Ef += `&${b}`
                  }
              };
              M = function(a, b, c) {
                  fe(a, b && "undefined" !== typeof c && null != c && "" !== c ? `${b}=${c}` : "")
              };
              ge = function(a, b, c) {
                  try {
                      const d = (new URLSearchParams(window.location.search)).get(b);
                      d && (c = d)
                  } catch (d) {}
                  c && M(a, b, c);
                  return a
              };
              qe = function(a = 0, b = 0) {
                  var c = OBR.F.length - 1;
                  if (!K.K[a]) return Promise.resolve();
                  const d = G.na(a);
                  a = new he(a, b, c);
                  if (a.j.Eb()) {
                      c = a.j.zc();
                      var e = a.j.xc();
                      const m = a.j.Ac(),
                          p = a.j.Lg();
                      c && M(a, "contentUrl", nd(c));
                      e && M(a, "bundleUrl", nd(e));
                      m && M(a, "portalUrl", nd(m));
                      m && p && M(a, "lang", p)
                  } else a.qe ? M(a, "url", nd(a.qe)) : ie.error("could not get permalink url");
                  c = a.j.D();
                  M(a, "widgetJSId", a.P.T().Nb && a.P.T().Nb[c] ? a.P.T().Nb[c] : c);
                  a.P.T().Nb && a.P.T().Nb[c] && M(a, "contextRule", !1);
                  M(a, "version", a.P.T().ver);
                  M(a, "apv",
                      a.P.T().lg);
                  M(a, "sig", a.P.T().Rq);
                  M(a, "format", a.j.Qt());
                  M(a, "rand", OBR.g.rand());
                  (c = a.P.U(OBR._jsc.C.ai)) && M(a, "lsd", nd(c));
                  (c = a.P.U(OBR._jsc.C.Ql)) && M(a, "lsdt", nd(c));
                  a.j.ge() && M(a, "em", "1");
                  c = a.P.T().uh;
                  null !== c && M(a, "pubInState", c);
                  (c = a.P.T().gk) && M(a, "osLang", c);
                  a = ge(a, "obAbtest", a.P.L("obAbtest", ""));
                  (c = !0 === a.P.T().Qk || !0 === a.j.gj() || null !== a.P.T().Nb) && M(a, "testMode", c);
                  M(a, "videoId", a.j.Ln());
                  OBR.i.Ke && je() && M(a, "opvid", je());
                  c = a.j.pb() || a.P.T().Zm || "";
                  M(a, "extid", encodeURIComponent(c));
                  const [f, g] = ke(a.j);
                  M(a, f, g);
                  (!0 === a.j.ev() || a.P.T().vp) && M(a, "rtbEnabled", !0);
                  c = a.j.fj();
                  M(a, "seid", encodeURIComponent(c));
                  a.P.T().Ps.includes("true") && M(a, "descriptionDisplayEnabled", !0);
                  a.P.T().hv.includes("true") && M(a, "isRtbDescriptionEnabled", !0);
                  M(a, "va", !0 === a.j.tv() ? !0 : null);
                  M(a, "et", !0 === a.j.Lt() ? !0 : null);
                  (c = a.P.T().Jt()) && M(a, "contxtKV", nd(c));
                  M(a, "cnsnt", OBR.ga.ui);
                  M(a, "cmpStat", OBR.ga.Cb ? 1 : 0);
                  M(a, "cnsntv2", OBR.ga.mb);
                  (c = de(K, a.Bb)) && (1 === c.consentVersion ? M(a, "cnsnt", c.consentString) : M(a,
                      "cnsntv2", c.consentString));
                  M(a, "ccpa", a.j.tn() || OBR.ga.Xb);
                  M(a, "ccpaStat", OBR.ga.uo ? 1 : 0);
                  M(a, "num", null !== a.j.$i() ? a.j.$i() : null);
                  a.j.Eb() || (c = a.j.cu(), null !== c && "string" === typeof c && 0 < c.length ? M(a, "srcUrl", nd(c)) : 0 < a.P.T().Ik.length && M(a, "srcUrl", a.P.T().Ik));
                  c = a.P.T().bq;
                  M(a, "scrW", c.w);
                  M(a, "scrH", c.h);
                  c = a.P.T();
                  c = a.j.Eb() ? c.Pp : c.Dq;
                  fe(a, "" !== c ? "t=" + c : "t");
                  (c = a.P.T().bn) && M(a, "xp", nd(c));
                  c = OBR.ca.Ga;
                  M(a, "winW", c.width);
                  M(a, "winH", c.height);
                  (c = "https://" === a.P.T().ma) && M(a, "secured", c);
                  M(a, "feedIdx",
                      a.Bb);
                  M(a, "lastIdx", a.tH);
                  M(a, "lastCardIdx", a.ad);
                  a.P.T().Is.includes("true") && M(a, "crDraft", !0);
                  (c = a.P.wd(a.Bb)) && M(a, "fAB", c);
                  (c = a.P.Bn(a.Bb)) && M(a, "layeredTestInfo", c);
                  OBR.i.Iu && M(a, "wrDebug", "true");
                  M(a, "app_ver", a.j.$b());
                  M(a, "api_user_id", a.j.ob());
                  M(a, "installationType", a.j.bc());
                  a.P.T().Xc && M(a, "iframe", "true");
                  (c = a.P.T().Gd) && M(a, "lscntx", c);
                  a.P.L("obFakeRtb", !1) && (M(a, "fakeRec", "RTB-CriteoUS"), M(a, "fakeRecSize", "4"));
                  c = OBR.fraudDetection;
                  !0 !== a.P.T().Qk && !0 !== a.j.gj() && ((e = c.Yd || c.fq) ? M(a,
                      "clss", e) : c.Gf && (M(a, "clid", c.Gf), M(a, "fdu", c.Gi)));
                  c = a.P.T().rq;
                  null !== c && M(a, "skipContextValidation", c);
                  c = a.P.T().pn;
                  null !== c && M(a, "forceContextValidation", c);
                  (c = a.P.T().Fk) && M(a, "skipRecsFilters", `${c}`);
                  if (c = a.P.T().Pi) M(a, "forceAd", c), M(a, "settingLevel", "SOURCE");
                  (c = a.P.T().qn) && M(a, "forceOcAd", c);
                  M(a, "dpr", a.P.T().Rm || 0);
                  c = a.j.Jg();
                  M(a, "cw", c);
                  ({
                      Wj: c
                  } = a.P.T());
                  c || M(a, "wdr-natlaz", !1);
                  a.P.T().sq && M(a, "wdr-ads-data", "true");
                  (c = le()) && fe(a, c);
                  a = ge(a, "forceDemand", a.P.T().vt);
                  (c = a.P.T().Uk || null) &&
                  M(a, "trace_name", c);
                  if (a.P.T.eb && (c = a.j.vd())) try {
                      var k = (new window.URLSearchParams(c)).get("appBridge");
                      M(a, "appBridge", k)
                  } catch (m) {}({
                      up: k
                  } = a.P.T());
                  k && M(a, "ob_internal_id", k);
                  M(a, "iabCat", a.j.Yi());
                  (OBR.i.Ju || OBR.i.Ku) && M(a, "lsl", "1");
                  ({
                      kw: k
                  } = a.P.T());
                  k && M(a, "wdr-lr", "1");
                  k = OBR.g.Yk(a.j.yd() || OBR.i.gd);
                  M(a, "pubImpId", encodeURIComponent(k));
                  k = a.j.vd();
                  a.P.T().eb && k && fe(a, k);
                  (k = a.j.Qg()) && M(a, "rw", k);
                  k = a.gi();
                  fe(k, qc(k.j));
                  M(k, "chs", OBR.i.vn(k.j));
                  if (a = k.j.aj()) "number" === typeof a.x && M(k, "px", a.x),
                      "number" === typeof a.y && M(k, "py", a.height + a.y);
                  a = k.P.T().eb;
                  if (!k.P.T().Ke && !a && (a = k.j.v()) && a.parentElement && (a = a.parentElement.querySelector(".ob_sf_loader, .ob-chunks-loader"))) {
                      a = a.getBoundingClientRect();
                      b: {
                          c = null;
                          try {
                              if (0 <= a.top && 0 <= a.left && a.bottom <= (window.innerHeight || document.documentElement.clientHeight) && a.right <= (window.innerWidth || document.documentElement.clientWidth)) {
                                  var l = 0;
                                  break b
                              }
                              c = a.top > document.documentElement.clientHeight ? Math.floor(a.top - document.documentElement.clientHeight) :
                                  Math.floor(a.height + a.top - document.documentElement.scrollTop);
                              if (isNaN(c)) throw Error(`Invalid distance. Box = ${JSON.stringify(a)}`);
                          } catch (m) {
                              c = null, OBR.error({
                                  name: "obm-vpd",
                                  message: m.message,
                                  stack: m.stack
                              })
                          }
                          l = c
                      }
                      OBR._jsc.me(l) && M(k, "vpd", l)
                  }
                  l = k.fi();
                  OBR.i.fk && M(l, "ogn", OBR.i.fk);
                  (k = l.P.T().Xp) && M(l, "ref", k);
                  l = l.Ef;
                  let q;
                  (null == (q = l) ? void 0 : q.length) >= OBR.i.Tj && (l = ne(l));
                  let h;
                  (null == (h = l) ? void 0 : h.length) >= OBR.i.Tj && oe(l);
                  b = pe(d, l, b);
                  d.Bh(l);
                  return b
              };
              re = function(a) {
                  return Array(Math.min(a.Cm, 3)).fill(Math.round(100 * a.je.fb.r) / 100)
              };
              se = function(a, b) {
                  return a.je ? a.je.wl.filter(c => 0 !== +c.r).map(c => {
                      if (b.find(d => d.id === c.n)) return Math.min(Math.round(100 * +c.r) / 100, 1)
                  }).filter(c => c) : null
              };
              te = function(a) {
                  if (a.Cm && a.je && Array.isArray(a.je.wl) && a.je.wl.length && a.je.fb.r) return "local-storage";
                  const b = a.oe.D();
                  return a.Yb && Array.isArray(a.Yb) && a.Yb.some(c => c.includes(b)) ? "cheetah" : "none"
              };
              ue = function(a) {
                  const b = K.K[a.Bb].Gg,
                      c = (e, f) => e.length < b ? (e.push(...f), c(e, [...f])) : e.splice(0, b);
                  if ("2" === K.Ze(a.Bb)) return re(a);
                  var d = Ld(a.Bb);
                  if (!d.length) return null;
                  (d = se(a, d)) && d.length && d.length < b && (d = c(d, [...d]));
                  return d ? d : re(a)
              };
              ve = function(a) {
                  a.oe.Kq() || wb(a.Bb);
                  switch (te(a)) {
                      case "local-storage":
                          return ue(a);
                      case "cheetah":
                          Db.remove(a.oe, !0);
                          var b = zb(Db, a.oe.D());
                          b ? ([, b] = b, a = a.FG ? Array(1).fill(b) : Array(a.Cm).fill(b)) : a = null;
                          return a;
                      case "none":
                          return null;
                      default:
                          return null
                  }
              };
              xe = function(a, {
                  oe: b,
                  jt: c = !1
              }) {
                  const d = b.G();
                  if (!K.K[d])
                      if (b.v()) {
                          var e = b.v();
                          a.Ed = 1 === e.children.length && 0 === e.children[0].children.length;
                          K.K[d] = {
                              rt: !0,
                              st: !1,
                              ad: 0,
                              ug: [0],
                              features: {
                                  jt: !1,
                                  bN: !1
                              },
                              it: null,
                              Hp: null,
                              sf: !1,
                              Jj: !1,
                              pw: null,
                              Fm: null,
                              Es: 2,
                              Gg: null,
                              Zr: !0,
                              Gj: !1,
                              aa: {
                                  zo: !1
                              },
                              IN: 0,
                              Gp: []
                          };
                          e = [];
                          const f = b.l("feedWrapperMargins", ""),
                              g = b.Jg();
                          f && e.push(`margin:${f}`);
                          b.l("hideHeaders", !1) && G.ia(".ob-smartfeed-wrapper .OUTBRAIN:not(:first-child):not(.ob-parent-feed) .ob-widget-header {display:none;}");
                          0 ===
                              g && e.push("width:100%");
                          G.ia(".ob-smartfeed-wrapper .OUTBRAIN:not(:first-child):not(.ob-parent-feed) .ob_what {display:none;} " + `.ob-smartfeed-joker {margin-bottom: 20px; padding-bottom: 4px; padding-top: 0;} ${e.length?`.ob-smartfeed-wrapper.feedIdx-${b.G()} {${e.join(";")}}`:""}`);
                          if (e = b.yc()) Yd(K, e, b.G()), G.di(b);
                          e = b.l("recMode");
                          Wd(K, "feedManualChunkFetch", c, d);
                          Wd(K, "feedLayout", "odb_dynamic_feed" === e, d);
                          Xd(K, "feedManualChunkFetch", d) ? (a.Dh(b), OBR.i.eb && a.Ei(d)) : (!0 === b.l("lazyLoadFirstCycle",
                              !1) ? (c = b.v(), e = b.l("lazyLoadFirstCycleMargin", 250) + "px", (new OBR.IntersectionObserver({
                              callback: a.Js.bind(a),
                              callbackParams: [b],
                              element: c,
                              rootMargin: e,
                              threshold: [0],
                              unobserve: !0
                          })).observe()) : a.Js(b), we.Jf(b, d))
                      } else qd(`Container for widgetId=${b.D()} doesn't exist on the DOM. Feed cannot be created.`)
              };
              ye = function(a, b) {
                  var c = b.l("feedLoadChunkSize", 0);
                  K.K[a].Gg = c ? 1 * c : null;
                  Kd(a, b.l("feedContent", "[]"));
                  c = b.l("feedCardsRunningOnce", "[]");
                  var d = K;
                  d.K[a].ss = [];
                  try {
                      d.K[a].ss = JSON.parse(c)
                  } catch (e) {}
                  K.hq(a, b.o("feedVersion", "1"));
                  c = b.l("intersectionObserverTriggerMargin", "0");
                  K.K[a].VF = c;
                  K.Ck(b.Ja());
                  ce(K, a, b.Ui(), b.xn());
                  b = b.l("pinnedJokersCardProperties", "[]");
                  c = K;
                  try {
                      c.K[a].Gp = JSON.parse(b)
                  } catch (e) {
                      c.K[a].Gp = []
                  }
              };
              Fe = function(a, b, c, d = null) {
                  const {
                      ad: e,
                      ce: f
                  } = K.K[b] || {};
                  var g = G.na(b);
                  try {
                      var k = OBR.i.js && OBR.i.js.feedIdx === parseInt(b)
                  } catch (l) {
                      k = !1
                  }
                  k ? ze(g, b) : (k = 0 === c && g.$e(), !1 === f ? (qd("fetchNextStream was triggered with hasMore=false. aborting..."), Ae(d, "grey")) : Sd(b, c) ? (OBR.controller.vB(b), Ae(d, "green"), d = g.D(), Td(b, c), c = a.Ot(b, d), d = Be(b), Ce(a, d, c), k ? De(a, g.$e(), b) : (g = K.To.then(() => qe(b, e)), Md(g), g.then(a.vf.bind(a)).catch(l => Ee(a, l, b)))) : (ie.log("fetchNextStream was triggered but chunk is not observered. aborting..."),
                      Ae(d, "red")))
              };
              ze = function(a, b) {
                  const c = K.K[b].aa;
                  c.zo || ((new OBR.dataBI(a, d => d.cr)).B.Hy.fire(), ee(b, Object.assign(c, {
                      zo: !0
                  })))
              };
              Ae = function(a, b) {
                  OBR.i.Yj && a && (a.style.outline = `3px dashed ${b}`)
              };
              Be = function(a) {
                  const b = Xd(K, "feedLayout", a);
                  return Ge(a, b)
              };
              Ce = function(a, b, c) {
                  b && b.appendChild(c);
                  a.Aj = !0
              };
              De = function(a, b, c) {
                  const {
                      ad: d
                  } = K.K[c] || {};
                  b.yA = {
                      da: G.na(c).D(),
                      ja: d,
                      timestamp: parseInt(performance.now())
                  };
                  a.vf(b)
              };
              Ee = function(a, b, c) {
                  OBR.error(b);
                  ie.error(`failed on Multivac response on feedIdx:${c}. Reason: ${b.toString()}`);
                  He();
                  a.Aj = !1;
                  Md(Promise.resolve())
              };
              Ie = function(a, b) {
                  const {
                      ad: c,
                      ce: d,
                      Gj: e
                  } = K.K[b] || {};
                  if (!e && !1 !== d) {
                      var f = G.na(b).$e();
                      Td(b, -1);
                      f && 0 === c ? De(a, f, b) : (Ce(a, Be(b), ub()), f = K.To.then(() => qe(b, c)), Md(f), K.K[b].Gj = !0, f.then(g => {
                          K.K[b].Gj = !1;
                          a.vf(g)
                      }).catch(g => {
                          K.K[b].Gj = !1;
                          Ee(a, g, b)
                      }))
                  }
              };
              Je = function(a, b) {
                  return b && b.Qo() && b.Nj() && a.Mu
              };
              Ke = function(a, b, c, d) {
                  return Je(a, b) ? (a.Mu = !1, c.forEach(e => {
                      const {
                          ja: f
                      } = e.$();
                      e.Y = () => b;
                      OBR.F[f] = e
                  }), OBR.controller.YD().add(`widgetLazyRender_${b.G()}`, () => {
                      a.vf(d, !0)
                  }), !0) : !1
              };
              Le = function(a, b, c, d) {
                  d || (b = b[b.length - 1], OBR.od.fire(`onFeedEnd_${c}`, [b, OBR.g.H(b).querySelector(".ob-dynamic-rec-container:last-child")], !0, a))
              };
              Me = function(a) {
                  const b = [],
                      c = [];
                  a.forEach((d, e) => {
                      d.$().dh && (b.push(d), c.push(e))
                  });
                  c.forEach(d => {
                      a.splice(d - c.indexOf(d), 1)
                  });
                  return b
              };
              Ne = function(a, b, c) {
                  return b.map(d => Ed(d, c), a)
              };
              Oe = function(a) {
                  if (OBR.i.Yj) {
                      const b = OBR.g.NE();
                      a.forEach(c => c.style.boxShadow = `-2px 4px 10px 2px ${b}`)
                  }
              };
              Qe = function(a, b, c) {
                  a.forEach(d => {
                      const e = d.$().ja;
                      var f = K.Ja(),
                          g = Zd(K, b),
                          k = G.na(b);
                      const {
                          ja: l,
                          ra: q,
                          OI: h
                      } = d.$();
                      d = h && h.response && h.response.request && h.response.request.aO;
                      f = {
                          permalink: f,
                          widgetId: q,
                          feedFatherIdx: b,
                          idx: l,
                          clickTrackerUrl: g,
                          extId: k.pb(),
                          extId2: k.Bc()
                      };
                      f = OBR.Rh.Jm(f);
                      f.setData(h);
                      f.ux(b);
                      f.Fx();
                      if (k) {
                          g = k.vd();
                          var m = k.ob();
                          (k = k.Si()) && f.Bh(k);
                          m && f.ox(m);
                          g && f.gq(g)
                      }
                      d && f.mq(d);
                      OBR.F[l] = f;
                      OBR.controller.Ax(f);
                      f.Bx(c);
                      OBR.controller.pt(f, e);
                      f.px();
                      G.th(f);
                      G.Df(f);
                      OBR.controller.Sn(f);
                      f.ef() ||
                          OBR.controller.Nc(e);
                      OBR._jsc.Pe(f);
                      we.Jf(f, b)
                  })
              };
              Se = function(a, b, c) {
                  b && b.length && (b = b[0].$(), (new IntersectionObserver((d, e) => Re(d, e, c), b.Wo)).observe(a.v()))
              };
              Ue = function(a, b) {
                  K.K[b.G()].Gp.forEach(c => {
                      a.kk.includes(c.pos) || (new OBR.IntersectionObserver({
                          callback: () => {
                              var d = b.G();
                              const e = c.pos;
                              Number(Rd(d)) >= Number(e) && a.kk.push(e);
                              if (!a.kk.includes(e)) {
                                  const f = OBR.g.H(b.v()).querySelector(".ob-cards");
                                  d = Ad(c, e, d);
                                  f.append(d);
                                  Te(a, b);
                                  a.Yn.push(Number(e));
                                  a.kk.push(e)
                              }
                          },
                          element: document.querySelector(c.selector),
                          threshold: [0],
                          unobserve: !0
                      })).observe()
                  })
              };
              Ve = function(a, b, c) {
                  c && c.length && c.forEach(d => d && a.wp(b, d.$()))
              };
              We = function(a, b, c) {
                  if (1 === c.length && c[0].W && "joker" === c[0].W.ta) {
                      c = Be(b);
                      var d = (K.K[b] || {}).ad;
                      Fe(a, b, d, c.querySelector(`.ob-smartfeed-joker[data-card-idx='${d}']`))
                  }
              };
              Ye = function(a, b, c, d) {
                  a && (K.K[b].Zr && Xe(c) ? d || (a = G.na(b), a.v().style.display = "none", OBR.od.fire(`empty_feed_${b}`, [a])) : K.K[b].Zr = !1)
              };
              Te = function(a, b) {
                  b = new OBR.dataBI(b, c => c.cr);
                  a.Yn.length ? b.B.Ez.fire() : b.B.Yy.fire();
                  a.Aj && b.B.Fz.fire()
              };
              Ze = function(a) {
                  return a.filter(b => (b = b.$()) && b.Mj ? !b.Mj(Date.now()) : !0)
              };
              Xe = function(a) {
                  return !a || 0 === a.length || a.map(b => G.na(b.$().ja)).every(b => !b.Aa())
              };
              $e = function(a, b) {
                  Pd(!0, b, {
                      cardIdx: parseInt(Rd(b)) + parseInt(K.K[b].Gg)
                  });
                  Fe(a, b, Rd(b))
              };
              af = function(a) {
                  a.filter(b => {
                      b = G.na(b.$().ja);
                      return b.Yc() && !b.ef()
                  }).forEach(b => {
                      var c = G.v(b.$().ja),
                          d = b.$().ra;
                      b = G.na(b.$().ja);
                      if (c && !c.shadowRoot) {
                          var e = d.includes("REEL");
                          d = c.querySelector(".ob-widget");
                          e && (e = document.createElement("div"), e.appendChild(d), d = e);
                          d && c.attachShadow && (e = b.Vi(), b = b.Kg(), OBR.g.attachShadow(c, d, {
                              mode: "open"
                          }, e, b))
                      }
                  })
              };
              bf = function(a, b) {
                  a.filter(c => c.$().Oc).map(c => {
                      try {
                          const d = c.$().cardIdx,
                              e = c.$().Oc.split(".").reduce((g, k) => g[k], window),
                              f = Be(b).querySelector(`div[data-card-idx='${d}']`);
                          e && f && setTimeout(e.bind(null, f), 0)
                      } catch (d) {
                          ie.error(`fail to run card callback, card Json: ${c.$()} error: ${d}`)
                      }
                  })
              };
              cf = function(a, b) {
                  return b.filter(c => {
                      c = c.$();
                      return !a.Yn.includes(Number(c.cardIdx))
                  })
              };
              df = function(a, b) {
                  return a.filter((c, d) => b[d].style.opacity)
              };
              ef = function(a) {
                  return a.filter(b => b.style.opacity)
              };
              Re = function(a, b, c) {
                  a.forEach(d => {
                      d.isIntersecting && (c(), b.unobserve(d.target))
                  })
              };
              ff = function(a, b) {
                  a.forEach(c => {
                      if (c && c.W && c.W.response && c.W.response.request && c.W.response.request.idx) {
                          var d = c.W.response.request.idx;
                          OBR.F[d] || (c.Y = () => b, OBR.F[d] = c)
                      }
                  })
              };
              gf = function(a, b) {
                  const c = [],
                      d = a.filter(e => "widget" === e.$().ta);
                  b.forEach(e => d.forEach(f => {
                      const g = e.attributes["data-card-idx"].value,
                          k = f.$().cardIdx;
                      if (g === k) return c.push(f)
                  }));
                  return c
              };
              jf = function(a, b = window) {
                  try {
                      if (b.__gpp) b.__gpp("addEventListener", c => {
                          if ("signalStatus" === c.eventName && "ready" === c.data) {
                              var d = c.pingData.gppString;
                              if (d) return d = OBR.g.oa(d), c = c.pingData.sectionList, OBR.i.hj = d, OBR.i.On = c, d
                          }
                          return null
                      });
                      else return hf(a)
                  } catch (c) {
                      return null
                  }
              };
              hf = function(a) {
                  if (OBR.i.Xc) {
                      let b = window,
                          c = 0;
                      for (; b && 10 > c;) try {
                          if (b.frames.__gpp) return jf(a, b);
                          b = b.parent;
                          c++
                      } catch (d) {
                          break
                      }
                  }
                  return null
              };
              kf = function(a, b) {
                  a.O = null === b || isNaN(b) ? null : document.getElementById(`outbrain_widget_${b}`)
              };
              lf = function(a) {
                  a.requestData || (a.requestData = {});
                  return a.requestData
              };
              mf = function(a, b, c) {
                  a = a[b];
                  return "undefined" !== typeof a && null !== a ? a : c
              };
              nf = function(a) {
                  a.oq || (a.oq = {});
                  return a.oq
              }; of = function(a) {
                  a.Mo = !0;
                  setTimeout(() => {
                      a.Mo = !1;
                      a.flush()
                  }, a.MD)
              };
              OBR._jsc.qf = function(a) {
                  ma.fire(Object.assign({}, a.Wa, pf("click")))
              };
              rf = function(a) {
                  const b = a.j.dj();
                  ma.fire(Object.assign({}, {
                      odbResponse: b,
                      mvResponse: a.j.$e()
                  }, a.Wa, pf("dataReturned")))
              };
              sf = function(a) {
                  const b = a.j.Y();
                  a.Wa.version = window.OB_releaseVer;
                  a.Wa.widgetId = a.j.D();
                  a.Wa.idx = a.j.G();
                  a.Wa.servedWidgetId = a.j.Qg() || a.j.D();
                  a.Wa.element = a.j.v();
                  const c = a.j.o("abTestVal", null);
                  c && (a.Wa.abtest = c);
                  b ? (a.Ia = b, a.Wa.parentWidgetId = b.D(), a.Wa.servedParentWidgetId = b.Qg() || b.D(), a.Wa.feedIndex = b.G(), a.Wa.cardIdx = a.j.o("fCard", null)) : a.j.Na() && (a.Li.rendered = ta("rendered", a.j.D()), a.Li.viewability = ta("viewability", a.j.D()))
              };
              If = function(a) {
                  const b = !0 === a.j.o("oo", !1);
                  a = a.j.zd(!0);
                  return tf.isEnabled && !b && a && !OBR.i.kf
              };
              Ab = function(a) {
                  if (!a) return {};
                  const {
                      x: b,
                      y: c,
                      width: d,
                      height: e
                  } = a.getBoundingClientRect();
                  return {
                      x: b,
                      y: c,
                      width: d,
                      height: e
                  }
              };
              Lf = function(a) {
                  OBR.g.Ab(window, "resize", () => {
                      OBR._jsc.Jf(a);
                      Kf(a)
                  });
                  OBR._jsc.Jf(a);
                  Kf(a)
              };
              OBR._jsc.Jf = function(a) {
                  a.Ga = {
                      height: window.innerHeight && document.documentElement.XM ? Math.min(window.innerHeight, document.documentElement.clientHeight) : window.innerHeight || document.documentElement.clientHeight,
                      width: window.innerWidth && document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth
                  }
              };
              Kf = function(a) {
                  document && document.body && (a.Pm = Math.max(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), Math.max(document.body.offsetHeight, document.documentElement.offsetHeight), Math.max(document.body.clientHeight, document.documentElement.clientHeight)))
              };
              OBR._jsc.Mf = function() {
                  var a = OBR.ca;
                  return {
                      x: 0,
                      y: 0,
                      width: a.Ga.width,
                      height: a.Ga.height
                  }
              };
              OBR._jsc.Nf = function(a) {
                  var b = 0;
                  if (!a) return 1E4;
                  try {
                      if (a.offsetParent)
                          for (;;) {
                              b += a.offsetTop;
                              if (!a.offsetParent) break;
                              a = a.offsetParent
                          } else a.y && (b += a.y)
                  } catch (c) {
                      return OBR.error(c), 1E4
                  }
                  return parseInt(b, 10)
              };
              Of = function(a, b) {
                  b = b.boundingClientRect;
                  a = a.getBoundingClientRect();
                  return {
                      top: a.top + b.top,
                      bottom: a.bottom + b.top,
                      left: a.left + b.left,
                      right: a.right + b.left,
                      width: a.width,
                      height: a.height
                  }
              };
              Pf = function(a, b) {
                  b = b.rootBounds;
                  a = {
                      left: Math.max(a.left, b.left),
                      right: Math.min(a.right, b.right),
                      top: Math.max(a.top, 0),
                      bottom: Math.min(a.bottom, b.height)
                  };
                  a.width = a.right - a.left;
                  a.height = a.bottom - a.top;
                  return a
              };
              Qf = function(a) {
                  OBR.ya.mx({
                      url: a,
                      method: OBR.i.V.rc,
                      data: {},
                      hy: !0
                  })
              };
              Rf = function(a) {
                  const b = (d, e) => {
                      d.map(f => {
                          var g = d[f].pixel;
                          g = (f = d[f].contextAware) ? g : "https://widgets.outbrain.com/nanoWidget/externals/obPixelFrame/obPixelFrame.htm#p=" + encodeURIComponent(g);
                          g = N.createElement({
                              type: f ? "IMG" : "IFRAME",
                              id: null,
                              css: "display:none;height:1px;width:1px;",
                              attributes: {
                                  src: g
                              }
                          });
                          e.appendChild(g)
                      })
                  };
                  var c = a.v();
                  a && c && (a = a.ba("whenViewedPixels", null), c = OBR.g.H(c).querySelector(".ob-pixels"), a && c && b(a, c))
              };
              OBR._jsc.Pe = function(a) {
                  var b = OBR.oc;
                  const c = a.G();
                  b.Th[c] && (Sf(b, a, b.vc.ready), b.zk(a), delete b.Th[c])
              };
              Uf = function(a) {
                  var b = OBR.oc;
                  if (!a.Xu())
                      if (N.log("Adding stats for: " + a.G()), a.l("tracking", !1)) Sf(b, a, b.vc.Hq);
                      else if (a.pv()) Sf(b, a, b.vc.stopped);
                  else if (Tf(a) || a.he()) Sf(b, a, b.vc.ready);
                  else if (a.mE() || a.cH()) {
                      const c = a.G();
                      b.Th[c] || (b.Th[c] = a.v())
                  } else Sf(b, a, b.vc.ready), b.zk(a)
              };
              Yf = function(a) {
                  OBR.od.add("ajax_error", (b, c) => {
                      Vf(c) ? Wf(a, b, c) : Vf(c) && Xf(b, c)
                  })
              };
              Zf = function(a) {
                  OBR.od.add("ajax_succeed", b => {
                      try {
                          if (Vf(b)) {
                              const c = new URL(b),
                                  d = c.searchParams.get("retries");
                              d && "0" !== d && (c.searchParams.delete("retries"), a.Xk.delete(c.toString()), OBR.error({
                                  name: "obm-MCDPRetriesSucceed",
                                  message: `retries: ${d}, url: ${c}`
                              }))
                          }
                      } catch (c) {}
                  })
              };
              ag = function(a) {
                  N.log("Starting Statistics");
                  N.qk(() => {
                      a.pm = !0;
                      $f(a)
                  });
                  N.log("AdBlock - Start full check for stats");
                  gb(OBR.kb, {
                      uH: !0
                  })
              };
              Sf = function(a, b, c) {
                  var d = b.ba("viewability_actions");
                  if (void 0 !== d && null !== d && d.reportServed) {
                      var e = b.ba("viewability_actions").reportServed.split("?");
                      d = N.jk(e[1]);
                      d.tm = (new Date).getTime() - a.startTime;
                      d.eT = c;
                      if (c === a.vc.ready) {
                          d = N.Ih(d);
                          if (b) {
                              var f = document.body.getBoundingClientRect();
                              var g = b.v();
                              if (g) {
                                  var k = g.getBoundingClientRect();
                                  f = `&widgetWidth=${Math.round(k.width||g.clientWidth)}&widgetHeight=${Math.round(k.height||g.clientHeight)}&widgetX=${Math.round(k.left-f.left)}&widgetY=${Math.round(k.top-
f.top)}`
                              } else f = ""
                          } else f = "";
                          g = OBR.He.Ue;
                          !b || -1 === g || OBR.He.Sx ? g = "" : (OBR.He.Sx = !0, g = `&tpcs=${g}`);
                          f = `${d}${f}${g}`
                      } else f = N.Ih(d);
                      d = [];
                      d.push(`${e[0]}?${f}`);
                      d.push("&wRV=" + OBR.i.ver);
                      a: {
                          try {
                              if (0 === parseInt(b.o("pad", "0"))) {
                                  b.xx(!1);
                                  var l = !1;
                                  break a
                              }
                              if ("undefined" === typeof b.Ho()) {
                                  var q = "undefined" === typeof b.Ho() ? pb(b.G(), c) : !1;
                                  b.xx(q);
                                  l = q;
                                  break a
                              }
                          } catch (W) {
                              OBR.logger.log("updatePaidRecsViewability: in detection of visible paid recs")
                          }
                          l = b.Ho()
                      }
                      d.push("&pVis=" + (l ? "1" : "0"));
                      d.push("&lsd=" + b.o("lsd",
                          -1));
                      d.push("&eIdx=");
                      l = b.o("cnsnt", "");
                      q = b.o("cnsntv2", "");
                      e = b.o("ccpa", "");
                      "" !== l && d.push("&cnsnt=" + l);
                      "" !== e && d.push("&ccpa=" + e);
                      "" !== q && d.push("&cnsntV2=" + q);
                      a.Mi || (d.push("&cheq=" + OBR.fraudDetection.sg), a.Mi = !0);
                      c === a.vc.ready && b.bu() && d.push("&rtt=" + b.bu());
                      d.push("&oo=" + b.o("oo", "false"));
                      if (c === a.vc.ready) {
                          if (Xb.isEnabled) {
                              if (Xb.isEnabled)
                                  if (c = b.Y(), l = b.G(), 100 < l && 1E3 > l) var h = ac();
                                  else {
                                      l = c ? c.iE() : void 0;
                                      q = "connection" in navigator && (null == (h = navigator.connection) ? void 0 : h.effectiveType);
                                      h =
                                          (e = Yb()) ? e.requestStart || e.fetchStart : void 0;
                                      e = e ? e.responseEnd : void 0;
                                      f = parseInt(window.performance.timeOrigin);
                                      g = $b(f, Zb(b, "odb", "start"));
                                      k = $b(f, Zb(b, "odb", "end"));
                                      var m = $b(f, Zb(b, "rendered")),
                                          p = $b(f, Zb(b, "mv", "start")),
                                          r = $b(f, Zb(b, "mv", "end")),
                                          t = b.D();
                                      c = (c ? c.ge() : b.ge()) || OBR.i.Fd || c && va(c.D()) || va(t) || b.bv() ? "1" : "0";
                                      h = {
                                          iw: h,
                                          obLoaded: e,
                                          odbReq: g,
                                          odbRes: k,
                                          mvReq: p,
                                          mvRes: r,
                                          rendered: m,
                                          timeOrigin: f,
                                          actualSizeChunk: l,
                                          connectionEffectiveType: q,
                                          Dv: c
                                      }
                                  }
                              else h = ac();
                              var {
                                  iw: u,
                                  obLoaded: v,
                                  odbReq: w,
                                  odbRes: A,
                                  mvReq: D,
                                  mvRes: E,
                                  rendered: J,
                                  actualSizeChunk: I,
                                  timeOrigin: V,
                                  connectionEffectiveType: P,
                                  Dv: R
                              } = h;
                              v && d.push("&lo=" + v.toFixed());
                              u && d.push("&obreq=" + u.toFixed());
                              w && d.push("&odbreq=" + w.toFixed());
                              A && d.push("&odbres=" + A.toFixed());
                              D && d.push("&mvreq=" + D.toFixed());
                              E && d.push("&mvres=" + E.toFixed());
                              J && d.push("&re=" + J.toFixed());
                              P && d.push("&cet=" + P);
                              I && d.push("&cs=" + I);
                              V && d.push("&to=" + V);
                              R && d.push("&ll=" + R)
                          }
                          d.push(`&chs=${OBR.i.vn(b)}`)
                      }(b = b.gE()) && d.push(`&eme=${b}`);
                      b = d.join("");
                      N.log("Stats waiting list: " + b);
                      a.rg.add(b);
                      a.pm && $f(a)
                  }
              };
              Tf = function(a) {
                  const b = a.l("recMode", "");
                  return b.includes("top-box") || b.includes("bottom-box") || a.Hj()
              };
              bg = function() {
                  var a = OBR.oc;
                  a.Qb || (a.yk(), setTimeout(() => a.Qb = !1, a.HJ), a.Qb = !0)
              };
              cg = function(a, b) {
                  const c = N.na(b).v();
                  let d = null;
                  const e = g => {
                          0 >= g ? (clearTimeout(d), d = null) : d = d || setTimeout(() => {
                              N.na(b) && (a.De[b] = null, f.unobserve())
                          }, 15E3)
                      },
                      f = new OBR.IntersectionObserver({
                          callback: g => {
                              e(g.intersectionRatio)
                          },
                          element: c,
                          threshold: 0,
                          intersectPercentage: -1,
                          unobserve: !1
                      });
                  a.Ua.push(f);
                  f.observe()
              };
              Wf = function(a, b, c) {
                  try {
                      let d = c.split("&retries")[0];
                      const e = (a.Xk.get(d) || 0) + 1;
                      a.Xk.set(d, e);
                      2 >= e ? (d += `&retries=${e}`, setTimeout(() => {
                          OBR.error({
                              name: "obm-MCDPRetriesError",
                              message: `${b.message}, url: ${d} , retries:${e}`
                          });
                          Qf(d)
                      }, 1E3 * e)) : (a.Xk.delete(d), Xf(b, d))
                  } catch (d) {}
              };
              Vf = function(a) {
                  return /mcdp-.*\.outbrain\.com/.test(a)
              };
              Xf = function(a, b) {
                  OBR.error({
                      name: "obm-MCDPError",
                      message: `${a.message}, url: ${b}`
                  })
              };
              $f = function(a) {
                  for (; !a.rg.Ed();) {
                      var b = a.rg.top();
                      if (OBR.i.Kj() || OBR.i.Lj()) var c = "&ab=0&wl=0";
                      else c = `&ab=${N.sn()}&wl=${N.Mn()}`, "&ab=0&wl=2" === c && OBR.error({
                          name: "adblock",
                          message: "got 0 2 in ad blocker detection"
                      });
                      b += c;
                      Vf(b) && (b += "&retries=0");
                      Qf(b)
                  }
              };
              fg = function(a, b, c = !1, d = !1, e = !1) {
                  const f = OBR.g.v(b);
                  if (f) {
                      const g = dg(f);
                      e && "undefined" != f.style.webkitLineClamp || !(g || c || d) || setTimeout((() => {
                          const k = OBR.g.v(b);
                          g && eg(a, k, b, "ob-rec-text");
                          c && eg(a, k, b, "ob-rec-source");
                          d && eg(a, k, b, "ob-rec-description")
                      }).bind(a), 500)
                  } else OBR.logger.log("truncation - no container found for widgetIdx=" + b)
              };
              gg = function(a, b, c, d) {
                  if (c)
                      if (d) c = b.innerText || b.textContent, c = 0 < c.lastIndexOf(" ") ? c.substring(0, c.lastIndexOf(" ")) : c.substring(0, c.length - 3), -1 < a.LA.indexOf(c.slice(-1)) && (c = c.substring(0, c.length - 1)), b.innerHTML = c + "&hellip;";
                      else
                          for (a = b.clientHeight, c = b.textContent + "&hellip;", b.innerHTML = c; b.clientHeight > a;) c = c.substring(0, b.textContent.length - 2) + "&hellip;", b.innerHTML = c
              };
              eg = function(a, b, c, d = "ob-rec-text") {
                  const e = OBR.g.getElementsByClassName(d, b);
                  d = () => {
                      for (let m = 0; m < e.length; m++) {
                          const p = e[m];
                          p.title = p.innerText || p.textContent;
                          var f = p.clientHeight,
                              g = parseInt(OBR.g.cc(p, "max-height").replace("px", ""));
                          if (f < g) continue;
                          f = p.cloneNode(!0);
                          var k = document.createElement("div");
                          k.style.position = "absolute";
                          k.style.top = "-1000px";
                          k.style.left = "-1000px";
                          document.body.appendChild(k);
                          var l = f.style;
                          l.fontSize = OBR.g.cc(p, "font-size");
                          l.fontWeight = OBR.g.cc(p, "font-weight");
                          l.fontFamily =
                              OBR.g.cc(p, "font-family");
                          l.lineHeight = OBR.g.cc(p, "line-height");
                          l.textTransform = OBR.g.cc(p, "text-transform");
                          l.letterSpacing = OBR.g.cc(p, "letter-spacing");
                          l.display = "block";
                          l.visibility = "hidden";
                          var q = OBR.g.cc(p, "padding-right").replace("px", ""),
                              h = OBR.g.cc(p, "padding-left").replace("px", "");
                          l.width = p.clientWidth - h - q + "px";
                          k.appendChild(f);
                          q = void 0;
                          l = a;
                          h = f.innerText || f.textContent;
                          let r = !0;
                          const t = OBR.Ya.be(c);
                          for (t && (r = t.l("ellipsisTruncationUseSpace", !0)); 0 < g && f.offsetHeight > g && 0 < h.length;) h = h.substring(0,
                              h.length - 1), f.innerHTML = h, q = !0;
                          0 === h.length ? q = !1 : (g = f.offsetHeight, gg(l, f, q, r), g < f.offsetHeight && (h = h.substring(0, h.length - 1), f.innerHTML = h, gg(l, f, q, r)));
                          g = q;
                          !0 === g ? p.innerHTML = f.innerText || f.textContent : !1 === g && OBR.logger.log("Truncation - External CSS broke the calculation, truncation is canceled.");
                          k.parentNode.removeChild(k)
                      }
                  };
                  0 === OBR.g.getElementsByClassName("ob-touch-strip-layout", b).length ? d() : setTimeout(d, 1E3)
              };
              dg = function(a) {
                  var b = !1;
                  (a = a.querySelector(".ob-widget")) && a.attributes["data-dynamic-truncate"] && "true" === a.attributes["data-dynamic-truncate"].value && (b = !0);
                  return b
              };
              hg = function(a) {
                  const b = document.createElement("script");
                  b.className = "ct_invocation_65349 ct_invocation_65349_0";
                  b.setAttribute("jsonp", "OBR.extern.onCheqResponse");
                  b.src = "https://rock.defybrick.com/placement_invocation?id=65349&idx=0";
                  b.onerror = a;
                  return b
              };
              jg = function() {
                  var a = OBR.Wh;
                  OBR.logger.log("FD calling Cheq");
                  return new Promise((b, c) => {
                      let d = setTimeout(() => {
                          OBR.fraudDetection.Yd || (a.timeout = !0, c({
                              type: "timeout",
                              OH: null
                          }))
                      }, a.zC);
                      a.qs = Date.now();
                      a.Bm = f => {
                          f = encodeURIComponent(f);
                          OBR.fraudDetection.Yd = f;
                          clearTimeout(d);
                          f = Date.now() - a.qs;
                          a.timeout ? (f = Object.assign({
                              cheqEvent: 2
                          }, {
                              responseTime: f
                          }), ig.pd(f)) : b({
                              type: "success"
                          })
                      };
                      const e = hg(f => {
                          clearTimeout(d);
                          c({
                              type: "error",
                              OH: f.message
                          })
                      });
                      document.getElementsByTagName("head")[0].appendChild(e)
                  })
              };
              kg = function() {
                  OBR.Wh.Bm = b => {
                      b = encodeURIComponent(b);
                      OBR.fraudDetection.Yd = b
                  };
                  const a = hg(() => {});
                  document.getElementsByTagName("head")[0].appendChild(a)
              };
              lg = function(a) {
                  const b = document.createElement("div");
                  b.className = `ctcg_${a}`;
                  b.setAttribute("style", "width:1px;height:1px");
                  document.body.appendChild(b)
              };
              mg = function(a) {
                  document && document.body ? lg(a) : window.addEventListener("DOMContentLoaded", () => {
                      lg(a)
                  })
              };
              ng = function(a, b) {
                  var c = OBR.Wh;
                  if (!c.Am) {
                      c.Am = !0;
                      var d = k => document && k ? document.getElementsByClassName ? document.getElementsByClassName(k) : document.querySelectorAll("." + k) : null,
                          e = "https:" === location.protocol ? "https:" : "http:",
                          f = document.createElement("script"),
                          g = d(`ct_invocation_${b}`);
                      g = g ? g.length : null;
                      null === g ? c.Am = !1 : (c = d(`ctcg_${b}`), f.className = `ct_invocation_${b} ct_invocation_${b}_${g}`, c && c[0] && (c[0].className = `ctcg_${b}_` + g), f.setAttribute("ch", (k => {
                          k = {
                              Request_id: k.o("req_id", "-1"),
                              publisher_id: k.o("pid",
                                  "0"),
                              source_id: k.o("sid", "0"),
                              widget_id: k.o("widgetJsId", k.D()),
                              pv_id: k.o("pvId", "-1")
                          };
                          try {
                              return JSON.stringify(k)
                          } catch (l) {
                              return ""
                          }
                      })(a)), f.src = e + `//rock.defybrick.com/placement_invocation?id=${b}&idx=${g}`, document.getElementsByTagName("head")[0].appendChild(f))
                  }
              };
              og = function(a) {
                  var b = a.o("req_id", null),
                      c = a.o("pid", null),
                      d = a.o("widgetJsId", null);
                  const e = a.o("pvId", null),
                      f = a.o("sid", null),
                      g = OBR.g.oa(a.Ja());
                  d = "https://fqtag.com/implement.js" + `?rt=display&org=XerMOk8ZaYDInXdxmR4z&s=${b}&p=${c}&a=${f}&cmp=${d}&rd=${g}&c1=${e}`;
                  b = OBR.g.createElement("script", null, null, {
                      src: d
                  });
                  c = OBR.g.createElement("noscript", null);
                  c.insertAdjacentHTML("beforeend", '<img src="' + d + '" width="1" height="1" border="0"/>');
                  a = a.v();
                  d = document.createDocumentFragment();
                  d.appendChild(b);
                  d.appendChild(c);
                  a.appendChild(d)
              };
              qg = function() {
                  let a = !1,
                      b = null;
                  return new Promise((c, d) => {
                      const e = btoa(OBR.fraudDetection.Gi);
                      OBR.logger.log("FD call TCheck");
                      const f = setTimeout(() => {
                          a = !0;
                          OBR.logger.log("FD TCheck timeout");
                          d({
                              type: "timeout"
                          })
                      }, 200);
                      b = Date.now();
                      OBR.ya.send(OBR.i.V.rc, pg + "/" + e, null, g => {
                          let k = Date.now() - b;
                          a: {
                              let l = !1;
                              if (g) {
                                  try {
                                      l = JSON.parse(g).result
                                  } catch (q) {
                                      g = null;
                                      break a
                                  }
                                  g = l
                              } else g = void 0
                          }
                          a && ig.pd({
                              cheqEvent: 3,
                              responseTime: k
                          });
                          clearTimeout(f);
                          OBR.logger.log("FD got response from TCheck");
                          null === g && d({
                              type: "error"
                          });
                          c(g)
                      })
                  })
              };
              rg = function() {
                  const a = () => Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
                  return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
              };
              sg = function(a, b) {
                  a.zt.add("onFDStatusReady", b)
              };
              ug = function(a) {
                  return OBR._jsc.z(function*() {
                      try {
                          return (yield tg(a)) ? "2" : "0"
                      } catch (b) {
                          return "0"
                      }
                  })
              };
              vg = function(a) {
                  return OBR._jsc.z(function*() {
                      if (!Ba()) return a.nb = 7, "0";
                      let b = OBR.g.U(OBR._jsc.C.ar, null);
                      if (null !== b) "0" === b && (a.nb = 0);
                      else {
                          if (OBR.i.dH) return a.nb = 2, "0";
                          b = yield ug(a)
                      }
                      return b
                  })
              };
              tg = function(a) {
                  return OBR._jsc.z(function*() {
                      try {
                          const b = yield qg();
                          a.nb = 2;
                          return b
                      } catch (b) {
                          return b && "timeout" === b.type ? (OBR.logger.log("FD TCheck timeout"), a.nb = 1) : a.nb = 7, !1
                      }
                  })
              };
              yg = function(a) {
                  OBR._jsc.z(function*() {
                      try {
                          yield jg();
                          OBR.logger.log("FD got response from Cheq");
                          a.sg = 1;
                          a.nb = 4;
                          OBR.controller.iJ(b => {
                              b && 0 === b.G() && (a.vh = b.o("pvId", null));
                              wg(a)
                          });
                          xg(a, !1);
                          return
                      } catch (b) {
                          a.Gf = a.rn, "timeout" === b.type ? (a.sg = 2, OBR.logger.log("FD Cheq timeout"), a.nb = 3) : (a.sg = 5, a.nb = 5, OBR.logger.log("FD Cheq error"))
                      }
                      xg(a)
                  })
              };
              xg = function(a, b = !0) {
                  b && wg(a);
                  a.At = !0;
                  a.zt.fire("onFDStatusReady");
                  OBR.logger.log("FD finished")
              };
              zg = function() {
                  const a = OBR.fraudDetection;
                  OBR._jsc.z(function*() {
                      switch (yield vg(a)) {
                          case "2":
                              yg(a);
                              break;
                          case "7":
                              a.jj = 103569;
                          case "6":
                              mg(a.jj);
                          case "4":
                              a.nb = 6;
                              xg(a);
                              break;
                          case "0":
                              xg(a, !1);
                              break;
                          case "5":
                              yg(a);
                              break;
                          default:
                              xg(a)
                      }
                  })
              };
              wg = function(a) {
                  a = {
                      nb: a.nb,
                      vh: a.vh
                  };
                  const b = {
                      cheqEvent: 0,
                      exitReason: a.nb
                  };
                  a.data && a.data.AC && (b.responseTime = a.data.AC);
                  OBR.fraudDetection.Yd && (b.message = decodeURIComponent(OBR.fraudDetection.Yd));
                  a.vh && (b.pvId = a.vh);
                  ig.pd(b)
              };
              Bg = function(a) {
                  if (a.options.Ov && !a.options.Cj) {
                      var b = `
  .ob-explore-more-up-page {
    display: flex;
    align-items: center;
    justify-content: center;
    width:100vw;
    height:48px;
    top:0
  }
  .ob-explore-more-up-page .ob-explore-more-image-logo {
    width:${a.options.nD};
    height: auto;
    max-height: 44px;
    display: flex;
    align-self: center;
    margin-left:${a.options.mD};
  }
  .ob-explore-more-up-page .back-button {
    background-image:url(https://widgets.outbrain.com/images/widgetIcons/arrows-chevron-left.svg);
    width:24px;
    height:24px;
    position:absolute;
    left: 0;
    background-repeat:no-repeat;
    background-color:#000;
    border-color:#000;
    background-size:contain;
    padding:9px 6.5px 8.5px 6px
  }`,
                          c = document.createElement("div");
                      c.className = "ob-explore-more-page";
                      c.innerHTML = `
    <style>${b}</style>
    <div class='ob-explore-more-up-page' style='background-color: ${a.options.wB}'>
      <button class='back-button'></button>  
      <a class='imageLogoLink'>
        <img class='ob-explore-more-image-logo' src="${a.options.Ov}"/>
      </a>
      
    </div>`;
                      c.querySelector("button.back-button").addEventListener("click", () => {
                          document.referrer && !a.Ru ? window.location.href = document.referrer : Ag(a)
                      });
                      c.querySelector("a.imageLogoLink").addEventListener("click", () => {
                          window.location = a.j.l("urlHomePage", window.location.protocol + "//" + window.location.host)
                      });
                      return c
                  }
              };
              Ag = function(a) {
                  var b = a.options.I;
                  const c = a.options.hk;
                  b && b.parentElement && (c ? b.parentElement.removeChild(b) : b.style.display = "none");
                  if (a.options.Vv) {
                      a = document.body.querySelectorAll("video:not(div.OUTBRAIN video)") || [];
                      b = document.body.querySelectorAll("audio:not(div.OUTBRAIN audio)") || [];
                      for (var d of [...a, ...b]) d.hasAttribute("ob-em-state-muted") && (d.muted = !1, d.removeAttribute("ob-em-state-muted"))
                  }
                  if (OBR.i.ff) {
                      d = document.querySelectorAll(".ob-fixed-overlay-scroll");
                      for (const e of d) e.classList.remove("ob-fixed-overlay-scroll")
                  }
              };
              Cg = function(a) {
                  const b = document.createElement("div");
                  b.id = "ob-em-blacker";
                  b.style = "position: fixed;width: 100vw; height: 100vh;z-index: 2147483643;background-color: rgba(0,0,0,0.5);overflow:hidden;top:0;left:0;display: flex;align-items: center;justify-content: center;opacity:0;transition: .1s ease-in;";
                  const c = document.createElement("div");
                  c.id = "ob-em-container";
                  c.style = "position: relative;width:60vw;height:80vh;max-width:650px;max-height:700px;background-color:#fff;z-index:2147483644;overflow:hidden;overflow-y: auto;display:block;border-bottom: 32px solid white;padding: 0 32px;";
                  c.innerHTML = '<div class="close-btn" style="position: sticky;text-align: right;top:10px;margin-right: -25px;height: 0;color:rgb(164, 163, 168);cursor: pointer;">\u2715</div>';
                  b.append(c);
                  c.querySelector(".close-btn").addEventListener("click", () => {
                      Ag(a);
                      a.j.tb(O.Za.R.sz)
                  }, {
                      once: !0
                  });
                  c.addEventListener("click", d => d.stopPropagation());
                  b.addEventListener("click", () => {
                      Ag(a);
                      a.j.tb(O.Za.R.uz)
                  });
                  return b
              };
              Dg = function(a) {
                  a = a.j.l("exploreMoreElementsBlockScroll", "[]");
                  try {
                      const b = JSON.parse(a) || [];
                      b && b.length && OBR.g.ia(`${b.join(",")}{overflow:hidden!important}`)
                  } catch (b) {
                      OBR.logger.log(b)
                  }
              };
              Eg = function(a) {
                  if (OBR.i.ff) {
                      a = a.j.l("exploreMoreElementsBlockScroll", "[]");
                      try {
                          const b = JSON.parse(a) || [];
                          if (b && b.length) {
                              OBR.g.ia(".ob-fixed-overlay-scroll {position: fixed !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100%; !important}");
                              for (const c of b) {
                                  const d = document.querySelector(c);
                                  d && d.classList.add("ob-fixed-overlay-scroll")
                              }
                          }
                      } catch (b) {
                          OBR.logger.log(b)
                      }
                  }
              };
              Fg = function(a) {
                  const b = a.options.I;
                  b && b.parentElement && (b.style.display = "block");
                  Dg(a);
                  Eg(a)
              };
              Gg = function(a) {
                  (a = a && a.querySelector(".OUTBRAIN")) && a.removeAttribute("data-ob-lazy-render");
                  a && a.removeAttribute("data-ob-prefetch")
              };
              Hg = function(a) {
                  const b = a.options.I,
                      c = Cg(a);
                  a = c.querySelector("#ob-em-container");
                  const d = b.children;
                  b.querySelectorAll(".ob-explore-more-up-page, .ob-explore-more-advise").forEach(e => e.remove());
                  a.append(...d);
                  b.style = "";
                  setTimeout(() => {
                      c.style.opacity = "1"
                  }, 0);
                  b.append(c)
              };
              Ig = function(a) {
                  a = (a = a.options.I.querySelector(".OUTBRAIN")) && a.getAttribute("data-idx");
                  OBR.controller.gn(`widgetLazyRender_${a}`)
              };
              Jg = function(a) {
                  (a = a.options.I.querySelector(".ob-explore-more-page")) && a.remove()
              };
              Kg = function(a) {
                  a = a.options.I.querySelectorAll(".ob-custom-css");
                  for (const b of a) b.innerText = b.innerText.replace(new RegExp(/#ob-explore-more::before {.*?}/, "gs"), "")
              };
              Mg = function(a) {
                  const b = Lg(a);
                  b && b.addEventListener("click", a.Pr)
              };
              Ng = function(a) {
                  if (a.options.Vv) {
                      a = document.body.querySelectorAll("video:not(div.OUTBRAIN video)") || [];
                      var b = document.body.querySelectorAll("audio:not(div.OUTBRAIN audio)") || [];
                      for (let c of [...a, ...b]) c.muted || (c.muted = !0, c.setAttribute("ob-em-state-muted", "true"))
                  }
              };
              Og = function(a, b) {
                  a.iH && !a.options.hk ? Fg(a) : (a.Uc && clearInterval(a.Uc), a.j.tb(O.Za.R.aA), !OBR.F.some(c => {
                      let d;
                      return (null == (d = c.Y()) ? void 0 : d.D()) === a.options.da
                  }) && a.j.tb(O.Za.R.Az), Gg(a.options.I), Dg(a), Eg(a), a.options.Bj && b && Hg(a), Ig(a), a.options.Cj && (Jg(a), Kg(a), Mg(a)), a.options.I.style.top = a.options.$v || a.options.PH || "0", Ng(a), ma.fire(Object.assign({}, a.j.B.Wa, pf("exploreMoreRendered"))))
              };
              Pg = function(a) {
                  var b = document.body,
                      c = b.appendChild,
                      d = a.options.EL && OBR.i.nG && OBR.i.ff;
                  const e = new DocumentFragment,
                      f = a.options.I;
                  var g = `200${d?"dvh":"vh"}`;
                  e.appendChild(f);
                  f.id = "ob-explore-more";
                  f.style = `position:fixed;top:${g};left:0;right:0;bottom:0;width:100vw;height:100${d?"dvh":"vh"};background-color:#fff;z-index:2147483647;overflow:auto;display:${"block"};box-sizing:border-box;overflow-x: hidden;overflow-y: scroll;`;
                  d = [];
                  a.options.Ba.dt && d.push(`data-external-id=${a.options.Ba.dt}`);
                  a.options.Ba.ft &&
                      d.push(`data-external-secondary-id=${a.options.Ba.ft}`);
                  a.options.Ba.gd && d.push(`data-pub-imp-id="${a.options.Ba.gd}"`);
                  a.options.Ba.sj && d.push(`data-ob-installation-type=${a.options.Ba.sj}`);
                  a.options.Ba.ze && d.push(`data-ob-user-id=${a.options.Ba.ze}`);
                  a.options.Ba.ii && d.push(`data-ob-app-ver=${a.options.Ba.ii}`);
                  a.options.Ba.rj && d.push(`data-ob-installation-key=${a.options.Ba.rj}`);
                  a.options.Ba.Xd && d.push(`data-click-url=${a.options.Ba.Xd}`);
                  a.options.Ba.Fs && d.push(`data-ob-contenturl=${a.options.Ba.Fs}`);
                  a.options.Ba.ms && d.push(`data-ob-bundleurl=${a.options.Ba.ms}`);
                  a.options.Ba.yw && d.push(`data-ob-portalurl=${a.options.Ba.yw}`);
                  d.push(`data-widget-id=${a.options.da}`);
                  d.push("data-ob-lazy-render=true");
                  d.push("data-ob-prefetch=true");
                  d.push("data-ob-explore-more");
                  f.innerHTML = `<div class='OUTBRAIN' data-ob-mark='true'  data-src='${a.j.Ja()}' ${d.join(" ")}></div>`;
                  d = Bg(a);
                  a.options.rd.text ? (g = document.createElement("div"), g.className = "ob-explore-more-advise", g.innerHTML = `<style>${".ob-explore-more-advise{--ob-em-bubble-bg-color:#151e41;--ob-em-bubble-font-color:#fff;--ob-em-bubble-font-size:13px;--ob-em-bubble-font-family:inherit;width:100%;background-color:#151e41;background-color:var(--ob-em-bubble-bg-color);color:#fff;color:var(--ob-em-bubble-font-color);font-size:13px;font-size:var(--ob-em-bubble-font-size);font-family:var(--ob-em-bubble-font-family);margin:8px 0 12px;display:-webkit-box;display:-ms-flexbox;display:flex;padding:8px 0;position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ob-explore-more-advise-x{width:20px;height:20px;-webkit-transform:scale(.9);transform:scale(.9);padding:0;border:0;background-color:#fff;background-color:var(--ob-em-bubble-font-color);-webkit-mask-image:url(https://widgets.outbrain.com/images/widgetIcons/icon-x.svg);mask-image:url(https://widgets.outbrain.com/images/widgetIcons/icon-x.svg);-webkit-box-flex:0;-ms-flex:0 0 20px;flex:0 0 20px;opacity:.7}.ob-explore-more-advise-x:hover{opacity:1}.ob-explore-more-advise-text{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;justify-items:center}"}</style><span class='ob-explore-more-advise-text'>${a.options.rd.text}</span>`,
                          g.style.setProperty && (g.style.setProperty("--ob-em-bubble-bg-width", a.options.rd.width), g.style.setProperty("--ob-em-bubble-bg-height", a.options.rd.height), g.style.setProperty("--ob-em-bubble-bg-color", a.options.rd.bgColor), g.style.setProperty("--ob-em-bubble-font-color", a.options.rd.color), g.style.setProperty("--ob-em-bubble-font-size", a.options.rd.fontSize), g.style.setProperty("--ob-em-bubble-font-family", a.options.rd.fontFamily)), a.options.isRTL && (g.style.direction = "rtl", g.setAttribute("dir", "rtl"))) :
                      g = void 0;
                  g && f.insertBefore(g, f.firstChild);
                  d && f.insertBefore(d, f.firstChild);
                  c.call(b, e);
                  a.options.Cj && (c = Lg(a)) && ({
                      height: b
                  } = c.getBoundingClientRect(), b && 0 < b && (a.options.$v = `${b}px`, a.options.QH || (a.options.QH = getComputedStyle(c).zIndex)));
                  return a
              };
              Qg = function(a) {
                  const b = a.options.I,
                      c = b.querySelector(".OUTBRAIN");
                  c.removeAttribute("data-ob-mark");
                  OBR.controller.mB(d => {
                      d.v() === c && d.lJ(() => {
                          a.collapse();
                          a.j.tb(O.Za.R.Bz)
                      })
                  });
                  b && OBR.controller.te();
                  a.j.tb(O.Za.R.oz);
                  return a
              };
              Sg = function(a) {
                  const b = () => {
                      a.Ru = 1 === window.history.length;
                      const c = window.history.state;
                      0 <= OBR.i.$a.search(/android/gim) && (0 <= OBR.i.$a.search(/fb_iab/gim) || 0 <= OBR.i.$a.search(/fbav/gim)) ? window.history.pushState({
                          obem: 1
                      }, "") : window.history.replaceState({
                          obem: 1
                      }, "");
                      window.history.pushState(c, "")
                  };
                  !Rg(a) && "safari" === OBR.i.Wb && OBR.i.py && 16 <= OBR.i.py && a.options.EJ ? (window.addEventListener("touchend", () => b(), {
                      once: !0
                  }), window.addEventListener("mousedown", () => b(), {
                      once: !0
                  })) : b();
                  return a
              };
              Tg = function(a) {
                  let b = !1;
                  window.addEventListener("popstate", () => {
                      if (!a.options.hk) history.state ? history.state && 1 === history.state.obem && (Og(a, !1), a.iH = !0) : Ag(a);
                      else if (b) a.collapse();
                      else if (a.options.hk || history.state && 1 === history.state.obem) Og(a, !1), history.replaceState(null, ""), b = !0
                  });
                  a.options.Bj && (document.addEventListener("mouseleave", () => {
                      b || (Og(a, !0), history.replaceState(null, ""), b = !0)
                  }, {
                      once: !0
                  }), document.addEventListener("visibilitychange", () => {
                      !b && document.hidden && (Og(a, !0), history.replaceState(null,
                          ""), b = !0)
                  }, {
                      once: !0
                  }))
              };
              Ug = function(a) {
                  if (a.options.Bj || "complete" === document.readyState) return a;
                  a.Uc = setInterval(() => {
                      history.state && 1 === history.state.obem && Og(a, !1)
                  }, a.options.Uc);
                  return a
              };
              Rg = function(a) {
                  return a.options.tF && -1 < OBR.i.$a.indexOf("apple") && -1 < OBR.i.$a.indexOf("iphone") && -1 < OBR.i.$a.indexOf("webkit") && (-1 < navigator.userAgent.indexOf("FBAN") || -1 < navigator.userAgent.indexOf("FBAV")) && -1 === OBR.i.$a.indexOf("safari") && -1 === OBR.i.$a.indexOf("firefox") && -1 === OBR.i.$a.indexOf("chrome")
              };
              Lg = function(a) {
                  try {
                      return a.options.Cj && a.options.qp ? document.querySelector(a.options.qp) : void 0
                  } catch (b) {
                      OBR.logger.log(`failed to get native header element ${a.options.qp}`)
                  }
              };
              Vg = function(a, b) {
                  if (a = a && a.querySelector(".ob-shadow-slot")) return a;
                  a = document.createElement("slot");
                  a.style.cssText = "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%;";
                  b.appendChild(a);
                  b.parentElement.style.position = "relative";
                  a = document.createElement("img");
                  a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAAAKSURBVHicY2AAAAACAAFIr6RxAAAAAElFTkSuQmCC";
                  a.classList.add("ob-trk-pxls");
                  a.ariaHidden = !0;
                  a.style.cssText = "\n        width: 100%;\n        height: 100%;\n        display: block;\n      ";
                  const c = document.createElement("div");
                  c.classList.add("ob-shadow-slot");
                  c.style.cssText = `
      position: relative !important;
      z-index: -1 !important;
      height: ${b.offsetHeight}px !important;
      width: ${b.offsetWidth}px !important;
      top: 0 !important;
      left: 0 !important;
    `;
                  c.appendChild(a);
                  return c
              };
              Wg = function(a) {
                  (a = a && a.querySelector("a.ob-dynamic-rec-link")) && !a.classList.contains("ob-trk-pxls") && a.classList.add("ob-trk-pxls")
              };
              Yg = function(a, b, c, d, e) {
                  var f = b.ba("vcpmtrk");
                  if (f && f.includes(+d)) Xg(a, b, c, d, [], [], e);
                  else {
                      f = e.filter(k => 1 === k.event);
                      var g = e.filter(k => 2 === k.event);
                      e = e.filter(k => 3 === k.event);
                      a.Ni(b, d, f);
                      Xg(a, b, c, d, g, e)
                  }
              };
              Zg = function(a) {
                  a && document && document.body && a.forEach(b => {
                      b = OBR.g.createElement("img", null, "display:none;width:1px;height:1px", {
                          src: b.url,
                          referrerpolicy: "no-referrer"
                      });
                      document.body.appendChild(b)
                  })
              };
              $g = function(a) {
                  a && document && document.head && a.forEach(b => {
                      b = OBR.g.Ta("ob-pixel" + OBR.g.cj(), b.url, !0, !0);
                      OBR.g.Ob(b)
                  })
              };
              Xg = function(a, b, c, d, e, f, g) {
                  if (c = ah(c, d)) {
                      if (e && e.length) {
                          const k = e.filter(l => 2 == l.method);
                          e = e.filter(l => 1 == l.method);
                          a.observe(b, c, d, 2, e);
                          bh(a, b, c, d, k)
                      }
                      f && f.length && a.observe(b, c, d, 3, f);
                      g && g.length && a.observe(b, c, d, 4, g)
                  }
              };
              ch = function(a, b, c) {
                  if (b && b.length) {
                      a = OBR.g.H(a).querySelector(".ob-pixels");
                      const d = document.createDocumentFragment(),
                          e = g => {
                              g = OBR.g.createElement("iframe", null, "display:none;width:1px;height:1px;", {
                                  src: `https://widgets.outbrain.com/nanoWidget/externals/obPixelFrame/obPixelFrame.htm#p=${g.url}`,
                                  sandbox: "allow-scripts allow-same-origin"
                              });
                              d.appendChild(g)
                          },
                          f = g => {
                              g = OBR.g.createElement("img", null, "display:none;width:1px;height:1px;", {
                                  src: `${decodeURIComponent(g.url)}`,
                                  referrerpolicy: "no-referrer"
                              });
                              d.appendChild(g)
                          };
                      b.forEach(c ? f : e);
                      a.appendChild(d)
                  }
              };
              dh = function(a, b, c, d) {
                  if (c && c.length) {
                      (b = ah(a, b)) || OBR.error({
                          name: "JsTrackerError",
                          message: "Missing jsTracker element"
                      });
                      Wg(b);
                      var e = d.Yc() && d.Do(),
                          f = e && Vg(a, b),
                          g = document.createDocumentFragment();
                      c.forEach(k => {
                          k = OBR.g.Ta(0, k.url, !0, !1);
                          e ? (f.appendChild(k), g.appendChild(f)) : g.appendChild(k)
                      });
                      OBR.g.cf(g, e ? a : b)
                  }
              };
              ah = function(a, b) {
                  if (a) return OBR.g.H(a).querySelector(`[data-pos="${b}"]`)
              };
              bh = function(a, b, c, d, e) {
                  if (e && e.length) {
                      var f = a.Tg(b);
                      switch (parseInt(b.l("mrc50JsTrackersFiringStrategy", eh.onWidgetViewd))) {
                          case eh.onWidgetViewd:
                              fh(a, b, f, d, e);
                              break;
                          case eh.onRecViewd:
                              fh(a, b, c, d, e);
                              break;
                          case eh.onRec50Viewed:
                              fh(a, b, c, d, e, .5);
                              break;
                          case eh.reelMRC50:
                              a.observe(b, c, d, 2, e)
                      }
                  }
              };
              fh = function(a, b, c, d, e, f) {
                  b = new OBR.IntersectionObserver({
                      threshold: f ? f : 0,
                      unobserve: !0,
                      callback: a.Ni.bind(a),
                      callbackParams: [b, d, e],
                      element: c,
                      checkAbsoluteVisibility: !0
                  });
                  a.Ua.push(b);
                  b.observe()
              };
              gh = function(a, b, c = ".ob-lazy-bgimg, .ob-lazy-img") {
                  [].slice.call(OBR.g.H(b.Ka).querySelectorAll(c)).forEach(d => {
                      (new OBR.IntersectionObserver({
                          callback: a.Nr.bind(a),
                          callbackParams: [b, d, c],
                          element: d,
                          rootMargin: `${b.rootMargin}`,
                          threshold: [0, .5, 1],
                          unobserve: !0
                      })).observe()
                  })
              };
              hh = function(a, b) {
                  b && b.Ka && Array.from(OBR.g.H(b.Ka).querySelectorAll("img.ob-lazy-img")).forEach(c => {
                      c.hasAttribute("loading") && "lazy" === c.getAttribute("loading") || c.setAttribute("loading", "lazy");
                      a.hm(c)
                  })
              };
              ea = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
                  if (a == Array.prototype || a == Object.prototype) return a;
                  a[b] = c.value;
                  return a
              };
              da = ba(this);
              x("Array.prototype.includes", function(a) {
                  return a ? a : function(b, c) {
                      var d = this;
                      d instanceof String && (d = String(d));
                      var e = d.length;
                      c = c || 0;
                      for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                          var f = d[c];
                          if (f === b || Object.is(f, b)) return !0
                      }
                      return !1
                  }
              });
              x("Object.values", function(a) {
                  return a ? a : function(b) {
                      var c = [],
                          d;
                      for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
                      return c
                  }
              });
              x("Array.prototype.at", function(a) {
                  return a ? a : ha
              });
              x("Int8Array.prototype.at", ja);
              x("Uint8Array.prototype.at", ja);
              x("Uint8ClampedArray.prototype.at", ja);
              x("Int16Array.prototype.at", ja);
              x("Uint16Array.prototype.at", ja);
              x("Int32Array.prototype.at", ja);
              x("Uint32Array.prototype.at", ja);
              x("Float32Array.prototype.at", ja);
              x("Float64Array.prototype.at", ja);
              x("String.prototype.at", function(a) {
                  return a ? a : ha
              });
              x("String.prototype.replaceAll", function(a) {
                  return a ? a : function(b, c) {
                      if (b instanceof RegExp && !b.global) throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
                      return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
                  }
              });
              x("Array.prototype.flat", function(a) {
                  return a ? a : function(b) {
                      b = void 0 === b ? 1 : b;
                      var c = [];
                      Array.prototype.forEach.call(this, function(d) {
                          Array.isArray(d) && 0 < b ? (d = Array.prototype.flat.call(d, b - 1), c.push.apply(c, d)) : c.push(d)
                      });
                      return c
                  }
              });
              x("Array.prototype.values", function(a) {
                  return a ? a : function() {
                      return ka(this, function(b, c) {
                          return c
                      })
                  }
              });
              x("Object.entries", function(a) {
                  return a ? a : function(b) {
                      var c = [],
                          d;
                      for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
                      return c
                  }
              });
              if (window.OB_releaseVer && "2010741" !== window.OB_releaseVer) throw !0;
              window.OB_releaseVer = "2010741";
              var oa = "viewability click norecs issue rendered dataReturned exploreMoreRendered ready".split(" "),
                  ih = class {
                      constructor() {
                          window.OBREvents = window.OBREvents || [];
                          this.tp = window.OBREvents || [];
                          la(this);
                          this.B = {};
                          oa.forEach(a => this.B[a] = [])
                      }
                      A() {
                          na();
                          this.tp.length && this.sc()
                      }
                      sc() {
                          this.tp.forEach(a => {
                              const b = a.callback,
                                  c = a.widgetId,
                                  d = a.feedCards;
                              pa(a.name).filter(e => qa(e, b, c)).forEach(e => this.add(e, b, c, d))
                          })
                      }
                      add(a, b, c, d) {
                          this.B[a].push({
                              name: a,
                              callback: b,
                              widgetId: c,
                              feedCards: d
                          })
                      }
                      fire(a) {
                          const b = this.B[a.name];
                          b && b.filter(c => sa(c, a)).forEach(c => {
                              c.callback(a)
                          })
                      }
                  },
                  ma = new ih;
              var kh, lh;
              OBR._jsc.Q = document;
              OBR._jsc.jh = OBR._jsc.Q.getElementById.bind(OBR._jsc.Q);
              kh = OBR._jsc.Q.getElementsByTagName.bind(OBR._jsc.Q);
              lh = OBR._jsc.Q.getElementsByClassName.bind(OBR._jsc.Q);
              OBR._jsc.mh = OBR._jsc.Q.querySelectorAll.bind(OBR._jsc.Q);
              OBR._jsc.nh = OBR._jsc.Q.querySelector.bind(OBR._jsc.Q);
              OBR._jsc.S = OBR._jsc.Q.createElement.bind(OBR._jsc.Q);
              OBR._jsc.oh = OBR._jsc.Q.createDocumentFragment.bind(OBR._jsc.Q);
              OBR._jsc.ph = OBR._jsc.Q.addEventListener.bind(OBR._jsc.Q);
              OBR._jsc.qh = OBR._jsc.Q.removeEventListener.bind(OBR._jsc.Q);
              window.OBR = window.OBR || {};
              OBR.F = OBR.F || [];
              OBR.pf = OBR.pf || {};
              window.OBR$ = function(a) {
                  return (0, OBR._jsc.jh)(a)
              };
              ma.A();
              var rh, sh, th, vh, ke, je, wh, xh, zh, yh, rb, Ah, oe, ne;
              rh = a => {
                  if (a && "string" === typeof a) return a.split("#")[0].replace(/\+/g, " ").split("&").reduce((b, c) => {
                      c = c.split("=");
                      c[0] && (b[c[0].toLowerCase()] = c[1] ? decodeURIComponent(c[1]) : "");
                      return b
                  }, {})
              };
              sh = a => {
                  a = (a.OB_amp ? a.context : a).location.href;
                  return rh(a && 0 < a.length && 0 <= a.indexOf("?") ? a.split("?")[1] : "")
              };
              th = a => {
                  const b = sh(a || window);
                  return (c, d) => {
                      try {
                          if (c) {
                              const e = c.toLowerCase();
                              if (e in b) return b[e]
                          }
                      } catch (e) {}
                      return d
                  }
              };
              OBR._jsc.qb = a => {
                  const b = document.createElement("div");
                  b.innerHTML = a;
                  return b.firstChild
              };
              OBR._jsc.uh = (a, b) => {
                  ["href", "onmousedown", "ontouchstart", "target", "onClick"].forEach(c => {
                      const d = b.getAttribute(c);
                      d && a.setAttribute(c, d)
                  })
              };
              OBR._jsc.T = (a => {
                  let b = "transform";
                  "undefined" === typeof a.style[b] && ["webkit", "Moz", "O", "ms"].every(function(c) {
                      c += "Transform";
                      return "undefined" !== typeof a.style[c] ? (b = c, !1) : !0
                  });
                  return b
              })(window.document.createElement("div"));
              vh = a => {
                  const [b, c, d, e] = a.split(" ");
                  return [b, c || b, d || b, e || c || b]
              };
              ke = a => {
                  let b = "";
                  const c = OBR.g.Pf(OBR.i.pD);
                  a = OBR.g.Pf(a.Bc());
                  if (c || a) b = a || c;
                  return b ? ["extid2", encodeURIComponent(b)] : []
              };
              je = () => {
                  try {
                      return window.context.pageViewId64
                  } catch (a) {
                      return null
                  }
              };
              OBR._jsc.Dc = a => a && 0 === Object.keys(a).length && Object.getPrototypeOf(a) === Object.prototype;
              wh = class {
                  start() {
                      this.reset();
                      this.startTime = Date.now();
                      return this
                  }
                  stop() {
                      this.endTime = Date.now();
                      this.time = this.endTime - this.startTime;
                      return this
                  }
                  reset() {
                      this.endTime = this.startTime = this.time = 0;
                      return this
                  }
                  getTime() {
                      return this.time
                  }
              };
              xh = () => {
                  try {
                      const {
                          hostname: a
                      } = new URL(document.referrer);
                      return a === window.location.hostname
                  } catch (a) {
                      return OBR.logger.error("same site check failed", a), !1
                  }
              };
              zh = (a, b, c, d, e) => {
                  if (a && b && OBR.i.Gx) {
                      var f = document.createElement("div");
                      f.appendChild(b);
                      yh(e, f, d);
                      a.attachShadow(c);
                      a.shadowRoot.appendChild(f)
                  }
              };
              yh = (a, b, c) => {
                  if (a) {
                      var d = () => {
                          b && c && (a.classList.contains(c) ? b.classList.add(c) : b.classList.remove(c))
                      };
                      (new MutationObserver(() => d())).observe(a, {
                          attributes: !0,
                          subtree: !0,
                          attributeFilter: ["class"]
                      });
                      d()
                  }
              };
              rb = (a, b) => OBR._jsc.z(function*() {
                  return new Promise((c, d) => {
                      let e = !1;
                      setTimeout(() => {
                          e || (e = !0, c())
                      }, b);
                      try {
                          a(e, c)
                      } catch (f) {
                          e = !0, d(f)
                      }
                  })
              });
              OBR._jsc.me = a => "number" === typeof a && !isNaN(a) && isFinite(a);
              Ah = a => a && (a = parseInt(a.feedIdx || a.originWidgetIdx), "number" === typeof a && !isNaN(a) && (a = OBR.F[a])) && (a = a.v()) ? OBR.Ya.Ls(a) : null;
              oe = a => {
                  try {
                      const b = window.OB_releaseVer,
                          c = OBR.env,
                          d = {},
                          e = {};
                      d.name = "obm-UrlCallLength";
                      d.version = b;
                      d.env = c || 1;
                      e.callUrl = a;
                      e.callUrlLength = a.length;
                      d.extra = JSON.stringify(e);
                      OBR.ya.send(OBR.i.V.Lc, OBR.i.vy, d)
                  } catch (b) {}
              };
              ne = a => {
                  try {
                      const b = new URL(a),
                          c = b.searchParams,
                          d = c.get("ogn");
                      if (!d) return a;
                      const e = new URL(decodeURIComponent(d));
                      e.search = "";
                      e.hash = "";
                      c.set("ogn", e.href);
                      return b.href
                  } catch (b) {
                      return a
                  }
              };
              var Bh, xa;
              OBR._jsc.C = {
                  Yq: "OB-CLDT",
                  qc: "OB-CNSNT-2",
                  $z: "OB-TPCS",
                  yM: "OB-OD-LSD",
                  ai: "OB-USER-TOKEN",
                  Ql: "OB-USER-TOKEN-CREATION",
                  zM: "_pdfps",
                  Sq: "OB-AD-BLOCKER-STAT",
                  Tq: "OB-AD-BLOCKER-WL-STAT",
                  BM: "OB-PUB-IN",
                  br: "OB-FD-TO",
                  ar: "OB-FDE",
                  Vh: "OB-CCPA",
                  sM: "OB-INTERACTION-STASH",
                  Gl: "ob-pub-overlay",
                  lz: "OB-lastPageViewInfo",
                  wM: "OB:LSU",
                  Ge: "OB-SKELETON-STRUCT",
                  vM: "OB-EM-FREQUENCY",
                  lr: "OB-RN-FREQUENCY",
                  zl: "OB-SEID",
                  jz: "_iiq_ab_group_237851792",
                  gz: "_iiq_fdata_237851792",
                  hz: "_iiq_fdata_432050809",
                  iz: "_iiq_fdata_129618961"
              };
              Bh = class {
                  constructor() {
                      this.cache = {};
                      this.Ij = !1
                  }
                  U() {
                      if (this.xe) return this.xe;
                      try {
                          window.localStorage && window.localStorage.getItem && (this.xe = window.localStorage)
                      } catch (a) {} finally {
                          this.xe || (this.xe = Ca())
                      }
                      return this.xe
                  }
                  get(a, b) {
                      let c = !this.Ij && this.cache[a] ? this.cache[a] : this.U().getItem(a);
                      if (this.wo) try {
                          window.localStorage.removeItem(a)
                      } catch (d) {}
                      return null !== c ? c : b
                  }
                  set(a, b) {
                      this.Ij ? this.U().setItem(a, b) : this.cache[a] = b
                  }
                  delete(a) {
                      this.Ij || delete this.cache[a];
                      this.U().removeItem(a)
                  }
                  Jf(a) {
                      this.fc =
                          a.fc();
                      this.wo = OBR.i.wt || 1 === OBR._jsc.B("disableStorageAndCookies") || !this.fc && Ma(a);
                      this.Ij = !0;
                      this.wo && (Da(this), Ea(this));
                      Fa(this);
                      OBR.localStorageAvailable = !this.wo
                  }
              };
              xa = new Bh;
              var Ch = class {
                      constructor() {
                          try {
                              document.currentScript && document.currentScript.src && (this.gx = new URL(document.currentScript.src), this.gx.href.includes("cookieSync.js") && this.A())
                          } catch (a) {
                              "undefined" !== typeof OBR && OBR.error && OBR.error({
                                  name: "obm-cookieSyncError",
                                  message: "error while loading cookieSync process"
                              })
                          }
                      }
                      A() {
                          this.CL = this.gx.searchParams;
                          var a = "",
                              b = F(this, "obcnsnt", "");
                          "" !== F(this, "cnsnt", "") && "" !== b && (a = "&obcnsnt=" + b.toString());
                          b = F(this, "gdpr", "0");
                          const c = F(this, "gdprVer", "");
                          a = {
                              qy: "https://widgets.outbrain.com",
                              Cw: F(this, "pubId", null),
                              Om: "true" == F(this, "dmpenabled", "true") && "false" == F(this, "oo", "false"),
                              kt: F(this, "filterDMP", ""),
                              Ys: F(this, "enu", ""),
                              Ds: a,
                              Ct: b,
                              Eu: "null" !== c && "1" === b,
                              Cb: c,
                              us: F(this, "ccpa", "1---"),
                              country: F(this, "country", ""),
                              Jw: `&obRecsAbtestAndVars=${F(this,"recAbTest","")}`,
                              wu: F(this, "initiator", "ob")
                          };
                          a.Om && Oa(this, a)
                      }
                      mo() {
                          this.Bd = "undefined" !== typeof OBR && OBR.i && OBR.i.Bd ? OBR.i.Bd : "ob_iframe";
                          this.Dc = document.getElementById(this.Bd);
                          if (!this.Dc) {
                              this.Dc = document.createElement("iframe");
                              this.Dc.id = this.Bd;
                              this.Dc.style.display = "none";
                              this.Dc.style.width = "1px";
                              this.Dc.style.height = "1px";
                              this.Dc.src = this.yF || "about:blank";
                              this.Xn = document.getElementById("ob_holder");
                              this.Xn || (this.Xn = document.body);
                              let a;
                              null == (a = this.Xn) || a.appendChild(this.Dc)
                          }
                      }
                  },
                  Dh = new Ch;
              OBR.g = OBR.g || function() {
                  var a = {},
                      b = {},
                      c = document,
                      d = OBR;
                  b.cb = function() {
                      a.Mc = d;
                      return a
                  };
                  b.A = function(e) {
                      d = e
                  };
                  b.Cg = function() {
                      return function() {}
                  };
                  b.gH = function() {
                      if ("ontouchstart" in window || navigator.maxTouchPoints || window.DocumentTouch && document instanceof DocumentTouch) var e = !0;
                      else e = ["(", " -webkit- -moz- -o- -ms- ".split(" ").join("touch-enabled),("), "heartz)"].join(""), e = window.matchMedia && window.matchMedia(e).matches;
                      return e
                  };
                  b.zn = function() {
                      const e = OBR.ca.Ga;
                      return e.width > e.height ? "landscape" :
                          "portrait"
                  };
                  b.lu = function() {
                      var e = window.jQuery;
                      return void 0 !== e ? !(/1\.(0|1|2|3|4)\.(0|1)/.test(e.fn.jquery) || /^1\.1/.test(e.fn.jquery) || /^1\.2/.test(e.fn.jquery) || /^1\.3/.test(e.fn.jquery)) : !1
                  };
                  b.v = function(e) {
                      return null === e || isNaN(e) ? null : d.Kb("outbrain_widget_" + e)
                  };
                  b.H = function(e) {
                      return e.shadowRoot || e
                  };
                  b.Xi = function() {
                      return d.Kb("ob_holder")
                  };
                  b.QC = function(e) {
                      var f = b.Xi();
                      null === f && (f = d.g.createElement("div", "ob_holder"), f.style.display = "none", e ? d.g.insertBefore(f, e) : OBR._jsc.Q.body.appendChild(f))
                  };
                  b.mo = function(e) {
                      var f = d.Kb(e);
                      f || (f = d.g.createElement("iframe", e), e = f.style, e.display = "none", e.width = "1px", e.height = "1px", f.src = "about:blank", (e = b.Xi()) || (e = b.Ht()), d.g.cf(f, e))
                  };
                  b.Ht = function() {
                      if (c.body) return c.body;
                      var e = d.g.Db("", "", "body", !0);
                      return 0 >= e.length ? c.lastChild : e[0]
                  };
                  b.createElement = function(e, f, g, k) {
                      var l;
                      e = c.createElement(e);
                      "string" === typeof f && e.setAttribute("id", f);
                      "string" === typeof g && (e.style.cssText = g);
                      for (l in k) k.hasOwnProperty(l) && e.setAttribute(l, k[l]);
                      return e
                  };
                  b.ia =
                      function(e) {
                          var f = c.createElement("style"),
                              g = c.body ? "string" === typeof c.body.style.WebkitAppearance : !1;
                          f.type = "text/css";
                          c.getElementsByTagName("head")[0].appendChild(f);
                          f[g ? "innerText" : "innerHTML"] = e
                      };
                  b.xu = function(e, f) {
                      const g = OBR._jsc.S("style");
                      g.textContent = e;
                      f.insertBefore(g, f.firstChild)
                  };
                  b.NF = function(e) {
                      var f = OBR.i.Kk,
                          g = e && e.v();
                      g && OBR.g.H(g) && (e = OBR._jsc.S("style"), g = OBR.g.H(g).querySelector(".ob-widget"), b.la(e, "ob-static-css"), e.textContent = f, g && g.insertBefore(e, g.firstChild))
                  };
                  b.Ta =
                      function(e, f, g, k, l, q) {
                          e = c.createElement("script");
                          e.type = d.i.qH;
                          e.src = f;
                          e.charset = "UTF-8";
                          e.async = !!g;
                          e.defer = !1;
                          if (q)
                              for (const h in q) q.hasOwnProperty(h) && e.setAttribute(h, q[h]);
                          k && d.g.Ab(e, "load", function(h) {
                              var m = h.target;
                              m && setTimeout(function() {
                                  m.parentNode.removeChild(m)
                              }, 3E3)
                          });
                          typeof l === d.i.Xe && d.g.Ab(e, "load", l);
                          return e
                      };
                  b.ZM = function(e, f) {
                      e = d.g.createElement("link", e);
                      e.setAttribute("rel", "stylesheet");
                      e.setAttribute("type", d.i.XC);
                      f && e.setAttribute("href", f);
                      return e
                  };
                  b.OB = function(e) {
                      var f =
                          d.Kb("ob_iframe");
                      f && (f.src = e)
                  };
                  b.EB = function(e) {
                      var f = OBR.Kb(d.i.Bd);
                      d.g.gf(f) && d.g.gf(f.parentNode) && f.parentNode.removeChild(f);
                      d.g.mo(d.i.Bd);
                      d.g.OB(e)
                  };
                  b.rand = function(e) {
                      e = isNaN(e) ? 1E5 : e;
                      return Math.floor(Math.random() * e)
                  };
                  b.Ob = function(e) {
                      var f = c.getElementsByTagName("head");
                      try {
                          if (f && 0 < f.length) f[0].appendChild(e);
                          else {
                              var g = c.getElementsByTagName("script");
                              g[0].insertBefore(e, g[0].firstChild)
                          }
                      } catch (k) {
                          d.logger.log("Err insertToHead:" + k)
                      }
                  };
                  b.oa = function(e) {
                      return encodeURIComponent(e)
                  };
                  b.gf =
                      function(e) {
                          return null !== e
                      };
                  b.Oa = function(e) {
                      const f = OBR._jsc.S("div");
                      f.innerHTML = e;
                      return f.firstChild
                  };
                  b.qF = e => {
                      var f = window;
                      try {
                          return e.split(".").every(g => {
                              if ("object" !== typeof f || null === f || !(g in f)) return !1;
                              f = f[g];
                              return !0
                          })
                      } catch (g) {
                          return !1
                      }
                  };
                  b.YG = function(e) {
                      var f = !1;
                      if (b.jf(e)) return !1;
                      var g = e.Rg().recMode || "";
                      e = e.Rg().dynamicWidgetLayout || "";
                      g = d.i.JJ[g] || "";
                      "2" === g && "1" === (d.i.KJ[e] || "") && (f = !0);
                      f || "1" !== g && "3" !== g || (f = !0);
                      return f
                  };
                  b.jf = function(e) {
                      return void 0 === e || null === e
                  };
                  b.kH =
                      function(e) {
                          return b.jf(e) || "" === e
                      };
                  b.getElementsByClassName = function(e, f) {
                      f || (f = document);
                      return f.getElementsByClassName ? f.getElementsByClassName(e) : b.Db("class", e, "*", !0, !0, f)
                  };
                  b.Db = function(e, f, g, k, l, q) {
                      var h;
                      var m = [];
                      g = g || "*";
                      k = !!k;
                      l = !!b.kH(l);
                      g = q ? q.getElementsByTagName(g) : c.getElementsByTagName(g);
                      q = 0;
                      for (h = g.length; q < h; q += 1) {
                          var p = "class" === e ? g[q].className : g[q].getAttribute(e);
                          null !== p && (!1 === l && (p = p.toLowerCase(), f = f.toLowerCase()), (p = "" === e ? !0 : k ? -1 < p.indexOf(f) : p === f) && m.push(g[q]))
                      }
                      return m
                  };
                  b.Cf = function(e, f) {
                      var g = window;
                      g.removeEventListener ? g.removeEventListener(e, f, !0) : g.detachEvent && g.detachEvent("on" + e, f)
                  };
                  b.Ab = function(e, f, g) {
                      e.addEventListener ? e.addEventListener(f, g, !0) : e.attachEvent && typeof e.attachEvent === d.i.Xe && e.attachEvent("on" + f, function() {
                          g.call(e)
                      })
                  };
                  b.cf = function(e, f) {
                      try {
                          f.appendChild(e)
                      } catch (g) {
                          d.logger.log("Fail insert into Dom:" + g)
                      }
                  };
                  b.Zp = function(e) {
                      e = d.Kb(e);
                      !b.jf(e) && b.gf(e.parentNode) && e.parentNode.removeChild(e)
                  };
                  b.xh = function(e) {
                      e && OBR.g.gf(e.parentNode) &&
                          e.parentNode.removeChild(e)
                  };
                  b.insertBefore = function(e, f) {
                      return f && f.parentNode ? f.parentNode.insertBefore(e, f) : null
                  };
                  b.Kc = function(e, f) {
                      var g = /^htt(p|ps)?:\/\/127\.0\.0\.1(:\d\d\d\d)?(\/|$)/i,
                          k = /^https?:\/\/simulator\.[\w]*\.service\.[\w]*\.consul/i;
                      return /^htt(p|ps)?:\/\/([\w\-]*|[\w\-]*\.[\w\-]*)\.outbrain\.com(:\d\d\d\d)?(\/|$)/i.test(e) || g.test(e) || k.test(e) ? e : f
                  };
                  b.kL = function(e) {
                      e = e.replace(/^(\s*)/g, "");
                      var f = c.createElement("div");
                      f.innerHTML = e;
                      return f.childNodes
                  };
                  b.Ye = function(e, f) {
                      return e ?
                          e.getAttribute(f) : null
                  };
                  b.Rb = function(e, f, g) {
                      e && e.setAttribute(f, g)
                  };
                  b.oJ = function(e) {
                      e && e.removeAttribute("noscroll")
                  };
                  b.la = function(e, f) {
                      var g = new RegExp("[ '\"|]" + f + "[ '\"|]");
                      e && !g.test("|" + e.className + "|") && (e.className += " " + f)
                  };
                  b.Ea = function(e, f) {
                      e && typeof f === d.i.Ux && (e.classList ? e.classList.remove(f) : e.className = e.className.replace(new RegExp("(^|\\b)" + f + "(\\b|$)", "gi"), " "))
                  };
                  b.qL = function(e) {
                      if (e && "string" === d.i.Ux)
                          if (e.classList) e.classList.toggle("on");
                          else {
                              var f = e.className.split(" "),
                                  g = f.indexOf("on");
                              0 <= g ? f.splice(g, 1) : f.push("on");
                              e.className = f.join(" ")
                          }
                  };
                  b.L = th();
                  b.FC = () => {
                      b.L = th(null)
                  };
                  b.LE = () => {
                      const e = b.L("skipFilters", null);
                      return ["true", "run_only_dedup"].includes(e) ? e : null
                  };
                  b.Oa = OBR._jsc.qb;
                  b.Xt = function() {
                      var e = OBR.settings && OBR.settings.publisherSubscriptionSelector;
                      const f = OBR.settings && OBR.settings.publisherLoginIndication;
                      return e ? (e = OBR._jsc.nh(e)) ? (e = e.innerText) && e.toLowerCase() === f.toLowerCase() ? "0" : "1" : "1" : null
                  };
                  b.CC = function(e) {
                      "string" === typeof e && 0 < e.indexOf("#") &&
                          (e = e.substr(0, e.lastIndexOf("#")));
                      return e
                  };
                  b.xs = function(e) {
                      var f = d.i.Xa + "/strip_default.png";
                      e.src !== f && (e.alt = "", e.title = "", e.src = f, e.parentElement && (e.parentElement.style.overflow = "hidden"))
                  };
                  b.qD = function() {
                      var e = null,
                          f;
                      if ("string" === typeof window.OB_MP_feed) e = window.OB_MP_feed;
                      else if ((f = c.getElementsByTagName("head")) && 0 < f.length) {
                          var g = f[0].getElementsByTagName("link");
                          for (f = 0; f < g.length; f += 1) {
                              var k = g[f];
                              if (null !== k.type && ("application/rss+xml" === k.type || "application/atom+xml" === k.type) &&
                                  null !== k.href && "" !== k.href) {
                                  e = k.href;
                                  break
                              }
                          }
                      }
                      return e
                  };
                  b.cc = function(e, f) {
                      var g = "";
                      if (!e || !f) return g;
                      window.getComputedStyle ? (e = OBR._jsc.Q.defaultView.getComputedStyle(e, null)) && (g = e.getPropertyValue(f)) : e.currentStyle && (f = f.replace(/\-(\w)/g, function(k, l) {
                          return l.toUpperCase()
                      }), g = e.currentStyle[f]);
                      return g
                  };
                  b.DN = function(e) {
                      if (!e) return null;
                      if (window.getComputedStyle) var f = OBR._jsc.Q.defaultView.getComputedStyle(e, null);
                      else if (e.currentStyle) var g = e.currentStyle;
                      return function(k) {
                          let l =
                              null;
                          f ? l = f.getPropertyValue(k) : g && (k = k.replace(/\-(\w)/g, function(q, h) {
                              return h.toUpperCase()
                          }), l = e.currentStyle[k]);
                          return l
                      }
                  };
                  b.$J = function() {
                      var e = b.Xi();
                      if (b.gf(e)) {
                          var f = d.g.createElement("span", "ob_a");
                          b.insertBefore(f, e);
                          f.innerHTML = ".";
                          var g = b.cc(f, "color");
                          b.Zp("ob_a");
                          f = d.g.createElement("a", "ob_a");
                          f.setAttribute("href", "void(0)");
                          f.innerHTML = ".";
                          b.insertBefore(f, e);
                          e = b.cc(f, "color");
                          b.Zp("ob_a");
                          g = "rgb(0, 0, 0)" === g || "#000000" === g ? "#555" : g;
                          b.ia(".ob-tcolor{color:" + g + "} .ob-lcolor{color:" +
                              e + "} .ob-bgtcolor{background-color:" + g + "} .item-link-container:hover .ob-tcolor{border-color:" + g + "} ")
                      }
                  };
                  b.Gn = function() {
                      var e = b.Wi("property", "og:url", "meta", "content");
                      null === e && (e = b.Wi("rel", "canonical", "link", "href"));
                      null === e && (e = window.location.href);
                      return e
                  };
                  b.Wi = function(e, f, g, k) {
                      var l = null;
                      e = b.Db(e, f, g, !1);
                      null !== e && 0 < e.length && (l = e[0].getAttribute(k));
                      return l
                  };
                  b.jw = function(e) {
                      let f = e.l("isDMPEnabled", !0) && !e.o("oo", !1);
                      var g = e.l("tracking", !1);
                      const k = e.l("filterDMP", ""),
                          l = e.o("pid",
                              ""),
                          q = e.o("country", ""),
                          h = e.gj();
                      let m = "";
                      const p = e.zd(""),
                          r = e.o("cnsnt", ""),
                          t = e.o("gdpr", "0") + "",
                          u = null != d.ga.Cb && "1" === t,
                          v = d.ga.Xb || "1---",
                          w = OBR.He.bE();
                      "" !== r && "" !== p && (m = "&obcnsnt=" + p.toString());
                      !1 !== g || !0 !== f || !0 !== w || !1 !== d.i.gw || h || (f = f && w, g = e.o("obRecsAbtestAndVars", "") ? `&obRecsAbtestAndVars=${e.o("obRecsAbtestAndVars","")}` : "", e = e.o("enu", ""), Oa(Dh, {
                          qy: d.i.Xa,
                          Cw: l,
                          Om: f,
                          kt: k,
                          Ys: e,
                          Ds: m,
                          Ct: t,
                          Eu: u,
                          Cb: OBR.ga.Cb,
                          us: v,
                          country: q,
                          Jw: g,
                          wu: "ob"
                      }), d.Kb(d.i.Bd) && (d.i.gw = !0))
                  };
                  a.bF = function(e) {
                      var f =
                          e.querySelector(".ob-grid-header-text,.ob-widget-text");
                      if (!f) return 3;
                      var g = e.querySelector(".ob_what");
                      const k = e.querySelector(".ob-widget-header");
                      f.style.flex = "none";
                      e = f.offsetWidth;
                      f.style.flex = "auto";
                      f = g.offsetWidth;
                      g = k.offsetWidth;
                      return g - e >= f ? 3 : g - e >= f - 86 ? 2 : 1
                  };
                  b.SL = function(e) {
                      if (e && e.querySelector(".ob_auto_logo")) switch (a.bF(e)) {
                          case 1:
                              e.querySelector(".ob_what .ob_auto_logo_container").classList.add("ob_only_amelia");
                          case 2:
                              e.querySelector(".ob_what .ob_what_is_text").style.display = "none"
                      }
                  };
                  b.dF = function() {
                      var e = b.cj(8);
                      "string" === typeof window.name && ("" === window.name || -1 < window.name.indexOf("frame")) ? (window.name = e, e = window.name) : "string" === typeof window.name && "" !== window.name && (e = window.name);
                      return e = d.g.oa(e.substring(0, 9))
                  };
                  b.cj = function(e) {
                      var f;
                      var g = [];
                      e = "number" === typeof e ? e : 8;
                      for (f = 0; f < e; f += 1) g.push("0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(61 * Math.random())));
                      return g.join("")
                  };
                  b.yi = function(e) {
                      for (var f = "", g = 0; g < e.length; g++) f = f.concat(e[g] ?
                          "1" : "0");
                      return parseInt(f, 2)
                  };
                  b.Pf = function(e) {
                      return e && 110 >= e.length ? e : ""
                  };
                  b.Yk = function(e) {
                      return e ? 8 > e.length ? (d.logger.log("pubImpID min length 8"), "") : 64 < e.length ? (d.logger.log("pubImpID max length 64"), e.substr(0, 64)) : e : ""
                  };
                  b.uE = function(e) {
                      for (var f in d.pf)
                          if (d.pf.hasOwnProperty(f) && d.pf[f].G() === e) return d.pf[f];
                      return null
                  };
                  b.pG = function(e, f) {
                      for (f = f.parentNode; null !== f;) {
                          if (f === e) return !0;
                          f = f.parentNode
                      }
                      return !1
                  };
                  b.Ve = function(e, f) {
                      return "function" !== typeof e ? null : void 0 === f ? e() : e(f)
                  };
                  b.cD = function(e, f) {
                      return e * f
                  };
                  b.dE = function() {
                      var e = document.location.href;
                      if (!e || "" === e) return [];
                      e = e.replace("", "").replace("http://", "").replace("https://", "").replace("www.", "").replace("www2.", "").split("/");
                      e.pop();
                      return 0 < e.length ? e : []
                  };
                  b.JE = function() {
                      return "http" + ("https:" === c.location.protocol ? "s" : "")
                  };
                  b.Bu = function(e, f) {
                      f.parentNode.insertBefore(e, f.nextSibling)
                  };
                  b.GE = function() {
                      var e = OBR._jsc.jh("widgetVersionSync");
                      if (null === e) {
                          e = b.createElement("iframe", "widgetVersionSync");
                          var f =
                              b.createElement("div", null, "display:none; height:0px; width:0px; border:none;");
                          f.appendChild(e);
                          b.Ht().appendChild(f)
                      }
                      return e
                  };
                  b.cM = function(e) {
                      var f = window.OB_releaseVer;
                      isNaN(f) || isNaN(e) || f >= e || (e = b.JE() + "://widgets.outbrain.com/external/sync/outbrainjs.html?needToBeVer=" + e.toString(), b.GE().src = e)
                  };
                  b.qB = function(e) {
                      e = e.l("widgetVersionSync", 0);
                      isNaN(e) || "" === e || (e = parseInt(e, 10) || 0, b.cM(e))
                  };
                  b.Fa = function(e, f) {
                      xa.set(e, f)
                  };
                  b.NE = function() {
                      var e = Math.round(16777215 * Math.random());
                      return "rgb(" +
                          (e >> 16) + ", " + (e >> 8 & 255) + ", " + (e & 255) + ")"
                  };
                  b.U = function(e, f) {
                      return xa.get(e, f)
                  };
                  b.xj = function() {
                      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                  };
                  b.Zd = function(e) {
                      xa.delete(e)
                  };
                  b.KL = function(e) {
                      var f = {};
                      f.cpv = e[0];
                      f.convPerc = e[1];
                      f.convPixel = e[2];
                      f.vidId = e[3];
                      f.player = e[4];
                      f.pos = e[5];
                      f.adId = e[6];
                      f.docEncId = e[7];
                      f.origUrl = e[8];
                      f.trafficUrl = e[9];
                      f.duration = e[10];
                      f.widgetIdx = e[11];
                      f.title = e[12];
                      f.sourceName = e[13];
                      f.reqId = e[14];
                      f.platform = e[15];
                      f.lang = e[16];
                      f.uuid = e[17];
                      f.publisherId = e[18];
                      f.sourceId = e[19];
                      f.widgetNumberId = e[20];
                      f.campaignId = e[21];
                      f.location = e[22];
                      f.timestamp = e[23];
                      return f
                  };
                  b.assign = function(e, f) {
                      for (var g in f) f.hasOwnProperty(g) && (e[g] = f[g]);
                      return e
                  };
                  b.ED = function(e, f) {
                      if ("_blank" === (f.getAttribute("target") || "_self"))
                          for (var g in e) {
                              d.g.ie("obm-firePixelBeforeRedirect", "pixel fired before redirect", !1, 10);
                              f = OBR._jsc.S("img");
                              var k = e[g];
                              k = d.g.YA(k);
                              f.setAttribute("src", k);
                              f.setAttribute("height", "1");
                              f.setAttribute("width", "1");
                              OBR._jsc.Q.body.appendChild(f)
                          } else d.g.ie("obm-firePixelBeforeRedirectCancelled",
                              "pixel cancelled redirect on same page ", !1, 10)
                  };
                  b.YA = function(e) {
                      if (e && e.length) return e = -1 < e.indexOf("?") ? e + ("&t=" + Date.now()) : e + ("?t=" + Date.now())
                  };
                  b.FD = function(e) {
                      e && document && OBR._jsc.Q.body && e.forEach(f => {
                          let g = OBR.g.createElement("img", null, "display:none;width:1px;height:1px");
                          g.src = f;
                          OBR._jsc.Q.body.appendChild(g)
                      })
                  };
                  b.ie = function(e, f, g, k) {
                      (isNaN(k) || 0 === d.g.rand(k)) && OBR.error({
                          name: e,
                          message: f,
                          zN: !0 === g
                      })
                  };
                  b.jk = e => e && e.split("&").reduce((f, g) => {
                      g = g.split("=");
                      f[g[0]] = g[1];
                      return f
                  }, {});
                  b.Ih = e => Object.keys(e).reduce((f, g) => {
                      f.push(`${g}=${encodeURIComponent(e[g])}`);
                      return f
                  }, []).join("&");
                  b.ik = e => {
                      if (e && "string" === typeof e && (e = e.split("-")) && 2 === e.length) return {
                          Pk: e[1],
                          Zk: e[0]
                      }
                  };
                  b.attachShadow = zh;
                  b.yy = e => {
                      const f = e.v();
                      if (f && OBR.i.Gx) {
                          var g = f.children[0],
                              k = e.Vi();
                          e = e.Kg();
                          b.attachShadow(f, g, {
                              mode: "open"
                          }, k, e)
                      }
                  };
                  b.$t = e => Math.floor(Math.random() * (Math.floor(e) + 1));
                  b.Zt = (e, f) => Math.floor(Math.random() * f) + e;
                  b.A(OBR);
                  return b
              }();
              OBR.Mf = function(a, b, c, d, e, f, g, k, l) {
                  var q = this;
                  var h = 0;
                  l = "function" === typeof l ? l : OBR.g.cD;
                  q.start = function() {
                      h += 1;
                      if (OBR.g.Ve(a, h)) OBR.g.Ve(b, h);
                      else if (OBR.g.Ve(k, h)) OBR.g.Ve(d, h);
                      else if (h === f && 1E3 !== f) OBR.g.Ve(d, h);
                      else {
                          OBR.g.Ve(c, h);
                          var m = g ? l(h, e) : e;
                          setTimeout(function() {
                              q.start()
                          }, m)
                      }
                  };
                  q.start()
              };
              OBR.Ci = OBR.Ci || {
                  Lu: function() {
                      return "complete" === OBR._jsc.Q.readyState
                  },
                  $u: function() {
                      return "interactive" === OBR._jsc.Q.readyState || this.Lu()
                  }
              };
              OBR.Hi = function() {
                  var a = {},
                      b = [];
                  a.add = function(c) {
                      b.push(c)
                  };
                  a.remove = function(c) {
                      b.splice(c, 1)
                  };
                  a.top = function() {
                      return 0 < b.length ? b.shift() : null
                  };
                  a.Ed = function() {
                      return 0 >= b.length
                  };
                  a.Zi = function() {
                      return b
                  };
                  a.ws = function() {
                      b = []
                  };
                  return a
              };
              OBR.Promise = function() {
                  function a(d, e) {
                      b.then = "resolve" === d ? function(k) {
                          k && k(e)
                      } : function(k, l) {
                          l && l(e)
                      };
                      b.resolve = b.reject = function() {
                          throw Error("Promise already completed.");
                      };
                      for (var f, g = 0; f = c[g++];) f[d] && f[d](e);
                      c = void 0
                  }
                  var b = {},
                      c = [];
                  b.then = function(d, e) {
                      c.push({
                          resolve: d,
                          reject: e
                      })
                  };
                  b.resolve = function(d) {
                      a("resolve", d)
                  };
                  b.reject = function(d) {
                      a("reject", d)
                  };
                  return b
              };
              OBR.Ar = function() {
                  var a = {},
                      b = "00.000",
                      c = null,
                      d = null,
                      e = 0;
                  a.start = function() {
                      null === c && (c = new Date);
                      null !== d && (e += new Date - d)
                  };
                  a.stop = function() {
                      var f = new Date(new Date - c - e),
                          g = f.getUTCSeconds();
                      f = f.getUTCMilliseconds();
                      d = new Date;
                      return b = (9 < g ? g : "0" + g) + "." + (99 < f ? f : 9 < f ? "0" + f : "00" + f)
                  };
                  return a
              };
              OBR.Te = OBR.Te || function(a, b, c) {
                  var d;
                  return function() {
                      var e = this,
                          f = arguments,
                          g = c && !d;
                      clearTimeout(d);
                      d = setTimeout(function() {
                          d = null;
                          c || a.apply(e, f)
                      }, b);
                      g && a.apply(e, f)
                  }
              };
              OBR.Bq = OBR.Bq || ((a, b) => {
                  let c;
                  return function() {
                      const d = arguments;
                      c || (a.apply(this, d), c = !0, setTimeout(() => c = !1, b))
                  }
              });
              OBR.i = OBR.i || function() {
                  var a = {},
                      b = {},
                      c = OBR,
                      d = window;
                  b.Dz = "opera";
                  b.dr = "firefox";
                  b.ll = "chrome";
                  b.vr = "safari";
                  b.rz = "mozilla";
                  b.Ty = "edge";
                  b.ks = "boolean";
                  b.Ux = "string";
                  b.JN = "object";
                  b.xL = "undefined";
                  b.HN = "number";
                  b.Xe = "function";
                  b.Bd = "ob_iframe";
                  b.Tu = !0;
                  b.TN = 0;
                  b.el = "outbrain_widget_";
                  b.qH = "text/javascript";
                  b.XC = "text/css";
                  b.gl = d;
                  b.doc = document;
                  b.vD = c.g.L("obFakeRefParam", !1);
                  b.vt = "true" === OBR.g.L("forceDemand", !1);
                  b.jc = window.OBBridge;
                  b.eb = "undefined" !== typeof b.jc && (b.jc.isBridge || b.jc.extraParams);
                  b.Rw = b.Rw || (d.OB_ampReferrer ? d.OB_ampReferrer : b.eb ? "https://app-sdk.outbrain.com/" : b.vD || document.referrer);
                  b.Xp = c.g.oa(b.Rw);
                  b.Mv = document.location.href;
                  b.CN = c.g.oa(b.Mv);
                  b.lg = !1;
                  b.Dq = "";
                  b.Pp = "";
                  b.$a = navigator.userAgent.toLowerCase();
                  b.os = navigator.platform.toLowerCase();
                  b.startTime = Date.now();
                  var e = b.$a;
                  b.Wb = /edge/.test(e) ? b.Ty : /opera/.test(e) ? b.Dz : /firefox/.test(e) ? b.dr : /chrome/.test(e) ? b.ll : /safari/.test(e) ? b.vr : b.rz;
                  b.hh = /iphone|ipad|ipod/.test(e) && !d.navigator.standalone && b.Wb !== b.vr || /fbav|fban|gsa|twitter/.test(e);
                  b.Pl = /fbav|fban/.test(e) ? "facebook" : /gsa/.test(e) ? "google" : /twitter/.test(e) ? "twitter" : "";
                  b.M = !!/(mobi|iphone|ipod|symbian|android|windows ce|blackberry|palm|ipad)/i.test(e);
                  b.ff = !window.uM && !!b.$a.match(/ipad|iphone|ipod/) || !!(b.$a.match(/mac/) && "ontouchend" in document);
                  b.Ke = "undefined" !== typeof window.OB_amp;
                  b.nk = "";
                  b.BI = window.OB_platformType || null;
                  a.$E = () => {
                      if ("safari" === b.Wb) {
                          var k = /iphone|ipad|ipod|macintosh/.test(b.$a) && b.$a.match(/version\/(\d+)\.(\d+)(?:\.(\d+))?/);
                          if (k && Array.isArray(k) &&
                              4 === k.length && (k = k[1])) return Number(k)
                      }
                  };
                  b.py = a.$E();
                  b.Wj = (() => {
                      if (b.Ke && b.ff) return !1;
                      try {
                          return "loading" in HTMLImageElement.prototype || !1
                      } catch (k) {
                          return OBR.error({
                              name: "obm-NativeLazyLoadSupportFailed",
                              message: `error ${k.name} while trying to verify browser support for Native Lazy Loading`
                          }), !1
                      }
                  })();
                  b.uv = "number" === typeof b.BI;
                  b.$N = null;
                  b.cN = null;
                  b.CE = function() {
                      switch (b.env) {
                          case "prod":
                              return c.g.Kc(c.g.L("wiodb", b.ma + "odb." + f), b.ma + "odb." + f);
                          case "sim":
                              return c.g.Kc(b.ma + "odb-sim.outbrain.com",
                                  "");
                          default:
                              return c.g.Kc(c.g.L("wiodb", b.ma + "odb." + f), b.ma + "odb." + f)
                      }
                  };
                  b.xE = function() {
                      switch (b.env) {
                          case "prod":
                              return c.g.Kc(c.g.L("wiodb", b.ma + "mv." + f), b.ma + "mv." + f);
                          case "sim":
                              return c.g.Kc(b.ma + "mv-sim.outbrain.com", "");
                          default:
                              return c.g.Kc(c.g.L("wiodb", b.ma + "mv." + f), b.ma + "mv." + f)
                      }
                  };
                  b.Yt = function(k) {
                      if (k = c.g.L(k, null)) try {
                          return k.split(",").map(l => l.split(":")).reduce((l, [q, h]) => {
                              l[q] = h;
                              return l
                          }, {})
                      } catch (l) {}
                      return null
                  };
                  b.dv = "performance" in window && "getEntries" in window.performance;
                  b.RE =
                      () => {
                          if (!(b.dv && "getEntriesByType" in window.performance)) return "";
                          const k = performance.getEntriesByType("navigation");
                          return Number("reload" === (k && k[0] && k[0].type))
                      };
                  b.Rt = (k, l) => `${"true"===OBR.g.L(l,!1)?`${`http://127.0.0.1:${k}`}/dist`:`${b.Xa}/gnr`}` + "/__path__/__moduleName__.js";
                  b.DE = () => {
                      try {
                          const k = (window.OB_amp ? window.context : window).location.href;
                          if (b.eb) {
                              const l = new URL(k),
                                  q = l.searchParams.get("permalink"),
                                  h = Array.from(l.searchParams).map(([m, p]) => `${m}=${p}`).join("&").replace(`permalink=${q}&`,
                                      "");
                              return encodeURIComponent(`${q}?${h}`)
                          }
                          return encodeURIComponent(k)
                      } catch (k) {}
                  };
                  b.hE = () => {
                      try {
                          const k = c.g.L("fakeRec", "RTB-CriteoUS"),
                              l = c.g.L("fakeRecSize", 4);
                          return `&fakeRec=${k}&testMode=true&fakeRecSize=${l}`
                      } catch (k) {}
                  };
                  b.BE = () => {
                      var k = c.g.L("dicbo", null);
                      if (k) {
                          k = encodeURIComponent(k).split("-");
                          const l = null == k ? void 0 : k.at(0);
                          return {
                              id: null == k ? void 0 : k.at(1),
                              version: l
                          }
                      }
                      return {
                          id: null,
                          version: null
                      }
                  };
                  b.Tj = 8215;
                  b.ver = "string" === typeof d.OB_releaseVer ? d.OB_releaseVer : "0";
                  b.GN = !0 === d.OB_disable_odbl;
                  b.Zm = d.OB_extId ? d.OB_extId : null;
                  b.pD = d.OB_extIdSecondary ? d.OB_extIdSecondary : null;
                  b.gd = d.OB_pubImpId ? d.OB_pubImpId : null;
                  b.Jt = () => d.OB_ContextKeyValue ? d.OB_ContextKeyValue : b.PB();
                  b.Vj = "nanoWidget/";
                  b.yx = function() {
                      b.ma = "true" === c.g.L("isForceHttp", "false") ? "http://" : "https://";
                      b.env = c.g.L("env", "prod");
                      b.cI = b.CE();
                      b.Wv = b.xE();
                      b.VM = b.ma + "storage.outbrain.com/";
                      b.Xa = c.g.Kc(c.g.L("wihost", b.ma + "widgets." + f), b.ma + "widgets." + f);
                      b.fl = c.g.Kc(c.g.L("wihost", b.ma + "widgetmonitor." + f), b.ma + "widgetmonitor." + f);
                      b.vy = `${b.fl}/WidgetErrorMonitor/api/report`;
                      b.oI = c.g.Kc(c.g.L("wiout", b.ma + f), b.ma + f);
                      b.Bp = b.ma + "log." + g + "/";
                      b.Ap = b.ma + "eventlog." + f + "/";
                      b.X = b.Xa + "/" + b.Vj + b.ver + (b.uv ? "/moduleLT" : "/module");
                      b.pp = b.Xa + "/" + b.Vj + "3rd";
                      b.Zv = b.Rt(9005, "wignr");
                      b.Yv = b.Rt(9006, "wifgnr");
                      b.Xv = b.Xa + "/" + b.Vj + "externals";
                      b.$L = b.Xa + "/external";
                      b.RH = b.Xa + "/nativeVideoPlayer";
                      b.FN = b.Xa + "/widgetMegaBlocks"
                  };
                  var f = "outbrain.com";
                  var g = "outbrainimg.com";
                  b.pI = g;
                  b.yx();
                  b.JB = "/blogutils/ExcludeRec.action?bocr=";
                  b.KN = "html";
                  b.vI = b.uv ?
                      "NANOWDGTLT13" : "NANOWDGT01";
                  b.kG = "object" === typeof d.console;
                  b.hj = null;
                  b.On = null;
                  b.Px = c.g.CC(c.g.qD());
                  b.Ik = null === b.Px ? "" : c.g.oa(b.Px);
                  b.gw = !1;
                  b.Qk = !(!d.OB_testMode && !OBR.g.L("obTestMode", !1));
                  b.Iu = "true" === c.g.L("widebug", "false");
                  b.zs = b.BE();
                  b.ew = b.zs.version;
                  b.dw = b.zs.id;
                  b.fk = b.DE();
                  b.UN = ua();
                  b.QD = "1" === c.g.L("obForceExploreMore", !1);
                  b.ZC = "true" === c.g.L("darkMode", "false");
                  b.Nb = b.Yt("forceWidgets");
                  b.Qi = b.Yt("forceVid");
                  b.OD = "true" === c.g.L("forceFeed", "false");
                  b.bn = c.g.L("wixp", null);
                  b.XH = "true" ===
                      c.g.L("obdraft", !1) ? "&obDraft=true" : "";
                  b.qn = OBR.g.L("forceOcAd", "");
                  b.Tc = OBR.g.L("forceCards", "");
                  b.xt = "1" === OBR.g.L("forceCopmlianceMeasure", "");
                  b.wt = "1" === OBR.g.L("forceGlobalLsl", "");
                  b.Tr = !1 !== c.g.L("obAbtest", !1) ? "&obAbtest=" + c.g.L("obAbtest", "") : "";
                  b.Is = "true" === c.g.L("obCrDraft", "false") ? "&crDraft=true" : "";
                  b.vp = "0" !== c.g.L("obFakeRTB", "0") ? "&fakeRec=RTB&fakeRecSize=" + c.g.L("obFakeRTB", "0") : "";
                  b.kw = "1" === c.g.L("oblr", "0");
                  b.Yj = "true" === OBR.g.L("obPerformance", !1);
                  b.fw = "true" === c.g.L("obFakeRtb",
                      !1) ? b.hE() : "";
                  b.hv = "true" === OBR.g.L("rtbDesc", !1) ? "&isRtbDescriptionEnabled=true" : "";
                  b.Ps = "true" === OBR.g.L("desc", !1) ? "&descriptionDisplayEnabled=true" : "";
                  b.rq = OBR.g.L("skipContextValidation", null);
                  b.pn = OBR.g.L("forceContextValidation", null);
                  b.Fk = OBR.g.LE();
                  b.bI = `libs.outbrain.com/video/obVideo/${"test"===OBR.g.L("vidEnv","prod")?"staging":"current"}`;
                  b.Kk = !1;
                  b.hw = `${b.Xa}/keystone/`;
                  b.ZH = `${b.hw}conv`;
                  b.YH = `${b.hw}injections`;
                  b.Pi = "0" !== OBR.g.L("forceAd", "0") ? OBR.g.L("forceAd", "0") : "";
                  b.sq = "true" ===
                      OBR.g.L("sst", !1) ? !0 : !1;
                  b.up = OBR.g.L("obInternalId", null);
                  if (b.Pi || b.Fk || b.fw || b.vp || b.Nb || b.Qi) b.Qk = !0;
                  b.bq = {
                      w: screen.width,
                      h: screen.height
                  };
                  b.Rm = window.devicePixelRatio;
                  b.ke = 0;
                  b.Id = null;
                  b.fp = !1;
                  b.jx = "data-obscrollable";
                  b.JJ = {
                      touch_strip: "1",
                      odb_dynamic: "2",
                      "odb_dynamic_touch-strip": "3"
                  };
                  b.KJ = {
                      "touch-strip": "1"
                  };
                  b.Xj = b.eb && window.OBBridge.viewData;
                  b.HM = {
                      KALTURA: "kaltura",
                      BRIGHTCOVE: "brightcove"
                  };
                  b.V = {
                      rc: "get",
                      Da: "post",
                      kr: "jsonp",
                      sr: "postJson",
                      Lc: "beacon"
                  };
                  b.Rq = c.g.dF();
                  b.kf = null !== window.location.href.match(/(outbrain.com|localhost:\d{4,5}|consul:\d{4,5})\/WidgetWizard/);
                  b.yG = "true" === c.g.L("obgallery", "false");
                  b.Un = "function" === typeof d.IntersectionObserver;
                  b.qw = !1;
                  b.yt = function(k) {
                      !0 === k.isSecured && "https://" !== b.ma && (b.yx(), c.s.A(OBR))
                  };
                  b.Xc = !1;
                  try {
                      b.Xc = window.self !== window.top
                  } catch (k) {
                      b.Xc = !0
                  }
                  b.Ok = "navigator" in window && "sendBeacon" in window.navigator;
                  b.mL = "ReportingObserver" in window;
                  b.lL = "PerformanceObserver" in window;
                  b.ZF = "true" === c.g.L("adnginmode", "false");
                  b.gk = "navigator" in window && "language" in window.navigator && window.navigator.language;
                  b.uh = c.g.Xt();
                  b.Gd =
                      null;
                  b.zv = !1;
                  b.Fd = !1;
                  b.mu = "webkitLineClamp" in document.createElement("div").style;
                  b.Nh = OBR.g.gH();
                  b.ou = !!window.history;
                  b.Gx = !(!document.head.createShadowRoot && !document.head.attachShadow);
                  b.Ju = OBR.settings && !!OBR.settings.disableLocalStorageGdpr;
                  b.Ku = b.wt || 1 === OBR._jsc.B("disableStorageAndCookies");
                  b.fG = OBR._jsc.B("browsiOrganicReferrer") && document.referrer.startsWith("https://traffic.outbrain.com");
                  b.mG = OBR.settings && !!OBR.settings.conversionPixelTriggers;
                  b.vv = OBR.settings && !!OBR.settings.widgetsLoadingPriority;
                  b.lG = !!OBR.settings && !!OBR.settings.contextRuleComplianceSelector;
                  b.XD = () => b.lG && OBR.settings.contextRuleComplianceSelector;
                  b.PB = () => {
                      const k = b.XD();
                      if (!k) return null;
                      try {
                          return document.querySelectorAll(k).length ? "onpage" : null
                      } catch (l) {
                          return null
                      }
                  };
                  b.ha = function() {
                      b.lg = !1;
                      b.Id = null;
                      b.Fd = !1
                  };
                  b.$m = (() => {
                      let k = null;
                      return {
                          getValue: () => k,
                          Ek: l => {
                              null === k && "true" === l && (k = l)
                          }
                      }
                  })();
                  b.kv = (() => {
                      let k = !1;
                      return {
                          getValue: () => k,
                          Ek: l => {
                              null === k && !0 === l && (k = l)
                          }
                      }
                  })();
                  b.nG = b.ff && window.CSS && "function" === typeof window.CSS.supports &&
                      window.CSS.supports("width: 100dvh");
                  b.publisherSubscriptionSelector = OBR._jsc.B("publisherSubscriptionSelector");
                  b.publisherLoginIndication = OBR._jsc.B("publisherLoginIndication");
                  b.lv = OBR._jsc.B("skipAdblock");
                  b.Kj = () => 1 === b.lv && b.Ke;
                  b.Lj = () => 2 === b.lv && b.M;
                  b.dH = OBR.settings && "0" === OBR.settings.fraudDetection;
                  b.vn = k => {
                      k = k && k.o("pid", null);
                      return OBR.settings ? k && OBR.settings && OBR.settings._pid && Number(k) !== Number(OBR.settings._pid) ? 2 : 1 : 0
                  };
                  a.TD = function() {
                      try {
                          const k = OBR._jsc.B("admiralTest");
                          return k ?
                              OBR.g.Zt(1, k) : 0
                      } catch (k) {
                          return 0
                      }
                  };
                  a.OE = function() {
                      const k = OBR.g.L("obRecsAbtestVars", null);
                      return k ? k.replaceAll(":", "-") : null
                  };
                  b.$H = a.OE();
                  b.kg = a.TD();
                  b.iG = (() => {
                      try {
                          const k = document.createElement("video");
                          k.playsInline = !0;
                          return "webkitSupportsPresentationMode" in k && !k.webkitSupportsPresentationMode("inline")
                      } catch (k) {}
                      return !0
                  })();
                  b.cb = function() {
                      a.Mc = c;
                      return a
                  };
                  (() => {
                      try {
                          const m = window.localStorage.getItem("OB-WITRC");
                          if (m) {
                              const p = JSON.parse(m);
                              (Date.now() - p.ts) / 6E4 > p.ttl ? window.localStorage.removeItem("OB-WITRC") :
                                  b.Uk = p.n
                          }
                          var k = OBR.g.L("obwitrc", null);
                          if (k && -1 !== k.indexOf(",")) {
                              var [l, q] = k.split(",");
                              var h = {
                                  n: q,
                                  ttl: +l,
                                  ts: Date.now()
                              }
                          } else h = void 0;
                          h && (b.Uk = h.n, window.localStorage.setItem("OB-WITRC", JSON.stringify(h)));
                          return h
                      } catch (m) {}
                  })();
                  return b
              }();
              (function(a) {
                  class b {
                      constructor() {
                          this.Ao = !!window.fetch;
                          this.Hx = !this.Ao
                      }
                      yv() {
                          return "undefined" !== typeof XMLHttpRequest
                      }
                      fH() {
                          return !this.Hx || "withCredentials" in new XMLHttpRequest ? !0 : "undefined" !== typeof XDomainRequest
                      }
                      WF() {
                          return this.Ao || this.yv()
                      }
                      mx({
                          method: d,
                          url: e,
                          data: f,
                          Oc: g,
                          async: k,
                          contentType: l,
                          lO: q,
                          hy: h
                      }) {
                          this.send(d, e, f, g, k, l, q, h)
                      }
                      send(d, e, f, g, k, l, q, h) {
                          !this.Ao && h && (h = !1);
                          this.Hx && !this.fH() && (d = a.i.V.kr);
                          switch (d) {
                              case a.i.V.rc:
                                  this.get(e, f, g, k, l, q, h);
                                  break;
                              case a.i.V.Da:
                                  this.EI(e, f, g,
                                      k, h);
                                  break;
                              case a.i.V.kr:
                                  this.Av(e, f, g);
                                  break;
                              case a.i.V.sr:
                                  this.FI(e, f, g, h);
                                  break;
                              case a.i.V.Lc:
                                  this.sendBeacon(e, f);
                                  break;
                              default:
                                  this.Av(e, f, g)
                          }
                      }
                      get(d, e, f, g, k, l, q) {
                          e = this.am(e);
                          q ? this.km(d + (e.length ? "?" + e : ""), f, "GET", null, k, l) : this.lm(this.cm(), d + (e.length ? "?" + e : ""), f, "GET", null, g, k, l)
                      }
                      EI(d, e, f, g, k) {
                          e = this.am(e);
                          k ? this.km(d, f, a.i.V.Da, e) : this.lm(this.cm(), d, f, a.i.V.Da, e, g)
                      }
                      FI(d, e, f, g) {
                          e = JSON.stringify(e);
                          g ? this.km(d, f, "POST", e, "text/plain; charset=UTF-8") : this.lm(this.cm(), d, f, "POST", e, !0, "text/plain; charset=UTF-8")
                      }
                      Av(d,
                          e, f) {
                          e = this.am(e);
                          d = a.g.Ta("dataBI" + a.g.cj(), d + (e.length ? "?" + e : ""), !0, !0, f);
                          a.g.Ob(d)
                      }
                      sendBeacon(d, e) {
                          navigator.sendBeacon(d, this.nA(e))
                      }
                      km(d, e, f, g, k, l) {
                          const q = {
                              method: f,
                              headers: {},
                              cache: "no-cache"
                          };
                          k ? q.headers["Content-Type"] = k : f === a.i.V.Da && (q.headers["Content-Type"] = "application/x-www-form-urlencoded");
                          l && (q.credentials = "include");
                          g && (q.body = g);
                          fetch(d, q).then(h => {
                              (null == h ? 0 : h.ok) && a.od.fire("ajax_succeed", [d]);
                              return h.text()
                          }).then(h => {
                              typeof e === a.i.Xe && e(h)
                          }).catch(h => {
                              a.logger.log(`${h} ${d}`);
                              a.od.fire("ajax_error", [h, d])
                          })
                      }
                      lm(d, e, f, g, k, l, q, h) {
                          void 0 === l && (l = !0);
                          var m = "";
                          try {
                              m = "Url: " + e + "\n" + Error().stack
                          } catch (p) {}
                          d.addEventListener("error", function() {
                              0 !== d.status && a.error({
                                  name: "obm-AjaxError",
                                  message: `Ajax error failed, method: ${g} With data: ${k}`,
                                  stack: m
                              })
                          });
                          d.open(g, e, l);
                          d.onreadystatechange = function() {
                              4 === d.readyState && typeof f === a.i.Xe && f(d.responseText)
                          };
                          h && (d.withCredentials = !0);
                          q ? d.setRequestHeader("Content-type", q) : g === a.i.V.Da && d.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                          d.send(k)
                      }
                      am(d) {
                          var e = [],
                              f;
                          for (f in d) d.hasOwnProperty(f) && e.push(encodeURIComponent(f) + "=" + encodeURIComponent(d[f]));
                          return e.join("&")
                      }
                      nA(d) {
                          const e = new FormData;
                          Object.keys(d).forEach(f => e.append(f, d[f]));
                          return e
                      }
                      cm() {
                          if (this.yv()) return new XMLHttpRequest
                      }
                  }
                  const c = new b;
                  a.ya = c
              })(OBR);
              var Qa = /^(http[s]{0,1}):\/\/([^\/]*)outbrain(img){0,1}\.com/i,
                  Eh = {
                      im: window.performance,
                      marks: [],
                      LH: [],
                      measure(a, b, c) {
                          a = `${"ob-measure-"}${a}`;
                          this.LH.push(a);
                          try {
                              return this.im.measure(a, b, c)
                          } catch (d) {}
                          return 0
                      },
                      eO(a) {
                          return Pa(this, a, !0)
                      },
                      $M(a) {
                          return Pa(this, a)
                      },
                      nN(a, b) {
                          const c = `${"ob-mark-"}${b?"0-":"1-"}${a}`;
                          return this.marks.find(d => d === c)
                      },
                      oN(a) {
                          return performance.getEntriesByType("mark").filter(b => b.name === a)
                      },
                      pN() {
                          let a = [];
                          const b = this.im.getEntriesByType("measure");
                          b && 0 < b.length && (a = b.filter(c =>
                              c.name.startsWith("ob-measure-")));
                          return a
                      },
                      tN(a) {
                          const b = [];
                          Ra().filter(c => c.name.includes(a)).forEach(c => {
                              b.push({
                                  name: c.name,
                                  value: c
                              })
                          });
                          return b
                      }
                  };
              OBR.Performance = OBR.Performance || Eh;
              var Fh = [],
                  Gh = Date.now(),
                  Hh = class {
                      log(a) {
                          const b = (Date.now() - Gh) / 1E3;
                          1E3 > Fh.length && Fh.push({
                              "time passed (ms)": b,
                              message: a
                          })
                      }
                      printPage() {
                          const a = OBR.g.Xi();
                          a && (a.innerHTML = `<div style="direction: ltr">${Fh.map(b=>`${b["time passed (ms)"]}: ${b.message}`).join("<br>")}</div>`, a.style.display = "block")
                      }
                      printLog() {
                          OBR.i.kG ? window.console.table(Fh) : this.printPage()
                      }
                  };
              OBR.logger = OBR.logger || new Hh;
              OBR.printLog = OBR.logger.printLog;
              OBR.printPage = OBR.logger.printPage;
              var Ih = class {
                  constructor() {
                      this.B = []
                  }
                  add(a, b) {
                      let c;
                      "string" === typeof a && "function" === typeof b && (c = {}, c.name = a, c.Xe = b, this.B.push(c))
                  }
                  fire(a, b, c, d) {
                      let e;
                      b = b || [];
                      c = !!c;
                      this.zG || OBR.Nn.AD(a, d);
                      OBR.logger.log("event fire:" + a);
                      for (let f = 0, g = this.B.length; f < g; f += 1)
                          if (d = this.B && this.B[f] ? this.B[f].name : "", e = this.B && this.B[f] ? this.B[f].Xe : null, d === a && e) try {
                              e.apply(this, b)
                          } catch (k) {
                              console.log(k), OBR.logger.log("fire event *" + a + "* error: " + k), OBR.error(k)
                          }!0 === c && Sa(this, a)
                  }
                  Me() {
                      this.B = []
                  }
              };
              OBR.Ub = Ih;
              OBR.od = new Ih;
              (function(a, b, c) {
                  const d = {
                      onHtmlReturn: "widgetDataReturned",
                      afterRender: "widgetRendered"
                  };
                  let e;
                  const f = q => {
                          q = q.widgetId;
                          let h = [];
                          q && ("string" === typeof q ? h = [q] : Array.isArray(q) && (h = q));
                          a.logger.log("global event widget ids: " + h);
                          return h
                      },
                      g = q => {
                          q && q.event && "function" === typeof q.func ? "ready" === q.event ? (c.add(q.event, q.func), e[q.event] = !0) : f(q).forEach(h => {
                              c.add(q.event + "_" + h, q.func);
                              e[q.event] = !0
                          }) : a.logger.log("Bad global event" + q)
                      },
                      k = () => {
                          const q = b.OBREvents;
                          if (q && !(1 > q.length))
                              for (var h = 0, m = q.length; h <
                                  m; h += 1) g(q.shift())
                      };
                  class l {
                      constructor() {
                          e = {};
                          this.tI = ["ready"]
                      }
                      A(q, h, m) {
                          a = q;
                          b = h;
                          c = m;
                          c.zG = !0;
                          e = {}
                      }
                      DD() {
                          this.tI.includes("ready") && (k(), e.ready && c.fire("ready"))
                      }
                      AD(q, h) {
                          var m = d[q];
                          if (h && m && (k(), e[m])) {
                              q = c;
                              var p = q.fire;
                              m = m + "_" + h.D();
                              h = [{
                                  idx: h.G(),
                                  widgetId: h.D(),
                                  widgetJsId: h.o("widgetJsId", h.D()),
                                  container: h.v(),
                                  recsNumber: h.o("tcr", -1),
                                  variantId: h.o("abTestVal", "")
                              }];
                              p.call(q, m, h)
                          }
                      }
                      ha() {
                          this.A(OBR, window, new OBR.Ub)
                      }
                  }
                  OBR.Nn = new l
              })(OBR, window, new OBR.Ub);
              (function() {
                  const a = `${OBR.i.Xv}/cookie/put.html`,
                      b = {
                          SUCCESS: 0,
                          FAILURE: 1,
                          ERROR: 2,
                          TIMEOUT: 3,
                          LS_SUCEESS: 4,
                          LS_FAILURE: 5
                      },
                      c = OBR._jsc.C.$z;
                  class d {
                      constructor() {
                          this.result = null;
                          this.Sx = !1;
                          this.Ue = -1
                      }
                      test() {
                          const e = this.cE();
                          null !== e ? (this.Ch(e), this.result = e === b.SUCCESS || e === b.LS_SUCEESS ? !0 : !1) : this.start()
                      }
                      start() {
                          document && document.body ? this.Bi() : document.addEventListener("DOMContentLoaded", () => {
                              this.Bi()
                          })
                      }
                      bE() {
                          return -1 === this.Ue || this.Ue === b.SUCCESS || this.Ue === b.LS_SUCEESS ? !0 : !1
                      }
                      Bi() {
                          try {
                              let e = null;
                              const f = l => {
                                      "OB:3PC-true" === l.data ? (OBR.logger.log("third party cookies enabled"), g(!0)) : "OB:3PC-false" === l.data && (OBR.logger.log("third party cookies disabled"), g(!1))
                                  },
                                  g = l => {
                                      window.removeEventListener("message", f, !1);
                                      clearTimeout(e);
                                      const q = (this.result = l) ? b.LS_SUCEESS : b.LS_FAILURE;
                                      this.Ch(l ? b.SUCCESS : b.FAILURE);
                                      this.iK(q);
                                      k.parentElement && k.remove()
                                  };
                              window.addEventListener("message", f, !1);
                              const k = document.createElement("iframe");
                              k.setAttribute("style", "display:none;width:0;height:0;");
                              k.src = a;
                              k.onerror = () => {
                                  this.Ch(b.ERROR);
                                  this.result = !1;
                                  k.remove()
                              };
                              document.body.appendChild(k);
                              e = setTimeout(() => {
                                  this.Ch(b.TIMEOUT)
                              }, 3E3)
                          } catch (e) {
                              this.Ch(b.ERROR), this.result = !1
                          }
                      }
                      iK(e) {
                          OBR.g.Fa(c, JSON.stringify({
                              value: e,
                              expiry: (new Date).getTime() + 2592E5
                          }))
                      }
                      cE() {
                          var e = OBR.g.U(c, null);
                          if (!e) return null;
                          e = JSON.parse(e);
                          return (new Date).getTime() > e.expiry ? (OBR.g.Zd(c), null) : e.value
                      }
                      Ch(e) {
                          -1 === this.Ue && (this.Ue = e)
                      }
                  }
                  OBR.He || (OBR.He = new d)
              })();
              OBR.Gd = OBR.Gd || function() {
                  const a = {
                      key: null
                  };
                  (() => {
                      a: {
                          var b = OBR.g.U("OB_LS_CONTEXT", null);
                          if (b) try {
                              var c = JSON.parse(b);
                              if (c.key) {
                                  var d = c;
                                  break a
                              }
                          } catch (f) {
                              OBR.logger.log("Failed to parse stored value OB_LS_CONTEXT")
                          }
                          d = null
                      }
                      if (d && "disabled" !== d.key) {
                          if (d = d.key) {
                              c = OBR.g.U(d, null);
                              if (!c && 0 < d.indexOf(".") && (b = d.split("."), c = b.splice(0, 1)[0], c = OBR.g.U(c, null))) try {
                                  for (c = JSON.parse(c); b.length;) {
                                      var e = b.splice(0, 1);
                                      c = c[e]
                                  }
                              } catch (f) {
                                  OBR.logger.log(`Failed to parse local storage value ${d}`)
                              }
                              c && "string" ===
                                  typeof c && 300 < c.length && (c = c.substring(0, 300));
                              e = c
                          } else e = null;
                          e && (e = encodeURIComponent(e), OBR.i.Gd = e)
                      }
                  })();
                  return {
                      update: b => {
                          b = b.l("localStoragePathForContextRule", null);
                          b !== a.key && (b ? (a.key = b, OBR.g.Fa("OB_LS_CONTEXT", JSON.stringify(a))) : OBR.g.Zd("OB_LS_CONTEXT"))
                      }
                  }
              }();
              var Jh = class {
                  constructor() {
                      this.Kh = 2;
                      this.Aq = this.mb = null;
                      this.si = {};
                      this.Cb = Ta(this);
                      this.mc = null !== this.Cb;
                      this.uo = window.__uspapi && "function" === typeof window.__uspapi;
                      this.Xb = null;
                      this.pq = this.uo;
                      this.Mq = this.ky = this.Em = !1;
                      this.$j = () => {};
                      Xa(this)
                  }
                  A() {
                      Wa(this);
                      Za(this)
                  }
                  Bo(a) {
                      if (this.mc ? 1 === Ua() ? this.ky || !this.Mq : !this.mc || null !== this.mb : 1) return !0;
                      this.$j = () => {
                          a()
                      };
                      if (1 === Ua()) return !1;
                      this.SD || (this.SD = setTimeout(() => {
                          OBR.logger.log("Second time for consent");
                          if (null === this.mb && (this.Em = !0, "" !==
                                  OBR.g.U(OBR._jsc.C.qc, ""))) {
                              const b = OBR.g.U(OBR._jsc.C.qc, "");
                              b && "undefined" != b && (this.mb = OBR.g.U(OBR._jsc.C.qc, ""), OBR.logger.log("Taking consent from LS"))
                          }
                          this.Wx(300);
                          this.$j()
                      }, 300));
                      return !1
                  }
                  ha() {
                      typeof OBR.i.gl.OB_CONSENT === OBR.i.ks && !1 === OBR.i.gl.OB_CONSENT || "" === OBR.g.U(OBR._jsc.C.qc, "") || (this.mb = OBR.g.U(OBR._jsc.C.qc, ""))
                  }
                  Wx(a) {
                      this.mc = !1;
                      this.Wx = a
                  }
              };
              OBR.ga || (OBR.ga = new Jh);
              var Kh = class {
                      constructor() {
                          this.isEnabled = !1;
                          this.value = [];
                          OBR._jsc.B("preloadScripts") && db() && (this.isEnabled = !0, this.value = OBR.settings.preloadScripts)
                      }
                  },
                  Lh = new Kh;
              (function() {
                  let a;
                  const b = {
                          fM: "ADNGIN",
                          El: "POPUPDESCRIPTION",
                          ci: "WHATIS",
                          ql: "FLYTHROUGH",
                          Sl: "VIDEO",
                          Kl: "SCROLL",
                          wr: "SCROLLEXTERNAL",
                          tr: "REGISTER",
                          mr: "OB_VIDEO",
                          Jl: "REFRESHWIDGET",
                          Zf: "SKYLANDER",
                          Zh: "LOADMORE",
                          lM: "DYNAMICTEXTTRUNCATION",
                          Ol: "TOPBOX",
                          Al: "PAGER",
                          nr: "PAGEREXTERNAL",
                          pr: "PAGEREXTERNALNEW",
                          Cr: "USERZAPPING",
                          $h: "READMORE",
                          Xf: "NATIVEVIDEOPLAYER",
                          Ul: "WIDGETWIZARD",
                          Nl: "SWIPELAYOUT",
                          tM: "MEGABLOCKS",
                          xr: "STASHRENDERER",
                          hl: "ADCAROUSEL",
                          Cl: "PERFORMANCEMONITOR",
                          Ll: "SINGLECARDCAROUSEL",
                          kl: "CARDSCAROUSELBOX",
                          ol: "DYNAMICCAROUSEL",
                          Fl: "PUBLISHERTOOLS",
                          Dl: "PLAYABLEAD",
                          bg: "TIMELINE",
                          Wf: "GRIDCAROUSEL",
                          Tl: "WIDGETINJECTOR",
                          nl: "DISPLAY",
                          Hl: "REEL",
                          Il: "REEL-V2",
                          Bl: "PARALLAX",
                          ml: "CLIP",
                          xl: "LEAD_FORMS",
                          $f: "STACK_CARD",
                          Yf: "READ_NEXT",
                          ag: "STORIES",
                          Ml: "SINGLE_ANIMATION_ON_FEED",
                          bi: "WEBVITALSMONITOR",
                          rM: "INTERACTION_LAYER",
                          Rl: "USER_ZAPPING",
                          jM: "CUSTOM_FEED",
                          yl: "MICROSOFT_TAP",
                          Vf: "FLOATING_INDICATOR",
                          Xq: "CONVERSIONS_TRIGGERS",
                          $q: "EXTRA_INJECTIONS",
                          sl: "GTEE_COMPLIANCE_MEASURE",
                          rl: "GPID_COLLECTION",
                          Vl: "WIDGET_PREDICTION_BUCKETS",
                          il: "ADMIRAL",
                          Vq: "BROWSI"
                      },
                      c = Object.keys(b).reduce((f, g) => {
                          f[b[g]] = g;
                          return f
                      }, {});
                  class d {
                      constructor(f, g, k) {
                          this.url = g;
                          this.attributes = {};
                          this.version = k;
                          this.state = 0;
                          this.mi = [];
                          this.context = this;
                          this.Zs = null
                      }
                      yC() {
                          if (2 === this.state) this.Hv();
                          else if (0 === this.state) {
                              var f = OBR.g.Ta(0, this.url + this.fE(), !0, !1, null, this.attributes);
                              f.onerror = this.Zs;
                              this.state = 1;
                              OBR.g.Ob(f)
                          }
                      }
                      fE() {
                          return OBR.env ? `?e=${OBR.env}` : ""
                      }
                      Hv() {
                          this.state = 2;
                          for (let g = 0; g < this.mi.length; g += 1) {
                              var f = this.mi[g];
                              "function" === typeof f.Oc &&
                                  f.Oc.call(this.context, f.rB)
                          }
                          this.mi = []
                      }
                      vK(f) {
                          this.url = this.url.replace("$SUFFIX", f ? f.toString().toLowerCase() : "")
                      }
                      TJ(f) {
                          this.attributes = f
                      }
                  }
                  class e {
                      constructor() {
                          this.u = b
                      }
                      A(f, g) {
                          a = g ? g : this.NI()
                      }
                      PF() {
                          for (let g of Lh.value) {
                              var f = g && g.trim().toUpperCase();
                              const k = c[f];
                              (f = f && this.u[k]) && this.N(f, () => {}, this, [], "", () => {})
                          }
                      }
                      Fw(f, g) {
                          f && (g = {
                              gnr_module: OBR.i.Zv.replace("__path__", f).replace("__moduleName__", f),
                              gnr_feature: OBR.i.Yv.replace("__path__", f).replace("__moduleName__", f),
                              gnr_module_internal_lazy: OBR.i.Zv.replace("__path__",
                                  f).replace("/__moduleName__", ""),
                              gnr_feature_internal_lazy: OBR.i.Yv.replace("__path__", f).replace("/__moduleName__", "")
                          } [g], b[f] = `${f}`, a[f] || (a[f] = new d(f, g, -1)))
                      }
                      NI() {
                          const f = {},
                              g = (k, l, q) => {
                                  f[k] || (f[k] = new d(k, l, q))
                              };
                          g(this.u.El, OBR.i.X + "/popupDescription.js", -1);
                          g(this.u.ci, OBR.i.X + "/whatis.js", -1);
                          g(this.u.Cr, OBR.i.X + "/userZapping.js", -1);
                          g(this.u.ql, OBR.i.X + "/flyThrough.js", -1);
                          g(this.u.Sl, OBR.i.X + "/video.js", -1);
                          g(this.u.tr, OBR.i.X + "/registration.js", -1);
                          g(this.u.Jl, OBR.i.X + "/refreshWidget.js",
                              -1);
                          g(this.u.Zf, OBR.i.X + "/skyLander.js", -1);
                          g(this.u.Ol, OBR.i.X + "/topBox.js", -1);
                          g(this.u.Nl, OBR.i.X + "/swipeLayout.js", -1);
                          g(this.u.Zh, OBR.i.X + "/loadMore.js", -1);
                          g(this.u.$h, OBR.i.X + "/readMore.js", -1);
                          g(this.u.Ul, OBR.i.X + "/widgetWizard.js", -1);
                          g(this.u.xr, OBR.i.X + "/stashRenderer.js", -1);
                          g(this.u.mr, OBR.i.ma + (OBR.i.bI + "/obVideo.js"), -1);
                          g(this.u.Xq, OBR.i.ZH + "/KS_conversions.js", -1);
                          g(this.u.$q, OBR.i.YH + "/ob_extra_injections.js", -1);
                          g(this.u.Kl, OBR.i.X + "/scroll.js", -1);
                          g(this.u.wr, OBR.i.pp + "/scroll/scrollExternal.js",
                              -1);
                          g(this.u.Al, OBR.i.X + "/pager.js", -1);
                          g(this.u.nr, OBR.i.pp + "/pager/pagerExternal.js", -1);
                          g(this.u.pr, OBR.i.pp + "/pager/pagerExternalNew.js", -1);
                          g(this.u.Xf, OBR.i.RH + "/NVPInjector.min.js", -1);
                          g(this.u.hl, OBR.i.X + "/adCarousel.js", -1);
                          g(this.u.Cl, OBR.i.X + "/performanceMonitor.js", -1);
                          g(this.u.Ll, OBR.i.X + "/singleCardCarousel.js", -1);
                          g(this.u.kl, OBR.i.X + "/cardsCarouselBox.js", -1);
                          g(this.u.ol, OBR.i.X + "/dynamicCarousel.js", -1);
                          g(this.u.Fl, OBR.i.X + "/publisherTools.js", -1);
                          g(this.u.Dl, OBR.i.X + "/playableAd.js",
                              -1);
                          g(this.u.bg, OBR.i.X + "/timeline.js", -1);
                          g(this.u.Wf, OBR.i.X + "/gridCarousel.js", -1);
                          g(this.u.Tl, OBR.i.X + "/widgetInjector.js", -1);
                          g(this.u.nl, OBR.i.X + "/displayAd.js", -1);
                          g(this.u.Hl, OBR.i.X + "/reel.js", -1);
                          g(this.u.Il, OBR.i.X + "/reel-v2.js", -1);
                          g(this.u.ag, OBR.i.X + "/stories.js", -1);
                          g(this.u.bi, OBR.i.X + "/webVitals.js", -1);
                          g(this.u.Bl, OBR.i.X + "/parallax.js", -1);
                          g(this.u.ml, OBR.i.X + "/clip.js", -1);
                          g(this.u.Ml, OBR.i.X + "/singleAnimationOnFeed.js", -1);
                          g(this.u.xl, OBR.i.X + "/leadForms.js", -1);
                          g(this.u.$f, OBR.i.X +
                              "/stackCard.js", -1);
                          g(this.u.Yf, OBR.i.X + "/readNext.js", -1);
                          g(this.u.Rl, OBR.i.X + "/userZapping.js", -1);
                          g(this.u.yl, OBR.i.X + "/microsoftTap.js", -1);
                          g(this.u.Vf, OBR.i.X + "/floatingIndicator.js", -1);
                          g(this.u.sl, OBR.i.X + "/gteeComplianceMeasure.js", -1);
                          g(this.u.rl, OBR.i.X + "/publisherIDsCollector.js", -1);
                          g(this.u.Vl, OBR.i.X + "/widgetPredictionBuckets.js", -1);
                          g(this.u.il, OBR.i.X + "/admiral.js", -1);
                          g(this.u.Vq, OBR.i.ma + "cdn.browsiprod.com/bootstrap/bootstrap.js", -1);
                          return f
                      }
                      S(f) {
                          if ("-1" !== OBR.i.ver) try {
                              a[f].Hv()
                          } catch (g) {
                              throw OBR.error({
                                  name: "obm-MakeHandShakeError",
                                  message: "Error in module: " + f + ", Err: " + g,
                                  stack: g.stack || "None"
                              }), g;
                          }
                      }
                      vE(f) {
                          return a[f]
                      }
                      N(f, g, k, l, q, h, m) {
                          if (f = this.vE(f)) f.vK(q), f.TJ(m), f.mi.push({
                              Oc: g || OBR.g.Cg(),
                              rB: l
                          }), f.Zs = h, f.context = k, f.yC()
                      }
                      St(f) {
                          for (let g in this.u)
                              if (this.u.hasOwnProperty(g) && this.u[g] === f) return this.u[g];
                          return null
                      }
                  }
                  if (!OBR.s) {
                      const f = new e;
                      f.A();
                      OBR.s = f
                  }
              })();
              OBR.languageManager = OBR.languageManager || function() {
                  var a = OBR,
                      b = {},
                      c = {},
                      d = [];
                  b.Bv = function(e) {
                      return d.hasOwnProperty(e)
                  };
                  b.RC = function(e) {
                      d[e] = {}
                  };
                  b.aB = function(e, f) {
                      d[e] = a.g.assign(d[e], f)
                  };
                  c.registerModuleLanguage = function(e, f) {
                      "string" === typeof e && f && 0 < Object.keys(f).length && (b.Bv(e) || b.RC(e), b.aB(e, f))
                  };
                  c.qN = function(e) {
                      return b.Bv(e) ? d[e] : null
                  };
                  c.cb = function() {
                      return b
                  };
                  return c
              }();
              OBR.A = OBR.A || void 0;
              OBR.Kb = function(a) {
                  return (0, OBR._jsc.jh)(a)
              };
              OBR.bb = OBR.bb || function() {
                  var a, b = {},
                      c = {},
                      d;
                  b.A = function(e) {
                      a = e = e || OBR;
                      d = new a.Ub;
                      b.cq = new OBR.Promise
                  };
                  b.cb = function() {
                      return c
                  };
                  c.wg = function(e) {
                      var f;
                      var g = 0;
                      for (f = e.length; g < f; g += 1) a.g.Rb(e[g], "data-browser", a.i.Wb), a.g.Rb(e[g], "data-os", a.i.os), d.fire("find", [e[g]])
                  };
                  c.Et = function() {
                      return a.g.Db("class", "OUTBRAIN", "div", !0)
                  };
                  c.$D = function(e) {
                      var f, g = [],
                          k = [];
                      for (f = 0; f < e.length; f++) {
                          var l = e[f];
                          if ("string" === typeof l.containerId)
                              if (a.Kb(l.containerId)) {
                                  var q = a.Kb(l.containerId);
                                  OBR.Ya.PC(l, q);
                                  k.push(q)
                              } else g.push(e[f])
                      }
                      window.OB_elements = g;
                      return k
                  };
                  c.EE = function() {
                      var e = [];
                      "object" === typeof window.OB_elements && 0 < window.OB_elements.length && (e = window.OB_elements);
                      return e
                  };
                  c.yE = function() {
                      var e = [],
                          f = c.Et(),
                          g;
                      var k = 0;
                      for (g = f.length; k < g; k += 1) {
                          var l = a.g.Ye(f[k], "data-ob-mark");
                          null !== l && "true" === l || !f[k] || (e.push(f[k]), a.g.Rb(f[k], "data-ob-mark", "true"))
                      }
                      k = c.EE();
                      if (0 < k.length)
                          for (a.logger.log("Array of elements found!"), f = c.$D(k), k = 0, g = f.length; k < g; k += 1) e.push(f[k]);
                      return e
                  };
                  b.NM = function(e) {
                      OBR.bb.Ki ?
                          OBR.bb.Ki.then(() => c.dn(e)) : c.dn(e)
                  };
                  c.cB = e => {
                      OBR.logger.log("search containers - mutation observer");
                      const f = new MutationObserver(l => {
                              (l = l.reduce((q, h) => {
                                  (h = Array.prototype.slice.call(h.addedNodes).filter(m => "DIV" === m.tagName)) && h.length && (q = q.concat(h));
                                  return q
                              }, [])) && l.length && e()
                          }),
                          g = () => {
                              if (OBR.Ci.$u()) {
                                  e();
                                  OBR.logger.log("search containers - dom ready: disconnecting mutation observer");
                                  try {
                                      b.cq.resolve()
                                  } catch (l) {}
                                  setTimeout(() => f.disconnect(), 0);
                                  document.removeEventListener("readystatechange",
                                      g)
                              }
                          };
                      document.addEventListener("readystatechange", g);
                      const k = () => f.observe(document.body, {
                          subtree: !0,
                          childList: !0
                      });
                      document.body ? k() : window.addEventListener("DOMContentLoaded", k)
                  };
                  c.MJ = () => {
                      const e = () => {
                          OBR.logger.log("search containers - searching for new containers");
                          let f = c.yE();
                          OBR.i.vv && (f = c.yJ(f));
                          0 < f.length && (OBR.bb.Ki ? OBR.bb.Ki.then(() => c.wg(f)) : c.wg(f))
                      };
                      if (OBR.Ci.$u()) {
                          e();
                          try {
                              b.cq.resolve()
                          } catch (f) {}
                      } else if (OBR.i.vv) {
                          const f = () => {
                              OBR.Ci.Lu() && (e(), document.removeEventListener("readystatechange",
                                  f))
                          };
                          document.addEventListener("readystatechange", f)
                      } else c.cB(e), e()
                  };
                  c.yJ = e => {
                      var f = OBR.settings.widgetsLoadingPriority.replace(/\s+/g, "").split(",");
                      const g = [],
                          k = {};
                      try {
                          for (const l of e) k[l.getAttribute("data-widget-id")] = l;
                          for (const l of f) k.hasOwnProperty(l) && (g.push(k[l]), delete k[l]);
                          for (const l of Object.values(k)) g.push(l);
                          return g
                      } catch (l) {
                          return e
                      }
                  };
                  c.dn = function(e) {
                      void 0 === e ? c.MJ() : 0 < (e.length || 0) && c.wg(e)
                  };
                  b.yN = function() {
                      return 0 < c.Et().length
                  };
                  b.hI = function(e) {
                      d.add("find", e)
                  };
                  b.PN =
                      function(e) {
                          d.add("stopSearch", e)
                      };
                  b.Ji = function() {
                      c.dn()
                  };
                  b.yD = function(e) {
                      var f = [],
                          g;
                      var k = 0;
                      for (g = a.F.length; k < g; k += 1) {
                          var l = a.g.v(k);
                          null !== l && ("string" === typeof e && a.g.Rb(l, "data-src", e), f.push(l))
                      }
                      0 < f.length && (a.F = [], c.wg(f))
                  };
                  b.dN = function(e) {
                      const f = [];
                      e && (a.g.Rb(e, "data-ob-mark", "false"), f.push(e), c.wg(f))
                  };
                  b.yL = function(e) {
                      a.g.Rb(e, "data-ob-mark", "false")
                  };
                  b.ha = function() {
                      d.Me();
                      a.F = []
                  };
                  b.A(OBR);
                  return b
              }();
              var Mh = class {
                  constructor() {
                      this.lb = OBR.g.U(OBR._jsc.C.Sq, null);
                      this.fe = OBR.g.U(OBR._jsc.C.Tq, null);
                      null !== this.lb && OBR.logger.log("AdBlock - status from local storage is: " + this.lb);
                      this.Nm = 300;
                      this.cssText = "display:inline;width:1px!important;height:1px!important;border:none;padding:0;visibility:visible!important;";
                      this.Ri = !1;
                      this.og = this.pg = 0;
                      this.om = new OBR.Ub;
                      this.bt = {
                          ready: 0,
                          oD: 3,
                          Hq: 6,
                          stopped: 7
                      };
                      null === this.lb && gb(this)
                  }
                  qk(a) {
                      this.om.add("onAdBlockStatusReady", a)
                  }
                  Mn() {
                      return this.pg
                  }
                  sn() {
                      return this.og
                  }
                  uj() {
                      return OBR.i.Kj() ||
                          OBR.i.Lj() || OBR.i.eb ? !1 : this.lb
                  }
                  vj() {
                      return this.fe
                  }
                  fI() {
                      fb(this)
                  }
              };
              OBR.kb = OBR.kb || new Mh;
              var O = {
                  Yf: {
                      fa: "ReadNext",
                      R: {
                          Ky: 8500
                      }
                  },
                  Zy: {
                      fa: "ForceCardButton",
                      R: {
                          Jy: 7808
                      }
                  },
                  Iz: {
                      fa: "PubtoolOverlay",
                      R: {
                          bz: 8E3,
                          Vy: 8001,
                          Qy: 8002,
                          Sf: 8003,
                          qz: 8004,
                          Oz: 8005,
                          Gy: 8006,
                          Qz: 8007
                      }
                  },
                  jr: {
                      fa: "HighlightReel",
                      R: {
                          qr: 7800,
                          ur: 7801,
                          Uq: 7802,
                          er: 7803
                      }
                  },
                  ag: {
                      fa: "Stories",
                      R: {
                          Gz: 10010,
                          vz: 10015,
                          wz: 10016,
                          Hz: 10020,
                          xz: 10025,
                          yz: 10026,
                          Cz: 10030,
                          Ly: 10040,
                          Xy: 10031,
                          mz: 10017,
                          nz: 10027,
                          Ey: 10045
                      }
                  },
                  Oy: {
                      fa: "DelayWidget",
                      R: {
                          fA: 10100
                      }
                  },
                  az: {
                      fa: "InterventionHeavyAds",
                      R: {
                          ez: 99840,
                          Uz: 99740,
                          Vz: 99640,
                          Wz: 99540,
                          Xz: 99440
                      }
                  },
                  eA: {
                      fa: "WebVitals",
                      R: {
                          Mz: 98E3
                      }
                  },
                  By: {
                      fa: "Ad Carousel",
                      R: {
                          Dy: 5E3,
                          Cy: 5001
                      }
                  },
                  Wf: {
                      fa: "Grid Carousel",
                      R: {
                          hr: 1E4
                      }
                  },
                  cA: {
                      fa: "User Sentiment",
                      R: {
                          LIKE: 4E3,
                          DISLIKE: 4050,
                          UNDO_DISLIKE: 4100,
                          UNDO_LIKE: 4150,
                          STASH: 4200,
                          UNDO_STASH: 4250,
                          SHARE: 4300,
                          REPORT: 4350,
                          REPORT_REASONSV2: 4351,
                          UNDO: 4400,
                          OPEN: 4450,
                          MENU_MOBILE: 4451
                      }
                  },
                  Zq: {
                      fa: "Dynamic Carousel",
                      R: {
                          Wq: 10100
                      }
                  },
                  Py: {
                      fa: "DFP",
                      R: {
                          Nz: 4600,
                          Pz: 4610,
                          EMPTY: 4620,
                          Wy: 4630
                      }
                  },
                  hM: {
                      fa: "Article Card",
                      R: {
                          CM: 4500
                      }
                  },
                  rr: {
                      fa: "Playable ad",
                      R: {
                          "ob-pa-load": 6E3,
                          "ob-pa-cta-clicked": 6001,
                          "ob-pa-engaged": 6002,
                          "ob-pa-error": 6003,
                          "ob-pa-resize": 6004
                      }
                  },
                  $f: {
                      fa: "StackCard",
                      R: {
                          zr: 6500,
                          yr: 6501
                      }
                  },
                  bg: {
                      fa: "Timeline",
                      R: {
                          Yz: 7510,
                          Br: 7511
                      }
                  },
                  AM: {
                      fa: "Podcast",
                      R: {
                          xM: 7E3
                      }
                  },
                  Lz: {
                      fa: "ReadMore",
                      R: {
                          Sf: 2050,
                          dA: 2E3
                      }
                  },
                  Zf: {
                      fa: "SkyLander",
                      R: {
                          Ra: 3E3
                      }
                  },
                  Sz: {
                      fa: "SwipeLayout",
                      R: {
                          jb: 3050,
                          Ra: 3E3
                      }
                  },
                  Zz: {
                      fa: "TopBox",
                      R: {
                          Tf: 3150,
                          jb: 3050,
                          Ra: 3E3,
                          Fe: 3200,
                          Uf: 3100
                      }
                  },
                  Iy: {
                      fa: "BottomBox",
                      R: {
                          Tf: 3150,
                          jb: 3050,
                          Ra: 3E3,
                          Fe: 3200,
                          Uf: 3100
                      }
                  },
                  cr: {
                      fa: "Feed",
                      R: {
                          Hy: 10200,
                          Yy: 10201,
                          Ez: 10202,
                          Fz: 10203
                      }
                  },
                  FM: {
                      fa: "test",
                      R: {
                          nM: 100,
                          oM: 200
                      }
                  },
                  qM: {
                      fa: "General",
                      R: {
                          EM: 400,
                          pM: 401
                      }
                  },
                  Vf: {
                      fa: "floatingIndicator",
                      R: {
                          Sf: 1500
                      }
                  },
                  Za: {
                      fa: "exploreMore",
                      R: {
                          oz: 5500,
                          pz: 5501,
                          aA: 5502,
                          uz: 5510,
                          sz: 5511,
                          My: 5515,
                          fz: 5516,
                          dz: 5517,
                          kM: 5518,
                          Sy: 5519,
                          Az: 5520,
                          Bz: 5523,
                          Fy: 5527,
                          Ry: 5529,
                          bA: 5532
                      }
                  },
                  DM: {
                      fa: "refreshwidget",
                      R: {
                          gM: 9898
                      }
                  },
                  Ay: {
                      fa: "admiralApi",
                      R: {
                          Rz: 6800
                      }
                  },
                  kz: {
                      fa: "keystone",
                      R: {
                          Ny: 100
                      }
                  }
              };
              var Nh = {
                      obzala: "_b1_ad_group_id",
                      obzalc: "_b1_creatives_id",
                      obzali: "_b1_ip",
                      obzalt: "_b1_no_targeting",
                      obzalp: "_b1_cpm",
                      obzale: "_b1_exchange",
                      obzald: "_b1_ignore_pmp",
                      obzalcbs: "_b1_creative_banner_size"
                  },
                  Oh = [{
                      pattern: "utm_",
                      Rv: a => a
                  }, {
                      pattern: "obzal",
                      Rv: a => Nh[a]
                  }],
                  le = () => {
                      var {
                          ME: a
                      } = {
                          ME: () => sh(window)
                      };
                      const b = a();
                      return b && (a = Object.keys(b).map(c => {
                              const d = Oh.find(e => c.startsWith(e.pattern));
                              return d ? [c, d.Rv(c)] : null
                          }).filter(c => !!c).map(([c, d]) => `${d}=${encodeURIComponent(b[c])}`).join("&")) ? `&aqp=${encodeURIComponent(a)}` :
                          ""
                  };
              var sb;
              var Ph = class {
                  constructor() {
                      this.platform = OBR.i.M ? "mobile" : "desktop";
                      this.K = {};
                      this.li = []
                  }
                  remove(a, b = !1) {
                      const c = a.D(),
                          d = this.Yb && this.Yb.some(e => e.includes(c));
                      (a.Kq() || b || d) && (a = document.querySelector(c ? `.ob_sf_loader, .${c}.ob-chunks-loader` : ".ob_sf_loader, .ob-chunks-loader")) && null !== a.parentNode && a.parentNode.removeChild(a)
                  }
                  Ie(a, b, c) {
                      b = ub({
                          tg: b,
                          md: c
                      });
                      a.appendChild(b);
                      this.li.push({
                          md: c,
                          ip: b
                      })
                  }
              };
              OBR.Kx || (OBR.Kx = new Ph);
              var Db = OBR.Kx;
              var Qh = class {
                      constructor() {
                          this.Lk = new wh
                      }
                  },
                  Rh = new Qh;
              var Sh = class {
                      constructor() {
                          this.isEnabled = OBR.i.dv
                      }
                      mark(a, b, c) {
                          this.isEnabled && a && b && (c ? a.Dx(`${b}-${c}`) : "rendered" === b && a.Dx(b))
                      }
                  },
                  Xb = new Sh;
              var Th = class {
                      constructor() {
                          this.Vr = OBR._jsc.B("ab");
                          this.RA = {};
                          this.Ur = "";
                          if (this.Vr) try {
                              const b = this.Vr.split(",");
                              if (b && b.length) {
                                  var a = [];
                                  for (let c = 0; c < b.length; c++) {
                                      const [d, e] = b[c].split("~");
                                      if (!d || !e || 0 > e || 100 < e) continue;
                                      const f = d.split("-");
                                      if (!f || !f.length || 3 !== f.length) continue;
                                      let g;
                                      g = OBR.g.Zt(0, 100) > e ? f[1] : f[2];
                                      this.RA[f[0]] = g;
                                      a.push(`${f[0]}:${g}`)
                                  }
                                  this.Ur = a.join(",")
                              }
                          } catch (b) {
                              OBR.error({
                                  name: "obm-clientAbrex",
                                  message: "error while generate client abrex variants." + b.message,
                                  stack: b.stack
                              })
                          }
                      }
                  },
                  fc = new Th;
              var nc = null,
                  mc = !1;
              (a => {
                  let b, c;
                  null == (b = a.cookieDeprecationLabel) || null == (c = b.getValue()) || c.then(d => {
                      nc = d;
                      mc && OBR.error({
                          name: "obm-TPCDLLateResponse"
                      })
                  }).catch(d => {
                      OBR.error(d)
                  })
              })(window.navigator);
              var pc = null;
              (a => {
                  try {
                      let b;
                      if (null == (b = a.userAgentData) ? 0 : b.getHighEntropyValues) {
                          let c;
                          null == (c = a.userAgentData) || c.getHighEntropyValues(["architecture", "bitness", "fullVersionList", "model", "platformVersion"]).then(d => {
                              if (d) {
                                  const f = d.architecture ? `&cha=${encodeURIComponent(d.architecture)}` : "",
                                      g = d.bitness ? `&chb=${encodeURIComponent(d.bitness)}` : "";
                                  var e;
                                  const k = (null == (e = d.fullVersionList) ? 0 : e.length) ? `&chfv=${encodeURIComponent(JSON.stringify(d.fullVersionList))}` : "";
                                  e = d.model ? `&chm=${encodeURIComponent(d.model)}` : "";
                                  const l = d.platformVersion ? `&chpv=${encodeURIComponent(d.platformVersion)}` : "",
                                      q = d.mobile ? `&chrp=${encodeURIComponent(d.mobile)}` : "";
                                  d = d.platform ? `&chp=${encodeURIComponent(d.platform)}` : "";
                                  pc = [f, g, k, e, l, q, d].join("")
                              }
                          })
                      }
                      return pc
                  } catch (b) {
                      return OBR.error({
                          name: "obm-highEntropyValue",
                          message: b.message,
                          stack: b.stack
                      })
                  }
              })(window.navigator);
              var oc = null,
                  Uh = () => {
                      const a = document.createElement("iframe");
                      a.src = `${OBR.i.Xv}/topics/topics.html?r=${encodeURIComponent(window.location.origin)}`;
                      a.RM = !0;
                      a.style.display = "none";
                      a.id = "ob-bt-iframe";
                      a.onerror = () => {
                          a.remove()
                      };
                      window.addEventListener("message", b => {
                          if (b.origin === OBR.i.Xa) try {
                              let c = (null == b ? void 0 : b.data) && Array.isArray(b.data) && b.data.map(d => `${d.configVersion},${d.modelVersion},${d.taxonomyVersion},${d.topic},${d.version}`);
                              if (null == c ? 0 : c.length) oc = `&gtpc=${encodeURIComponent(JSON.stringify(c))}`
                          } catch (c) {}
                      });
                      document.body.appendChild(a)
                  };
              document.body ? Uh() : document.addEventListener("DOMContentLoaded", () => {
                  Uh()
              });
              var Vh = class {
                      constructor() {
                          this.cache = new Map;
                          this.eG = OBR.i.eb;
                          this.jc = OBR.i.jc
                      }
                      gi() {
                          return ""
                      }
                      fi(a) {
                          return rc(this, a)
                      }
                  },
                  kc = new Vh;
              OBR.wa = OBR.wa || function() {
                  var a = {},
                      b = {},
                      c;
                  let d = "";
                  a.qh = null;
                  class e {
                      constructor() {
                          this.list = []
                      }
                      add(f) {
                          this.list.push(f)
                      }
                      contains(f) {
                          return -1 !== this.list.indexOf(f)
                      }
                      remove(f) {
                          this.list.splice(f, 1)
                      }
                      top() {
                          return 0 < this.list.length ? this.list.shift() : null
                      }
                      Zi() {
                          return this.list
                      }
                      ws() {
                          this.list = []
                      }
                      Ed() {
                          return !this.list || !this.list.length
                      }
                  }
                  b.A = function(f) {
                      c = f || OBR;
                      a.Gc = new e;
                      a.ph = new c.Ub;
                      a.hf = !1;
                      a.OM = null;
                      a.tt = !0;
                      a.ut = !0;
                      a.rw = !1;
                      a.BF()
                  };
                  a.BF = () => {
                      d = le()
                  };
                  a.XN = function() {
                      OBR.bb.cq.then(() => {
                          a.ey()
                      });
                      window.setTimeout(() => {
                          a.ey()
                      }, 1E3)
                  };
                  a.KE = function() {
                      if (a.qh) return a.qh;
                      const f = OBR.i.fk ? `&ogn=${OBR.i.fk}` : "",
                          g = c.i.gk && c.i.gk.length ? "&osLang=" + c.i.gk : "";
                      var k = c.ca.Ga;
                      k = "&winW=" + k.width + "&winH=" + k.height;
                      const l = "&scrW=" + c.i.bq.w + "&scrH=" + c.i.bq.h,
                          q = c.i.bn ? "&xp=" + c.g.oa(c.i.bn) : "",
                          h = c.i.Iu ? "&wrDebug=true" : "",
                          m = c.i.OD ? "&forceFeed=true" : "",
                          p = "https://" === c.i.ma ? "&secured=true" : "",
                          r = c.ga.ui ? "&cnsnt=" + c.ga.ui : "",
                          t = c.ga.Cb ? "&cmpStat=1" : "&cmpStat=0",
                          u = c.ga.mb ? "&cnsntv2=" + c.ga.mb : "",
                          v = c.ga.Xb ? "&ccpa=" + c.ga.Xb : "",
                          w = c.ga.uo ?
                          "&ccpaStat=1" : "&ccpaStat=0",
                          A = OBR.i.Xc ? "&iframe=true" : "",
                          D = OBR.i.Gd ? `&lscntx=${OBR.i.Gd}` : "",
                          E = null !== OBR.i.rq ? `&skipContextValidation=${OBR.i.rq}` : "",
                          J = null !== OBR.i.pn ? `&forceContextValidation=${OBR.i.pn}` : "",
                          I = OBR.i.Fk ? `&skipRecsFilters=${OBR.i.Fk}` : "",
                          V = OBR.i.Pi ? `&forceAd=${OBR.i.Pi}&settingLevel=SOURCE` : "",
                          P = "&dpr=" + c.i.Rm,
                          R = OBR.i.up ? `&ob_internal_id=${OBR.i.up}` : "",
                          W = c.i.Xp ? `&ref=${c.i.Xp}` : "",
                          Z = c.i.Wj ? "" : "&wdr-natlaz=false",
                          ca = OBR.i.sq ? "&wdr-ads-data=true" : "",
                          Ga = OBR.i.vt ? "&forceDemand=true" :
                          "",
                          Ha = OBR.i.Uk ? `&trace_name=${OBR.i.Uk}` : "",
                          Ia = OBR.i.Ju || OBR.i.Ku ? "&lsl=1" : "",
                          Ja = OBR.i.qn ? `&forceOcAd=${OBR.i.qn}` : "",
                          Ka = OBR.i.Ke && je() ? `&opvid=${je()}` : "",
                          La = `&chs=${OBR.i.vn()}`;
                      a.qh = `&version=${c.i.ver}&sig=${c.i.Rq}&apv=${c.i.lg}${Ka}${c.i.fw}${Ja}${c.i.Ps}${c.i.hv}${c.i.Tr}${c.i.Is}${q}${g}${k}${l}${P}${h}${m}${p}${u}${r}${t}${v}${w}${A}${D}${E}${J}${I}${V}${Z}${ca}${d}${Ga}${Ha}${R}${Ia}${La}${W}${f}`;
                      return a.qh
                  };
                  a.SC = function(f) {
                      var g = f.G(),
                          k = f.Eb(),
                          l = c.g.U(OBR._jsc.C.ai, null),
                          q = c.g.U(OBR._jsc.C.Ql,
                              null),
                          h = f.aj(),
                          m = h && null !== h.x ? `&px=${h.x}` : "";
                      h = h && null !== h.y ? `&py=${h.y}` : "";
                      var p = f.Kt();
                      p = null !== p ? `&vpd=${p}` : "";
                      k = a.UE(g, k);
                      var r = a.rE(f);
                      r = r ? "&lastPvTs=" + r : "";
                      var t = !0 === c.i.Qk || !0 === f.gj(),
                          u = f.Ln() ? "&videoId=" + f.Ln() : "",
                          v = f.Wt() ? "&playerSrcId=" + f.Wt() : "",
                          w = f.ob() ? "&api_user_id=" + f.ob() : "",
                          A = a.lE(t),
                          D = a.pb(f);
                      const [E, J] = ke(f);
                      var I = E && J ? `&${E}=${J}` : "";
                      var V = a.yd(f),
                          P = !0 === f.ev() || c.i.vp ? "&rtbEnabled=true" : "",
                          R = f.fj() ? `&seid=${encodeURIComponent(f.fj())}` : "",
                          W = !0 === f.tv() ? "&va=true" : "",
                          Z =
                          1 == f.Lt() ? "&et=true" : "",
                          ca = c.i.Nb && c.i.Nb[f.D()] ? "&contextRule=false" : "",
                          Ga = null !== f.$i() ? "&num=" + f.$i() : "",
                          Ha = a.WE(f),
                          Ia = a.TE(f),
                          Ja = OBR.i.kw ? "&wdr-lr=1" : "",
                          Ka = f.bc() ? "&installationType=" + f.bc() : "",
                          La = f.$b() ? "&app_ver=" + f.$b() : "",
                          Gb = "&widgetJSId=" + (c.i.Nb && c.i.Nb[f.D()] ? c.i.Nb[f.D()] : f.D()),
                          Hb = `&format=${f.Qt()}`;
                      l = l ? "&lsd=" + c.g.oa(l) : "";
                      q = q ? "&lsdt=" + q : "";
                      var hb = f.Lg() ? "&lang=" + f.Lg() : "",
                          Ib = f.Ft() ? "&app_id=" + f.Ft() : "";
                      t = t ? "&testMode=true" : "";
                      var Jb = a.eE(f),
                          Kb = f.Nt() ? "&fId=" + f.Nt() : "",
                          ib = f.In && f.In() ?
                          "&reasonType=" + f.In() : "",
                          jb = f.Kn && f.Kn() ? "&reasonValueId=" + f.Kn() : "",
                          kb = f.Jn && f.Jn() ? "&reasonValue=" + f.Jn() : "",
                          Lb = f.un && f.un() ? "&categoryIds=" + c.g.oa(f.un()) : "",
                          Mb = f.Yi && f.Yi() ? "&iabCat=" + f.Yi() : "",
                          Nb = f.Ze() ? "&feedVersion=" + f.Ze() : "",
                          Ob = f.wd() ? "&fAB=" + f.wd() : "",
                          Pb = f.vd() && "" != f.vd() ? "&settingLevel=TEMPLATE&" + f.vd() : "",
                          Qb = null !== OBR.i.uh ? `&pubInState=${OBR.i.uh}` : "";
                      const Rb = !f.Ui() || c.ga.ui || c.ga.mb ? "" : "1" === f.xn() || 1 === f.xn() ? `&cnsnt=${f.Ui()}` : `&cnsntv2=${f.Ui()}`,
                          Sb = f.tn() ? `&ccpa=${f.tn()}` : "";
                      var ya = c.i.Jt();
                      ya = ya ? "&contxtKV=" + c.g.oa(ya) : "";
                      var za = f.Jg();
                      za = za ? `&cw=${za}` : "";
                      f = f.ge() ? "&em=1" : "";
                      return `${Jb}?${Ha}${Ia}&idx=${g}&rand=${c.g.rand()}${Ka}${La}${r}${Gb}${W}${Z}${Hb}${P}${l}${q}${hb}${Ib}${k}${ca}${w}${u}${v}${A}${D}${I}${V}${Ga}${t}${Kb}${ib}${jb}${kb}${Lb}${Mb}${Nb}${Ob}${m}${h}${p}${Pb}${Qb}${Sb}${Rb}${ya}${za}${R}${Ja}${f}`
                  };
                  a.lE = function(f) {
                      let g = "";
                      f || ((f = c.fraudDetection.Yd || c.fraudDetection.fq) ? g = "&clss=" + f : c.fraudDetection.Gf && (g = "&clid=" + c.fraudDetection.Gf + "&fdu=" +
                          c.fraudDetection.Gi));
                      return g
                  };
                  b.Dt = function(f) {
                      var g = a.SC(f);
                      const k = a.KE(),
                          l = kc.gi(),
                          q = qc(f),
                          h = kc.fi(f);
                      g = OBR.i.Wv + g + l + q + k + h;
                      if ((null == g ? void 0 : g.length) >= OBR.i.Tj) return f = ne(g), (null == f ? void 0 : f.length) >= OBR.i.Tj && oe(f), f;
                      f.Bh(g);
                      return g
                  };
                  a.pb = function(f) {
                      let g = "";
                      const k = c.g.Pf(c.i.Zm);
                      f = c.g.Pf(f.pb());
                      if (k || f) g = "&extid=" + encodeURIComponent(f || k);
                      return g
                  };
                  a.yd = function(f) {
                      return (f = c.g.Yk(f.yd() || c.i.gd)) ? `&pubImpId=${encodeURIComponent(f)}` : ""
                  };
                  a.WE = f => {
                      if (f.ej()) return `url=${OBR.g.oa(f.ej())}`;
                      const g = f.xc(),
                          k = f.zc(),
                          l = f.Ac();
                      return g ? `bundleUrl=${c.g.oa(g)}` : l ? `portalUrl=${c.g.oa(l)}` : k ? `contentUrl=${c.g.oa(k)}` : "url=" + c.g.oa(f.Ja())
                  };
                  a.eE = f => f.Eb() && !f.ej() ? "/Multivac/api/platforms" : "/Multivac/api/get";
                  a.TE = function(f) {
                      if (f.Eb()) return "";
                      var g = "&srcUrl=";
                      f = f.cu();
                      return g = null !== f && "string" === typeof f && 0 < f.length ? g + c.g.oa(f) : 0 < c.i.Ik.length ? g + c.i.Ik : ""
                  };
                  a.MF = function(f, g) {
                      var k = g.G(),
                          l = g.D(),
                          q = c.g.Ta(0, f, !0);
                      c.g.Ab(q, "error", function() {
                          g.CD();
                          a.ph.fire("onOdbFail_" + k + "_" + l, [g], !0);
                          Db.remove(g);
                          q.remove();
                          a.hf = !1;
                          b.fire()
                      });
                      Rh.Lk.start();
                      c.g.Ob(q);
                      a.KH(g);
                      a.ph.fire("onOdbFire_" + k + "_" + l, [g], !0);
                      c.logger.log("fire this src " + f)
                  };
                  a.KH = function(f) {
                      Xb.mark(f, "mv", "start")
                  };
                  a.DK = function(f) {
                      setTimeout(() => {
                          a.Ww(f.G(), f.D())
                      }, 1E4)
                  };
                  a.Ww = function(f, g) {
                      c.g.Zp("ob_odbCall_" + f + g)
                  };
                  a.YF = function() {
                      if (OBR.i.Kj() || OBR.i.Lj()) return !0;
                      var f = null !== c.kb.lb;
                      if (a.tt)
                          if (a.tt = !1, f) c.logger.log("AdBlock ODB detected immediately");
                          else {
                              var g = new c.Ar;
                              c.logger.log("AdBlock ODB start stopwatch");
                              g.start();
                              c.kb.qk(function() {
                                  c.logger.log("AdBlock ODB detected after " +
                                      g.stop());
                                  b.fire()
                              })
                          } return f
                  };
                  a.xG = function() {
                      var f = OBR.fraudDetection.At;
                      if (a.ut && (a.ut = !1, !f)) {
                          c.logger.log("FD start stopwatch");
                          var g = new c.Ar;
                          sg(c.fraudDetection, function() {
                              c.logger.log("FD return after " + g.stop());
                              b.fire()
                          })
                      }
                      return f
                  };
                  b.BK = f => {
                      if (OBR.i.eb) try {
                          Object.keys(f).forEach(g => {
                              null !== f[g] && "undefined" !== typeof f[g] || delete f[g]
                          }), f && Object.keys(f).length && window.OBBridge.setBridgeParams(f)
                      } catch (g) {}
                  };
                  a.Bo = function() {
                      return OBR.ga.Bo(() => b.fire())
                  };
                  a.gG = function() {
                      if (!c.ga.pq || null !==
                          c.ga.Xb) return !0;
                      a.MB || (a.MB = setTimeout(function() {
                          null === c.ga.Xb && ("" !== c.g.U(OBR._jsc.C.Vh, "") ? c.ga.Xb = c.g.U(OBR._jsc.C.Vh, "") : c.ga.pq = !1);
                          b.fire()
                      }, 300));
                      return !1
                  };
                  b.fire = function(f) {
                      OBR.logger.log("odb fire");
                      if (!(!0 !== a.hf && !0 !== a.rw && a.YF() && a.Bo() && a.gG() && a.xG())) return !1;
                      if (!f && a.Gc.Ed()) OBR.logger.log("odb fire - no pending widgets");
                      else {
                          a.hf = !0;
                          if (f) {
                              var g = a.Gc.Zi().indexOf(f);
                              0 <= g ? a.Gc.remove(g) : f = null
                          } else(f = a.Gc.Zi().find(k => k.NG())) && a.Gc.remove(a.Gc.Zi().indexOf(f));
                          return f ? (c.logger.log("fire odb for " +
                              f.Ja()), g = b.Dt(f), a.MF(g, f), a.DK(f), a.xJ(f), !0) : a.hf = !1
                      }
                  };
                  a.xJ = f => {
                      try {
                          var g = Db;
                          g.mf = vb();
                          g.Yb = xb(g);
                          const k = !!g.mf,
                              l = f.v(),
                              q = f.D();
                          k ? yb(g, g.mf, q, l) : Cb(g, q, l)
                      } catch (k) {
                          OBR.logger.log("failed to parse Local Storage for skeleton")
                      }
                  };
                  b.ON = function(f, g) {
                      a.ph.add("onOdbFire_" + f.G() + "_" + f.D(), g)
                  };
                  b.NN = function(f, g) {
                      a.ph.add("onOdbFail_" + f.G() + "_" + f.D(), g)
                  };
                  b.unlock = function(f, g) {
                      a.hf = !1;
                      a.Ww(f, g)
                  };
                  a.ey = function() {
                      a.rw = !1;
                      b.fire()
                  };
                  b.SJ = function(f) {
                      !0 === f && (OBR.i.lg = f)
                  };
                  b.Ex = function(f, g) {
                      f && (g ? c.i.Pp = f :
                          c.i.Dq = f, window.OBBridge && !window.OBBridge.t && (window.OBBridge.t = f))
                  };
                  b.eu = f => f ? c.i.Pp : c.i.Dq;
                  a.UE = (f, g) => {
                      if (window.OBBridge && window.OBBridge.t && 0 !== f) return `&t=${window.OBBridge.t}`;
                      g = b.eu(g);
                      return "" === g || 0 === f ? "" : "&t=" + g
                  };
                  a.rE = function(f) {
                      let g = null;
                      if (f && 0 == f.G()) {
                          const k = (new Date).getTime();
                          f = c.g.oa(f.Ja());
                          const l = OBR._jsc.C.lz,
                              q = c.g.U(l, null);
                          if (q) try {
                              let h = JSON.parse(q);
                              if (h && f === h.url) {
                                  let m = k - h.previousRequestTime;
                                  72E5 > m && (g = m)
                              }
                          } catch (h) {
                              OBR.logger("Error parsing last page view info")
                          }
                          c.g.Fa(l,
                              JSON.stringify({
                                  url: f,
                                  previousRequestTime: k
                              }))
                      }
                      return g
                  };
                  b.vu = function() {
                      c.i.lg = !1
                  };
                  b.register = function(f) {
                      a.Gc.add(f);
                      c.logger.log("register odb for " + f.Ja());
                      b.fire()
                  };
                  b.VG = f => a.Gc.contains(f);
                  b.ZE = function() {
                      return a.Gc
                  };
                  b.SM = function(f) {
                      b.unlock(f.G(), f.D());
                      b.fire()
                  };
                  b.ha = function() {
                      OBR.logger.log("odb cleanup");
                      a.Gc.ws();
                      a.ph.Me();
                      a.hf = !1;
                      a.qh = null
                  };
                  b.cb = function() {
                      a.Mc = c;
                      return a
                  };
                  b.A(OBR);
                  return b
              }();
              var Wh;
              Wh = () => {
                  window.OB_VIDEO && window.OB_VIDEO.reloadObVideo && window.OB_VIDEO.reloadObVideo()
              };
              OBR._jsc.Xh = (...a) => {
                  window.OB_VIDEO.init(...a)
              };
              var Yh = 1 / 3,
                  Zh = a => {
                      const b = a.v();
                      if (b) {
                          var c = OBR.g.H(b).querySelectorAll(".ob-dynamic-rec-link");
                          if (c) return Array.from(c).map(d => ({
                              Ka: b,
                              $I: d,
                              Qe: d.querySelector(".ob-grid-button-container"),
                              title: d.querySelector(".ob-rec-text"),
                              isRTL: a.Zc()
                          })).filter(d => !!d.Qe)
                      }
                  },
                  $h = a => a.Qe.clientWidth / a.$I.clientWidth > Yh,
                  ai = a => {
                      var b = window.getComputedStyle(a.Qe),
                          c = window.getComputedStyle(a.title);
                      b = vh(b.margin);
                      c = [b[0], b[1], b[2], vh(c.margin)[3]];
                      if (a.isRTL) {
                          const [d, e, f, g] = c;
                          c = [d, g, f, e]
                      }
                      a.title.style.margin = c.join(" ");
                      a.Qe.setAttribute("style", `${"display:block;width:100%;"}margin:${c.join(" ")};width: calc(100% - ${parseInt(c[1])+parseInt(c[3])}px)`);
                      a.Qe.parentElement.appendChild(a.Qe)
                  };
              var bi = [],
                  ci = a => {
                      a = a.l("customFontLinks", null);
                      try {
                          const b = a ? JSON.parse(a) : [];
                          if (Array.isArray(b)) return b
                      } catch (b) {}
                      return []
                  },
                  di = a => {
                      const b = document.createElement("link");
                      b.href = a;
                      b.rel = "stylesheet";
                      return b
                  },
                  ei = a => {
                      bi.push(a)
                  },
                  fi = a => {
                      const b = document.createDocumentFragment();
                      a.forEach(c => b.appendChild(c));
                      document.head.appendChild(b)
                  },
                  gi = a => {
                      a = ci(a);
                      const b = a.filter(c => !(0 <= bi.indexOf(c))).map(di);
                      a.forEach(ei);
                      fi(b)
                  };
              var yc = a => a.Go() ? OBR.g.Oa(a.xd()) : a.gu();
              var Gc = {},
                  Jc = (a, b) => new Promise(c => {
                      OBR.s.N(b, () => c(a), a, null, null, () => {
                          OBR.error({
                              name: "obm-GNR",
                              message: `Module name: ${b}, Could not load`,
                              stack: ""
                          })
                      })
                  }),
                  Kc = class {
                      constructor(a, b) {
                          this.j = a;
                          this.ic = !1;
                          this.qf = b;
                          this.dataBI = new OBR.dataBI(a, `${"gnr_"}${b}`)
                      }
                      Vd() {
                          this.uc = [];
                          this.ld = Array.from(this.xa.querySelectorAll("[data-pos]")).map(a => a.getAttribute("data-pos"));
                          OBR.Ha.Vb(this.j, {
                              lh: !0,
                              ek: (...a) => Bc(this, ...a)
                          })
                      }
                      Ie() {
                          const a = this.j.v();
                          if (a) {
                              Cc(this, "beforeRender");
                              OBR.controller.tJ(this.xa, this.j);
                              this.ic = !0;
                              if (this.j.Yc() && this.xa && a && a.attachShadow) {
                                  const b = this.j.Vi(),
                                      c = this.j.Kg();
                                  OBR.g.attachShadow(a, this.xa, {
                                      mode: "open"
                                  }, b, c)
                              }
                              Cc(this, "afterRender");
                              Hc(this)
                          } else OBR.error({
                              name: "obm-gnr",
                              message: `Container not found for widget idx ${this.j.G()}`
                          })
                      }
                  },
                  hi = class {
                      constructor() {
                          this.zf = {};
                          this.cd = {};
                          this.rm = {}
                      }
                      A(a, b, c = !1) {
                          try {
                              this.cd[b] && this.cd[b].loaded ? Lc(a, this.cd[b].options, b) : (this.zf[b] || this.N(a, b, c), this.cd[b].Fp.push(a))
                          } catch (d) {
                              OBR.error({
                                  name: "obm-GNR",
                                  message: `Error in module: ${b}, Err: Module could not init`,
                                  stack: d.stack
                              })
                          }
                      }
                      N(a, b, c) {
                          OBR.s.Fw(b, c ? "gnr_feature" : "gnr_module");
                          this.cd[b] = {
                              loaded: !1,
                              options: null,
                              Fp: []
                          };
                          this.zf[b] = Jc(a, b)
                      }
                  },
                  Ic = new hi;
              var Wc = [.7, .9, 1.2, 2],
                  ii = class {
                      constructor() {
                          this.eh = this.Ro();
                          this.ly = [];
                          OBR.i.mL && (Qc(this), Rc(this));
                          OBR.i.lL && this.jo()
                      }
                      A() {
                          this.ro = OBR.i.Ke || !!window["debug-amp"];
                          this.zj = this.j.fc();
                          this.thresholds = Xc(this);
                          this.zj && this.ro && Yc(this)
                      }
                      jo() {
                          this.dd = {
                              total: 0
                          };
                          this.AI = new PerformanceObserver(a => {
                              a.getEntries().forEach(b => {
                                  const c = b.transferSize;
                                  b = b.initiatorType;
                                  this.dd[b] || (this.dd[b] = 0);
                                  this.dd[b] += c;
                                  this.dd.total += c;
                                  Vc(this, this.dd.total)
                              })
                          });
                          try {
                              this.AI.observe({
                                  entryTypes: ["resource"]
                              })
                          } catch (a) {}
                      }
                      getError(a) {
                          const b = {},
                              c = {},
                              d = this.thresholds.filter(r => !!r.ud).map(r => 100 * r.xI),
                              e = this.ly,
                              f = Tc(this).join(","),
                              g = Zc(a.body.message),
                              k = this.j.o("pvId", null),
                              l = Uc(this),
                              q = window.OB_releaseVer,
                              h = OBR.i.Mv,
                              m = OBR.monitorData,
                              p = OBR.env;
                          a = {
                              sampleRate: 100,
                              thresholds: d,
                              videoEvents: e,
                              crashReason: g,
                              log: f,
                              amp: this.ro,
                              con: this.zj,
                              reportType: a.type,
                              reportUrl: a.url,
                              reportId: a.body.id
                          };
                          this.dd && (a.performance = this.dd);
                          OBR.F && (a.widgets = l);
                          b.name = "obm-InterventionHeavyAds";
                          b.version = q;
                          b.message = g;
                          b.env = p || 1;
                          b.stack = JSON.stringify(a);
                          b.url = h || location.href;
                          b.agent = navigator.userAgent.toLowerCase();
                          m && (b.sId = m.sourceId, b.dId = m.docId, b.pId = m.pubId);
                          Object.assign(c, a, {
                              pvid: k
                          });
                          return {
                              rH: b,
                              eF: c
                          }
                      }
                      Ro() {
                          const a = 1 * OBR.g.U("debug-intervention-sample", 100);
                          return 1 > Math.floor(Math.random() * a)
                      }
                      yp(a, b) {
                          this.ly.push({
                              event: a,
                              props: b
                          });
                          Sc(this, 1)
                      }
                      Jf(a) {
                          this.j = a;
                          this.Ee = new OBR.dataBI(this.j, b => b.az);
                          this.A()
                      }
                  };
              var ji, ki, dd;
              ji = class {
                  constructor() {
                      this.bd = {};
                      this.kh = [];
                      this.Zg = this.aq = !1;
                      this.Fq = 0;
                      this.dJ = OBR.Te(this.cJ, 100)
                  }
                  jo() {
                      this.oh = new PerformanceObserver(a => {
                          for (const b of a.getEntries()) this.kh.push(b)
                      });
                      this.oh.observe({
                          type: "layout-shift",
                          buffered: !1
                      })
                  }
                  cJ(a) {
                      const b = a.Y() || a;
                      b && (a = this.bd[b.D()], "undefined" === typeof a ? OBR.error({
                          name: "webVitalsMonitorWidgetsRenderError",
                          message: `this.layoutShifts allocation failed for ${b.D()}`
                      }) : (a.Yu || this.kh.length || (this.bd[b.D()].Tb = 0), this.kh.forEach(c => {
                          const d = c.value;
                          a: {
                              c = c.sources;
                              const l = b.v();
                              try {
                                  var e = JSON.parse(b.l("webVitalsMonitorSelectors", "[]"));
                                  var f;
                                  if (f = e.length) {
                                      b: {
                                          for (const q of c) {
                                              const h = q.node;
                                              for (const m of e) {
                                                  const p = m.selector,
                                                      r = m.relative || !1;
                                                  let t;
                                                  switch (m.type || "css") {
                                                      case "css":
                                                          t = document.querySelector(p);
                                                          break;
                                                      case "xpath":
                                                          t = document.evaluate(p, r ? l : document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
                                                  }
                                                  if (t === h) {
                                                      var g = p;
                                                      break b
                                                  }
                                              }
                                          }
                                          g = !1
                                      }
                                      f = !g
                                  }
                                  if (f) {
                                      var k = !1;
                                      break a
                                  }
                              } catch (q) {
                                  OBR.error({
                                      name: "webVitalsMonitorSelectorsError",
                                      message: `Could not parse selectors for: ${b.D()}`
                                  })
                              }
                              k = !0
                          }
                          k && (this.bd[b.D()].Tb += d)
                      }), this.aq = !1, this.kh = []))
                  }
              };
              ki = class {
                  constructor() {
                      this.Jo = this.ex = !1;
                      this.QG = "PerformanceObserver" in window && PerformanceObserver.supportedEntryTypes && -1 !== PerformanceObserver.supportedEntryTypes.indexOf("layout-shift")
                  }
                  fc(a) {
                      "undefined" === typeof this.Gu && (this.Gu = OBR.g.U("debug-webvitals-gdpr-compliant", a.fc()));
                      return this.Gu
                  }
              };
              dd = new ki;
              OBR._jsc.bd = new ji;
              var li = class {
                      constructor() {
                          this.Vo = [];
                          this.oy = !1;
                          this.Uo = null
                      }
                      reset() {
                          this.Vo.splice(0).forEach(a => a.unobserve())
                      }
                      Fd(a) {
                          return OBR.i.Fd && 0 < a.G()
                      }
                      pj(a) {
                          OBR.i.Fd = !0;
                          this.Uo = fd(a);
                          (a = OBR.wa.ZE()) && a.list && a.list.forEach(b => {
                              if (!b.he()) {
                                  var c = b.v();
                                  c && gd(this, c, b)
                              }
                          })
                      }
                      ho(a) {
                          if (!(!a || a.he && a.he())) {
                              this.Hb();
                              this.Uo = fd();
                              var b = a.v();
                              b && gd(this, b, a)
                          }
                      }
                      Hb() {
                          try {
                              const a = OBR._jsc.B("enableDebuggingReports") && 0 < OBR.settings.enableDebuggingReports;
                              !this.oy && a && (this.oy = !0, OBR.ya.get(`${OBR.i.fl}/WidgetErrorMonitor/api/report`, {
                                  name: "wlz-pvWidgetLazyLoad",
                                  level: "INFO",
                                  version: window.OB_releaseVer,
                                  env: OBR.env || 1,
                                  url: location.href,
                                  agent: navigator.userAgent.toLowerCase()
                              }))
                          } catch (a) {}
                      }
                  },
                  hd = new li;
              var mi = class {
                      Hb(a) {
                          if (a && a.v()) try {
                              const b = OBR.g.H(a.v()).querySelector("img.ob-rec-image");
                              b && (new Promise(c => b.addEventListener("load", () => c(b)))).then(c => {
                                  var d = c.naturalWidth * c.naturalHeight / (c.offsetWidth * c.offsetHeight);
                                  if (2 < d && 1 === OBR.g.$t(5E3)) {
                                      const e = {},
                                          f = {};
                                      e.name = "obm-ImagesDiffReport";
                                      e.imgSrc = c.src;
                                      e.url = window.location.href;
                                      f.originalWidth = c.naturalWidth;
                                      f.renderedWidth = c.offsetWidth;
                                      f.originalHeight = c.naturalHeight;
                                      f.renderedHeight = c.offsetHeight;
                                      f.wId = a.D();
                                      f.diff = d;
                                      f.clientDpr = OBR.i.Rm;
                                      a.Y() && (f.widgetFatherId = a.Y().D());
                                      OBR.monitorData && (e.pId = OBR.monitorData.pubId);
                                      d = (d = a.o("abTestVal", null)) && "no_abtest" !== d ? OBR.g.ik(d) : null;
                                      f.abTestVariantId = d && d.Zk || "no_abtest";
                                      f.abTestId = d && d.Pk || "no_abtest";
                                      if (c = jd(c.src)) f.urlImgDataCropStrategy = c.cs, f.urlImgDataDpr = c.d, f.urlImgDataFormat = c.f, f.urlImgDataHeight = c.h, f.urlImgDataWidth = c.w, f.urlImgDataImageUUID = c.iu;
                                      e.extra = JSON.stringify(f);
                                      OBR.ya.get(OBR.i.vy, e)
                                  }
                              }).catch(c => {
                                  OBR.error({
                                      name: "obm-ImageCompareMonitoring",
                                      message: `error ${c.name} while trying sent report for images size diff`
                                  })
                              })
                          } catch (b) {
                              OBR.error({
                                  name: "obm-ImageCompareMonitoring",
                                  message: `error ${b.name} while trying sent report for images size diff - no image was found`
                              })
                          }
                      }
                  },
                  ni = new mi;
              var oi = class {
                  A(a) {
                      if (a && a.Y()) {
                          this.zp = a.v();
                          this.Uh = a.Y().v().parentElement;
                          const b = a.l("cardMargin", 0);
                          this.zp.style.cssText = `margin:${b}`;
                          if (this.Uh && this.Uh.classList.contains("ob-smartfeed-wrapper")) try {
                              if (OBR.g.la(this.Uh.firstChild, "ob-parent-feed"), this.Uh.insertBefore(this.zp, this.Uh.firstChild), OBR.g.Ea(this.zp, "ob-onload"), a.Po()) kd(a);
                              else {
                                  const c = a.v().querySelector(".ob-onyx-sponsored-container"),
                                      d = a.dc("display", null);
                                  d && d.html && (c.style.width = `${d.width}px`, c.style.margin = "0 auto 2px",
                                      c.classList.remove("ob-sponsored-hide"))
                              }
                          } catch (c) {
                              OBR.error({
                                  name: "obm-OnyxATF",
                                  message: c.message,
                                  stack: c.stack
                              })
                          }
                      }
                  }
              };
              var pi;
              OBR._jsc.qi = class {
                  constructor(a, b) {
                      this.j = a || new OBR.Wl(-1);
                      this.settings = b instanceof Function ? b(O) : b;
                      this.td = this.settings.fa || this.settings;
                      this.$C = OBR.i.Ap + "logger/v1/widget/";
                      this.sessionId = this.j.o("req_id", -1) + (new Date).getTime();
                      this.isActive = !0;
                      this.fs = new pi(this.td);
                      this.fo()
                  }
                  fo() {
                      const a = Object.values(this.JA).find(b => b.fa == this.td);
                      a && a.R && (this.B = Object.keys(a.R).reduce((b, c) => {
                          b[c] = {
                              fire: this.fire.bind(this, a.R[c])
                          };
                          return b
                      }, {}))
                  }
                  event(a) {
                      return a(this.B)
                  }
                  fire(a, b, c) {
                      b = b || {};
                      c = Object.assign({
                              method: OBR.i.V.Da
                          },
                          c || {});
                      if (this.isActive && "undefined" !== typeof b && "undefined" !== typeof c) {
                          var d = c.callback ? c.callback : function() {};
                          b = b ? b : {};
                          c.LIMIT && this.fs.get(a) >= c.LIMIT || (md(this.fs, a), a = this.ei(a, b, c), OBR.ya.send(c.method, this.$C, a, d, !0, null, null, !0))
                      }
                  }
                  ei(a, b, c) {
                      const d = {};
                      var e = this.j.Y(),
                          f = !!e,
                          g = !this.j.Na() && f;
                      f = g ? e.o("wnid", "") : this.j.o("wnid", "");
                      const k = g || this.j.Na() ? this.j.o("wnid", "") : null;
                      e = g ? e.o("widgetJsId", "") : this.j.o("widgetJsId", "");
                      g = g || this.j.Na() ? this.j.o("widgetJsId", "") : null;
                      b.ajaxMethod =
                          c.method;
                      b.clientTimestamp = Date.now();
                      b.timestamp = "";
                      b.publisherId = this.j.o("pid", "");
                      b.sectionId = this.j.o("sid", "");
                      b.widgetJsId = e;
                      b.widgetId = f;
                      b.subWidgetJsId = g;
                      b.subWidgetId = k;
                      b.cardIdx = this.j.Ti();
                      b.docId = this.j.o("did", "");
                      b.uuid = this.j.o("lsd", "");
                      b.platform = this.j.o("readerPlatform", "");
                      b.deviceOs = "";
                      b.deviceOrientation = OBR.g.zn();
                      b.layeredTest = this.j.o("layeredTestInfo", "no_layers");
                      this.j.zd(!0) || delete b.uuid;
                      d.sessionId = c.sessionId ? c.sessionId : this.sessionId;
                      d.eventGroup = this.td;
                      d.eventTypeId =
                          a;
                      d.requestId = this.j.o("req_id", -1);
                      d.attributes = JSON.stringify(b);
                      return d
                  }
                  setActive(a) {
                      this.isActive = a
                  }
              };
              pi = class {
                  constructor(a) {
                      this.td = a;
                      this.ud = {}
                  }
                  get(a) {
                      ld(this, a);
                      return this.ud[`${this.td}-${a}`]
                  }
              };
              OBR._jsc.qi.prototype.JA = Object.keys(O).reduce((a, b) => {
                  a[b] = O[b];
                  return a
              }, {});
              OBR.dataBI = OBR._jsc.qi;
              OBR.dataBI.settings = O;
              var ri = new OBR.Ub,
                  G = {
                      Ig(a, b) {
                          ri.fire("afterRender", [b], !1, a)
                      },
                      th(a) {
                          OBR.controller.th(a)
                      },
                      Df(a) {
                          OBR.controller.Df(a)
                      },
                      createElement(a, b, c, d) {
                          return OBR.g.createElement(a, b, c, d)
                      },
                      ia(a) {
                          OBR.g.ia(a)
                      },
                      v(a) {
                          return OBR.g.v(a)
                      },
                      wd(a) {
                          if (a = OBR.F[a]) return a.o("abTestVal", null)
                      },
                      Bn(a) {
                          return (a = OBR.F[a]) ? a.o("layeredTestInfo", null) : null
                      },
                      L(a, b) {
                          return OBR.g.L(a, b)
                      },
                      Jg(a) {
                          if (a = OBR.F[a]) return a.Jg()
                      },
                      na(a) {
                          return OBR.F[a]
                      },
                      di(a) {
                          return OBR.controller.di(a)
                      },
                      U(a) {
                          return OBR.g.U(a, null)
                      },
                      jN() {
                          return OBR.controller
                      },
                      T() {
                          return OBR.i
                      },
                      uj() {
                          return "true" === OBR.kb.uj()
                      },
                      vj() {
                          return "true" === OBR.kb.vj()
                      },
                      wp(a, b, c = {}) {
                          const d = a && a.getAttribute("id") ? [a.getAttribute("id").substr(16)] : [];
                          (new OBR.IntersectionObserver(Object.assign({
                              element: a,
                              callback: b,
                              threshold: [0],
                              unobserve: !0,
                              callbackParams: d
                          }, c))).observe()
                      },
                      N(a, b) {
                          OBR.s.N(a, b)
                      }
                  };
              var od = a => {
                      const b = document.createElement("div");
                      b.innerHTML = a;
                      return b.firstChild
                  },
                  Ge = (a, b = !1) => {
                      if (a = G.v(a)) return b ? OBR.g.H(a).querySelector(".ob-cards") : a.parentNode
                  },
                  si = (a = !1, b, c) => {
                      const d = document.createDocumentFragment();
                      c.forEach(e => e && d.appendChild(e));
                      (a = Ge(b, a)) && a.appendChild(d)
                  },
                  ti = (a, b, c) => {
                      let d = !0;
                      const e = 1.1 * b;
                      c.forEach(f => {
                          f.style.opacity = 0;
                          a.appendChild(f);
                          a.scrollHeight <= e ? f.style.opacity = 1 : (d = !1, f.parentNode.removeChild(f))
                      });
                      return d
                  },
                  ui = (a = !1, b, c) => {
                      const d = document.createDocumentFragment();
                      d.appendChild(c);
                      (a = Ge(b, a)) && a.appendChild(d)
                  },
                  He = a => {
                      var b = a && a.D();
                      b = `.ob_sf_loader, ${b?`.${b}`:""}.ob-chunks-loader`;
                      if (a && (a = (a = (a = a.v()) && a.parentNode && a.parentNode.querySelectorAll(b)) && Array.from(a)) && a.length && null !== a[0].parentNode) {
                          for (b = 0; b < a.length; b++) {
                              const c = a[b];
                              c.parentNode.removeChild(c)
                          }
                          return
                      }(b = document.querySelector(b)) && null !== b.parentNode && b.parentNode.removeChild(b)
                  },
                  vi = (a = 0) => {
                      (a = G.na(a)) && (a = a.v()) && a.style.removeProperty("visibility")
                  };
              var ie = {
                  error(a) {
                      OBR.logger.log(`[ERROR] ${a}`)
                  },
                  log(a) {
                      OBR.logger.log(a)
                  }
              };
              var xi = class {
                      constructor(a) {
                          wi || (wi = this);
                          this.j = a;
                          this.dataBI = new OBR.dataBI(this.j, b => b.Py);
                          this.ti = {};
                          this.count = 0;
                          return wi
                      }
                      pd(a) {
                          a.event.fire(a.data)
                      }
                  },
                  wi;
              var yi = class {
                      constructor() {
                          this.className = "ob-smartfeed-adjoker";
                          this.adInfo = {};
                          this.logger = ie
                      }
                      create({
                          adInfo: a
                      }) {
                          this.adInfo = a;
                          this.sd = new xi(G.na(this.adInfo.fatherCardIdx));
                          if (a.adType) switch (a.adType.toLowerCase()) {
                              case "gpt":
                                  return vd(this);
                              case "dfp":
                                  return wd(this);
                              case "adsense":
                                  a: {
                                      try {
                                          var b = this.adInfo.cardIdx,
                                              c = this.adInfo.adClient,
                                              d = this.adInfo.adSlot,
                                              e = `ad-unit-/${b}`,
                                              f = G.createElement("div", e, null, {
                                                  "data-card-idx": b,
                                                  "data-feed-father-idx": this.adInfo.fatherCardIdx
                                              }),
                                              g = G.createElement("script",
                                                  null, null, {
                                                      src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
                                                      async: "true"
                                                  }),
                                              k = G.createElement("ins", null, "display:inline-block;width:100%;height:200px", {
                                                  "class": `${this.className} adsbygoogle`,
                                                  "data-ad-client": c,
                                                  "data-ad-slot": d
                                              }),
                                              l = G.createElement("script", null, null, null);
                                          l.innerText = `googletag.cmd.push(function() {googletag.display('${e}')\;})`;
                                          f.appendChild(g);
                                          f.appendChild(k);
                                          f.appendChild(l);
                                          var q = f;
                                          break a
                                      } catch (h) {
                                          this.logger.error(h)
                                      }
                                      q = void 0
                                  }
                                  return q;
                              case "gptframe":
                              case "pb":
                                  a: {
                                      q =
                                      this.adInfo.cardIdx;b = this.adInfo.fatherCardIdx;c = this.adInfo.adId;d = this.adInfo.adPath;f = this.adInfo.adType;g = this.adInfo.adWidth;k = this.adInfo.adHeight;a = G.na(b);l = a.o("abTestVal");a = a.o("pid");
                                      try {
                                          const h = `thirdPartyType=${f}&thirdPartyId=${c}&adPath=${d}&width=${g}&height=${k}&refferer=${window.location.host}&pubId=${a}&abTestVal=${l}&feedIdx=${b}`,
                                              m = G.createElement("div", null, "position: relative; height: 120vw; margin: auto; max-width: 640px; max-height: 499px; display: none", {
                                                  "class": this.className,
                                                  "data-card-idx": q,
                                                  "data-feed-father-idx": b
                                              }),
                                              p = G.createElement("iframe", null, "position: absolute; top: 0; left : 0; height: 100%; width: 100%; border: 0;", {
                                                  src: `${OBR.i.ma}widgets.outbrain.com/nanoWidget/externals/ob3rdPFrame/ob3rdPFrame.htm?${h}`
                                              });
                                          yd(m);
                                          m.appendChild(p);
                                          e = m;
                                          break a
                                      } catch (h) {
                                          this.logger.error(h)
                                      }
                                      e = void 0
                                  }
                                  return e;
                              default:
                                  return a ? this.logger.error(`adJoker type is of unknown type: ${a.adType}`) : this.logger.error(`adJoker information object is ${a}`), xd()
                          }
                          qd(`adJoker could not be created ${a}`);
                          return xd()
                      }
                  },
                  Bd = new yi;
              var zi = class {
                      create({
                          cardIdx: a,
                          fatherCardIdx: b
                      }) {
                          try {
                              return G.createElement("div", null, null, {
                                  "class": "ob-smartfeed-joker",
                                  "data-card-idx": a,
                                  "data-feed-father-idx": b,
                                  "data-joker-placeholder": ""
                              })
                          } catch (c) {
                              return ie.error(`joker placeholder failed. error: ${c}`), od('<div class="ob-no-joker-card"></div>')
                          }
                      }
                  },
                  Cd = new zi;
              var Ai = class {
                      create({
                          cardIdx: a,
                          fatherCardIdx: b,
                          Oj: c
                      }) {
                          a = G.createElement("div", null, null, {
                              "class": "ob-smartfeed-joker",
                              "data-card-idx": a,
                              "data-feed-father-idx": b
                          });
                          c = c.selector;
                          b = document.querySelector(c);
                          if (null !== b) return b.parentNode.removeChild(b), b.style.display = "block", a.appendChild(b), a;
                          ie.error(`joker failed - '${c}'`);
                          return od('<div class="ob-no-joker-card"></div>')
                      }
                  },
                  Bi = new Ai;
              var zd = {
                  joker: (a, b, c) => {
                      if (!a) ie.error(`JokerCard failed - '${a.selector}'`);
                      else if (a && a.selector) {
                          const d = document.querySelector(a.selector);
                          d ? d.style.display = "none" : ie.error(`JokerCard failed joker selector was not found on page - selector: '${a.selector}'`)
                      }
                      return Bi.create({
                          cardIdx: b,
                          fatherCardIdx: c,
                          Oj: a
                      })
                  },
                  adJoker: (a, b, c) => Bd.create({
                      adInfo: {
                          cardIdx: b,
                          fatherCardIdx: c,
                          adType: a.adType,
                          adId: a.adId,
                          adWidth: a.adWidth,
                          adHeight: a.adHeight,
                          adPath: a.adPath,
                          adData: a.adData,
                          adClient: a.adClient,
                          adSlot: a.adSlot,
                          adContainerWidth: a.adContainerWidth,
                          adContainerHeight: a.adContainerHeight,
                          adStyle: a.adStyle
                      }
                  }),
                  placeholderJoker: (a, b, c) => Cd.create({
                      cardIdx: b,
                      fatherCardIdx: c
                  })
              };
              var Ci = class {
                      create(a, b) {
                          try {
                              a: {
                                  var c = G.na(b);
                                  try {
                                      if (c) {
                                          var d = c.l("passbackTagSize", "300x250").split("x");
                                          break a
                                      }
                                  } catch (l) {}
                                  d = [300, 250]
                              }
                              const [e, f] = d,
                              g = Ge(b, !1),
                              k = document.createElement("iframe");k.style.height = `${f}px`;k.style.width = `${e}px`;k.style.border = "0";g.parentNode.insertBefore(k, g.nextSibling);g.style.display = "none";k.contentWindow.document.open();k.contentWindow.document.write(`
    <style> body {margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;}</style>
    <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
    <div id="gpt-passback">
      <script>
        window.googletag = window.googletag || {cmd: []};
        googletag.cmd.push(function() {
            googletag.defineSlot('${a}', [${e}, ${f}], 'gpt-passback')
              .addService(googletag.pubads());
            googletag.enableServices();
            googletag.display('gpt-passback');
        });
      </script>
    </div>`);k.contentWindow.document.close()
                          }
                          catch (e) {
                              OBR.logger.log(e)
                          }
                          return od('<div class="passback-tag"></div>')
                      }
                  },
                  Dd = new Ci;
              var Fd = [],
                  Di = class {
                      constructor() {
                          this.CG = !1
                      }
                      A(a, b) {
                          b = parseInt(b, 10);
                          this.fc = a.fc();
                          a.Kq() && a.Na() && Fd.push({
                              feedIdx: b,
                              isSkeleton: !0
                          });
                          this.eh = this.Ro()
                      }
                      Ro() {
                          const a = 1 * OBR.g.U("debug-widget-stats-sample", 1E5);
                          return 1 > Math.floor(Math.random() * a)
                      }
                      Pg(a, b) {
                          const c = {};
                          if (!b && !this.eh) return {
                              kc: c,
                              gt: {}
                          };
                          var d = a.v();
                          b = window.getComputedStyle(d);
                          var e = d.offsetWidth;
                          d = d.offsetHeight;
                          const {
                              width: f,
                              height: g,
                              outerWidth: k,
                              outerHeight: l
                          } = {
                              width: e,
                              height: d,
                              outerWidth: e + parseInt(b.marginLeft, 10) + parseInt(b.marginRight,
                                  10),
                              outerHeight: d + parseInt(b.marginTop, 10) + parseInt(b.marginBottom, 10)
                          };
                          e = window.OB_releaseVer;
                          b = OBR.monitorData;
                          d = OBR.env;
                          c.name = "obm-WidgetDimensions";
                          c.version = e;
                          c.env = d || 1;
                          a = {
                              widgetName: a.D(),
                              widgetId: a.o("wnid", a.D()),
                              screenWidth: window.innerWidth,
                              screenHeight: window.innerHeight,
                              width: f,
                              height: g,
                              outerWidth: k,
                              outerHeight: l,
                              platform: a.o("readerPlatform", "desktop"),
                              feedVersion: a.o("feedVersion") || "1"
                          };
                          c.url = location.href;
                          c.agent = navigator.userAgent.toLowerCase();
                          b && (c.sId = b.sourceId, c.dId = b.docId,
                              c.pId = b.pubId);
                          return {
                              kc: c,
                              gt: a
                          }
                      }
                      Jf(a, b) {
                          try {
                              if (this.CG || this.A(a, b), this.fc) {
                                  var c = Gd(b),
                                      {
                                          kc: d,
                                          gt: e
                                      } = this.Pg(a, c);
                                  if (this.eh) {
                                      const f = `${OBR.i.fl}/WidgetErrorMonitor/api/report`;
                                      d.extra = JSON.stringify(e);
                                      OBR.ya.get(f, d)
                                  }
                                  c && Jd(e, b)
                              }
                          } catch (f) {
                              OBR.error({
                                  name: "SetSkeletonError",
                                  message: "Could not set skeleton values",
                                  e: f
                              })
                          }
                      }
                  },
                  we = new Di;
              var Ei = class {
                      constructor() {
                          this.A()
                      }
                      A() {
                          this.K = {};
                          this.To = Promise.resolve();
                          this.qe = null
                      }
                      hq(a, b) {
                          this.K[a].wD = b
                      }
                      Ze(a) {
                          return this.K[a].wD
                      }
                      Ja() {
                          return this.qe
                      }
                      Ck(a) {
                          this.qe = a
                      }
                      Dh(a, b = L(this)) {
                          this.K[b].Hp = a
                      }
                      Jj(a = L(this)) {
                          return this.K[a].Jj
                      }
                  },
                  K = new Ei;
              var he = class {
                  constructor(a, b, c) {
                      this.P = G;
                      const d = this.P.T().Wv;
                      this.j = G.na(a);
                      this.Ef = this.j.Eb() ? `${d}/Multivac/api/platforms?` : `${d}/Multivac/api/get?`;
                      this.Bb = a;
                      this.ad = b;
                      this.tH = c;
                      this.qe = this.j.Ja()
                  }
                  gi() {
                      fe(this, kc.gi());
                      return this
                  }
                  fi() {
                      fe(this, kc.fi(this.j));
                      return this
                  }
              };
              var pe = (a, b, c) => {
                  const d = parseInt(performance.now());
                  Xb.mark(a, "mv", "start", !0);
                  return new Promise((e, f) => {
                      const g = document.createElement("script");
                      g.src = b;
                      g.onerror = function() {
                          f({
                              name: "multivac",
                              message: "multivac call failed"
                          });
                          OBR.g.xh(g)
                      };
                      OBR.extern.returnedVacData = k => {
                          k.yA = {
                              da: a.D(),
                              ja: c,
                              timestamp: d
                          };
                          const l = Rh.Lk.stop().getTime();
                          a.nK(l);
                          e(k);
                          OBR.g.xh(g)
                      };
                      document.body.appendChild(g);
                      Rh.Lk.start()
                  })
              };
              var Ki = class {
                      constructor(a) {
                          this.response = a;
                          this.ni = a.cards.map(b => {
                              switch (b.cardType) {
                                  case "widget":
                                      return new Fi(b);
                                  case "joker":
                                      return new Gi(b);
                                  case "adJoker":
                                      return new Hi(b);
                                  case "placeholderJoker":
                                      return new Ii(b);
                                  case "passback":
                                      return new Ji(b);
                                  default:
                                      ie.error(`card type "${b.cardType}" is not supported`)
                              }
                          }).filter(b => void 0 !== b)
                      }
                      $() {
                          const a = this.ni.filter(b => "widget" === b.$().ta);
                          return {
                              Pq: a,
                              Bb: this.response.feedIdx,
                              ce: this.response.hasMore,
                              oi: this.ni,
                              lf: this.ni[this.ni.length - 1],
                              LB: [a[0],
                                  a[a.length - 1]
                              ],
                              Hp: this.response.nextFeedURL
                          }
                      }
                  },
                  Fi = class {
                      constructor(a) {
                          this.W = a;
                          this.timestamp = Date.now();
                          this.Qj = !1;
                          if ((a = this.W.response) && a.settings && a.request) {
                              var b = G.na(a.request.feedIdx);
                              b = !!b && "None" !== b.Vt();
                              const c = "odb_dynamic_display" === a.settings.recMode,
                                  d = "non_onyx" !== a.settings.OnyxServingMode,
                                  e = a.settings.onyxLazyRenderViewportDistance;
                              a = "1" === a.request.fCard;
                              if (this.Qj = 0 < e && b && d && c && a) this.Wo = e ? {
                                  rootMargin: `${parseInt(e)}% 0px`
                              } : null
                          }
                      }
                      dh() {
                          return this.Qj
                      }
                      Mj(a) {
                          var b = (b = this.W.response.settings &&
                              this.W.response.settings.skipCardRenderIfTimePassed) ? 6E4 * b : 0;
                          return 0 === b ? !1 : a - this.timestamp > b
                      }
                      $() {
                          return {
                              ta: this.W.cardType,
                              OI: this.W,
                              html: this.W.response.html,
                              ra: this.W.response.request.widgetJsId,
                              ja: this.W.response.request.idx,
                              cardIdx: this.W.response.request.fCard,
                              dh: this.Qj,
                              Wo: this.Wo,
                              Mj: a => this.Mj(a),
                              tB: this.W.response.settings && this.W.response.settings.intersectionObserverTriggerMargin
                          }
                      }
                  },
                  Ii = class {
                      constructor(a) {
                          this.W = a
                      }
                      $() {
                          return {
                              ta: this.W.cardType,
                              Oj: this.W.response,
                              cardIdx: this.W.fCard,
                              Oc: this.W.response.callback
                          }
                      }
                  },
                  Ji = class {
                      constructor(a) {
                          this.W = a
                      }
                      $() {
                          return {
                              ta: this.W.cardType,
                              wI: this.W.passbackCode
                          }
                      }
                  },
                  Gi = class {
                      constructor(a) {
                          this.W = a
                      }
                      $() {
                          return {
                              ta: this.W.cardType,
                              Oj: this.W.response,
                              cardIdx: this.W.fCard
                          }
                      }
                  },
                  Hi = class {
                      constructor(a) {
                          this.W = a
                      }
                      $() {
                          return {
                              ta: this.W.cardType,
                              adId: this.W.response.adId,
                              adWidth: this.W.response.adWidth,
                              adHeight: this.W.response.adHeight,
                              adPath: this.W.response.adPath,
                              adData: this.W.response.adData,
                              adClient: this.W.response.adClient,
                              adSlot: this.W.response.adSlot,
                              adType: this.W.response.adType,
                              adContainerWidth: this.W.response.adContainerWidth,
                              adContainerHeight: this.W.response.adContainerHeight,
                              cardIdx: this.W.fCard,
                              adStyle: this.W.response.adStyle
                          }
                      }
                  };
              var Li = class {
                      constructor(a, b) {
                          this.Bb = a;
                          this.FG = b;
                          this.Yb = xb(Db);
                          this.je = vb();
                          this.Cm = K.K[a].Gg;
                          this.oe = G.na(a)
                      }
                  },
                  Mi = (a, b = !1) => ve(new Li(a, b));
              var Ni = class {
                      constructor() {
                          this.Mu = !0;
                          this.Yn = [];
                          this.kk = [];
                          this.Aj = !0
                      }
                      Dh(a) {
                          const b = a.G();
                          (a.xc() || a.zc() || a.Ac()) && (a = a.ba("nextFeedUrl")) && K.Dh(a, b)
                      }
                      Js(a) {
                          const b = a.G(),
                              c = G.na(b);
                          Nd(K, b) || (Od(K, b), this.Dh(a), ye(b, c), G.T().zv || Fe(this, b, 0))
                      }
                      Ot(a, b) {
                          a = {
                              tg: Mi(a),
                              md: b
                          };
                          b = Db;
                          try {
                              if (a.tg) {
                                  b.mf = vb();
                                  var c = b.mf ? ub(a) : Fb(b, a)
                              } else c = ub()
                          } catch (d) {
                              c = ub(a)
                          }
                          return c
                      }
                      vf(a) {
                          if (a) {
                              var b = (new Ki(a)).$(),
                                  c = b.oi,
                                  d = b.Bb,
                                  e = b.LB,
                                  f = b.Hp;
                              if (K.K[d]) {
                                  var {
                                      Pq: g,
                                      lf: k
                                  } = b, [l, q, h] = [G.na(d), !Xd(K, "feedManualChunkFetch", d), Xd(K,
                                      "feedLayout", d)], m = JSON.parse(b.ce);
                                  if (l && (l.tx(c.length), Xb.mark(l, "mv", "end", !0), !Ke(this, l, g, a) && (He(l), this.Aj = !1, vi(d), f && K.Dh(f, d), c && 0 !== c.length ? a = !1 : (m && $e(this, d), a = !0), !a))) {
                                      var p = Me(c),
                                          r = Me(g),
                                          t = (u, v) => {
                                              u = this.Cn(u);
                                              if (!u || !u.length) return [];
                                              var w = Ne(this, u, d),
                                                  A = v;
                                              v = k;
                                              var D = m,
                                                  E = w;
                                              const [J, I, V] = ["2" === K.Ze(d), l.Pt(), Xd(K, "feedLayout", d)];
                                              if (J && I) {
                                                  w = A;
                                                  const R = l.Pt();
                                                  A = w;
                                                  var P = E;
                                                  const W = 1.1 * R,
                                                      Z = Ge(d, Xd(K, "feedLayout", d));
                                                  let ca = null;
                                                  G.ia(`.ob-feed-${d}-max-height {max-height: ${W}px; overflow: hidden;} .ob-feed-${d}-max-height .ob-grid-layout .ob-widget-items-container {display:grid;}`);
                                                  OBR.g.la(Z, `ob-feed-${d}-max-height`);
                                                  ti(Z, R, P) || (ca = {
                                                      Pq: df(A, P),
                                                      ce: !1,
                                                      KB: ef(P)
                                                  });
                                                  OBR.g.Ea(Z, `ob-feed-${d}-max-height`);
                                                  if (A = ca) w = A.Pq, v = w.slice(-1)[0], D = A.ce, E = A.KB;
                                                  [A, v, D, E] = [w, v, D, E]
                                              } else si(V, d, E);
                                              [v, k, m, w] = [A, v, D, E];
                                              Oe(w);
                                              Qe(v, d, l.kE());
                                              this.Nc(u, v, d);
                                              return w
                                          };
                                      Se(l, p, () => t(p, r));
                                      a = t(c, g);
                                      Le(l, a, d, m);
                                      Pd(m, d, k.$());
                                      Ue(this, l);
                                      q && m && Ve(this, d, e);
                                      We(this, d, c);
                                      Ud(K, d) && Vd(K, !1, d);
                                      Ye(h, d, g, m);
                                      return {
                                          Bb: d,
                                          lf: k
                                      }
                                  }
                              }
                          }
                      }
                      Nc(a, b, c) {
                          af(b);
                          this.Ig(b);
                          bf(a, c)
                      }
                      Ig(a) {
                          a.map(b => {
                              b = b.$().ja;
                              return G.na(b)
                          }).filter(b =>
                              !b.ef()).forEach(b => {
                              G.Ig(b, b.G())
                          })
                      }
                      wp(a, b) {
                          const c = (K.K[a] || {}).ad,
                              d = b.tB || K.K[a].VF,
                              e = G.v(b.ja);
                          Ae(e, "yellow");
                          G.wp(e, () => Fe(this, a, c, e), {
                              rootMargin: `${d}px 0px`
                          })
                      }
                      Cn(a) {
                          a = Ze(a);
                          return cf(this, a)
                      }
                      Ei(a = L(K)) {
                          if (G.na(a)) {
                              ye(a, G.na(a));
                              if (Xd(K, "feedManualChunkFetch", a)) return Ie(this, a), !0;
                              qd("externalChunkLoad called but feed is not set for external chunk fetching");
                              return !1
                          }
                          qd(`externalChunkLoad called but feedIdx=${a} not found`);
                          return !1
                      }
                      ha() {
                          K.A()
                      }
                  },
                  Oi = new Ni;
              var Pi = class {
                  constructor(a) {
                      this.rf = [];
                      this.ls = this.check.bind(this);
                      this.ls();
                      this.Oc = a
                  }
                  observe(a) {
                      this.rf.some(b => b.za === a) || this.rf.push({
                          za: a,
                          size: {
                              height: a.clientHeight,
                              width: a.clientWidth
                          }
                      })
                  }
                  unobserve(a) {
                      this.rf = this.rf.filter(b => b.za !== a)
                  }
                  disconnect() {
                      this.rf = []
                  }
                  check() {
                      const a = this.rf.filter(b => {
                          const c = b.za.clientHeight,
                              d = b.za.clientWidth;
                          if (b.size.height !== c || b.size.width !== d) return b.size.height = c, b.size.width = d, !0
                      }).map(b => b.za);
                      0 < a.length && this.Oc(a);
                      window.requestAnimationFrame(this.ls)
                  }
              };
              var Qi = !!window.ResizeObserver,
                  Ri = class extends Ni {
                      vf(a) {
                          var b = new Ki(a);
                          const {
                              oi: c,
                              Bb: d
                          } = b.$();
                          var e = G.na(d);
                          e.tx(c.length);
                          Xb.mark(e, "mv", "end", !0);
                          He(e);
                          vi(d);
                          b = JSON.parse(b.$().ce);
                          if (c && 0 !== c.length) {
                              var f = !Xd(K, "feedManualChunkFetch", d),
                                  g = e.l("sideElementFeedLimiter", null),
                                  k = e.l("sideElementLimiterOffset", 0),
                                  l = e.l("SideElementFeedLimiterFlow", null);
                              g = document.querySelector(g);
                              var q = Ne(this, c, d);
                              k = this.Cn(g, d, q, l, k);
                              ff(c, e);
                              l = gf(c, k);
                              Oe(k);
                              Qe(l, d);
                              this.Nc(c, l, d);
                              k.length < q.length ? (l && l.length &&
                                  (e = l[l.length - 1], Pd(b, d, e.$())), a.cards = a.cards.slice(k ? k.length : 0), a && a.cards && Qd(d, a), !b || K.Jj(d) || ae(K, d) || (this.sf(g, d), $d(K, !0, d))) : (e = l[l.length - 1], a = [l[0], e], Pd(b, d, e.$()), f && b && Ve(this, d, a));
                              Ud(K, d) && Vd(K, !1, d)
                          } else b && $e(this, d)
                      }
                      Cn(a, b, c, d, e) {
                          const f = [];
                          if (null === a) return c;
                          const g = Xd(K, "feedLayout", b);
                          for (let l of c) {
                              ui(g, b, l);
                              c = a;
                              var k = d;
                              const q = G.v(b).parentNode,
                                  h = c.getBoundingClientRect(),
                                  m = q.getBoundingClientRect();
                              if ((k && "copy-article-height" === k ? c.clientHeight - q.clientHeight : h.bottom -
                                      m.bottom) < -1 * e) {
                                  l.parentNode.removeChild(l);
                                  break
                              }
                              f.push(l)
                          }
                          return f
                      }
                      sf(a, b) {
                          try {
                              const c = a.offsetHeight,
                                  d = OBR.Te(f => {
                                      be(K, b);
                                      for (let k of f)
                                          if ((k.offsetHeight || k.contentRect.height) > 1.1 * c) {
                                              e.unobserve(a);
                                              f = b;
                                              var g = K;
                                              g = f ? g.K[f].pw : void 0;
                                              g ? this.vf(g) : Fe(this, f, Rd(f), null)
                                          }
                                  }, 500),
                                  e = Qi ? new window.ResizeObserver(d) : new Pi(d);
                              e.observe(a)
                          } catch (c) {
                              OBR.logger.log(c)
                          }
                      }
                      Ot(a, b) {
                          a = {
                              tg: Mi(a, !0),
                              md: b
                          };
                          return ub(a)
                      }
                  },
                  Si = new Ri;
              var Ti = class {
                      A(a) {
                          const b = a.oe.l("sideElementFeedLimiter", null);
                          b && document.querySelector(b) ? xe(Si, a) : xe(Oi, a)
                      }
                      Ei(a) {
                          return Oi.Ei(a)
                      }
                      tk(a, b) {
                          return De(Oi, a, b)
                      }
                      ha() {
                          Oi.ha();
                          Si.ha()
                      }
                  },
                  Ui = new Ti;
              var Vi = class {
                      A() {
                          try {
                              jf(this)
                          } catch (a) {
                              OBR.g.ie("obm-gpp_fail", document.location.hostname, !1, 100)
                          }
                      }
                  },
                  Wi = new Vi;
              OBR.controller = OBR.controller || function() {
                  var a, b = {},
                      c = {},
                      d = {
                          rO: ""
                      },
                      e = !0,
                      f, g = !1;
                  b.Pv = "manualDataReady";
                  b.ep = "manualClickReady";
                  var k = !1;
                  b.A = function(h) {
                      a = h = h || OBR;
                      f = new a.Ub;
                      c.kf();
                      b.EF();
                      c.aH() && (c.tj = new ii)
                  };
                  b.bx = function() {
                      c.NC();
                      a.bb.hI(c.aM);
                      a.display.uf(b.Nc);
                      a.i.ZF && c.yH();
                      a.i.sq && c.DH();
                      Lh.isEnabled && OBR.s.PF();
                      OBR.i.fG && (window.OB_BROWSI_WIDGETS = {
                          inArticle: {
                              ids: [OBR._jsc.B("browsiOrganicReferrer")]
                          }
                      }, OBR.s.N(OBR.s.u.Vq, () => {}, this, null, null, null, {
                          id: "browsi-tag",
                          "data-pubkey": "outbrain",
                          "data-sitekey": "d_mapping"
                      }));
                      OBR.i.Yj && c.Iv();
                      b.ZK() ? b.Ns = setTimeout(() => {
                          OBR.bb.Ji();
                          g = !0;
                          (new OBR._jsc.qi(null, h => h.kz)).B.Ny.fire({})
                      }, 2E3) : a.bb.Ji()
                  };
                  b.cb = function() {
                      return c
                  };
                  b.YD = function() {
                      return f
                  };
                  b.iJ = function(h) {
                      f.add("onHtmlReturn", h)
                  };
                  b.nJ = function(h) {
                      f.add("onWidgetRendered", h);
                      OBR.F && OBR.F.length && OBR.F.forEach(m => {
                          "function" === typeof h && m.ic() && h(m)
                      })
                  };
                  b.kJ = function(h) {
                      f.add("noRecs", h)
                  };
                  c.Nh = function(h) {
                      if (OBR.i.Nh && a.i.Wb !== a.i.ll && a.i.Wb !== a.i.dr && !a.i.M && document.querySelectorAll &&
                          h && (h = h.v())) {
                          h = OBR.g.H(h).querySelectorAll(".ob-dynamic-rec-link,A.item-link-container,DIV.item-container > A:first-child,.odb_li .rec-link");
                          for (let m = 0; m < h.length; m++) {
                              const p = h[m],
                                  r = p.getAttribute("onmousedown");
                              r && p.setAttribute("ontouchstart", r)
                          }
                      }
                  };
                  b.vB = function(h) {
                      h = a.F[h];
                      ed(h) && cd(h)
                  };
                  b.Nc = function(h) {
                      a.logger.log("rec " + h + " was rendered");
                      var m = a.F[h];
                      m.Nd(!0); - 1 < m.l("recMode", "").indexOf("dynamic") || k || (a.g.$J(), k = !0);
                      let p = {
                          email: "do-not-reply@outbrain.com",
                          EG: !1
                      };
                      const r = OBR._jsc.jh("testPageInputExternalHelper");
                      r && (p.isInternal = !0, p.email = r.getAttribute("email"), OBR.i.Ca = p);
                      0 === h && (OBR.Gd.update(m), c.CH(m));
                      c.sJ(m);
                      Uf(m);
                      c.iF(m);
                      a.g.qB(m);
                      a.display.SF(m);
                      b.sw(m);
                      c.OL(m);
                      c.aI(m);
                      c.Nh(m);
                      c.MI(m);
                      c.DF(m);
                      c.DJ(m);
                      c.zH(m);
                      c.zD(m);
                      c.$B(m);
                      id(m);
                      c.ZA(m);
                      c.mH(m) && OBR.Ha.Vb(m);
                      OBR.Gd.update(m);
                      gi(m);
                      ed(m) && OBR._jsc.bd.dJ(m);
                      c.tu(m);
                      c.CF(m);
                      setTimeout(() => {
                          ni.Hb(m)
                      }, 1E3)
                  };
                  c.tu = (h, m = !0) => {
                      m = m ? h.l("restoreOriginalUrlAfterClick", !1) : !0;
                      const p = h.l("showOriginalUrl", !0);
                      m && p && (h = h.v()) && h.querySelectorAll(".ob-dynamic-rec-link").forEach(r => {
                          const t = r.href;
                          r.addEventListener("mouseup", () => {
                              setTimeout(() => {
                                  r.href = t
                              }, 250)
                          });
                          r.addEventListener("mouseover", () => r.href = t)
                      })
                  };
                  c.CF = h => {
                      var m = ["NonRedirect", "ProgrammaticRedirect"].includes(h.l("clickRecordingMethod", "HrefRedirect"));
                      const p = h.l("showOriginalUrl", !0);
                      m && p && h.Do() && (m = h.v()) && Array.from(OBR.g.H(m).querySelectorAll(".ob-dynamic-rec-link")).forEach(r => {
                          const t = r.getAttribute("data-obUrl");
                          if (t) {
                              let u = r.getAttribute("target");
                              u || (u = a.i.Xc ? "_top" : "_self");
                              r.addEventListener("click",
                                  v => {
                                      v.stopPropagation();
                                      v.preventDefault();
                                      "_self" === u ? window.location.href = t : "_top" === u ? window.open(t, "_top") : window.open(t, "_blank");
                                      return !1
                                  });
                              r.addEventListener("contextmenu", () => {
                                  r.href = t
                              });
                              h.l("restoreOriginalUrlAfterClick", !1) || c.tu(h, !1)
                          }
                      })
                  };
                  c.sJ = h => {
                      h.Na() && OBR.display.rJ(h)
                  };
                  c.zD = h => {
                      try {
                          const m = [h.l("afterRenderCallback", null), "OBBridge.widgetEvents.rendered"].filter(r => r).filter((r, t, u) => u.indexOf(r) === t),
                              p = h.v();
                          m.forEach(r => {
                              null !== r && OBR.g.qF(r) && (r = r.split(".").reduce((t, u) => t[u],
                                  window)) && setTimeout(r.bind(null, p), 0)
                          })
                      } catch (m) {}
                  };
                  c.iF = function(h) {
                      h.ba("eventTrackers") && OBR.Dg.Tn(h)
                  };
                  b.zh = function(h, m) {
                      OBR.proxy.BH(h, OBR.s.u.mr, m)
                  };
                  c.DJ = function(h) {
                      if (!h.Na()) {
                          var m = OBR.fraudDetection;
                          switch (Ba() ? h.l("fraudDetection", "0") : "0") {
                              case "2":
                                  1 !== m.nb || m.Fo || m.Fo || (m.Fo = !0, m.Gf = m.rn, kg());
                                  break;
                              case "4":
                                  og(h);
                                  break;
                              case "5":
                                  og(h);
                                  break;
                              case "7":
                                  m.jj = 103569;
                              case "6":
                                  ng(h, m.jj)
                          }
                      }
                  };
                  c.aI = function(h) {
                      h.$K() && (b.zh(h, m => {
                          OBR._jsc.Xh(m.currentWidget, m.beforeLoadTime)
                      }), "2" == h.o("feedVersion",
                          null) && (h = h.Y()) && h.iq())
                  };
                  c.MI = function(h) {
                      (OBR.i.Ca && OBR.i.Ca.isInternal || h.ba("publisherTools") && !a.i.kf) && a.s.N(a.s.u.Fl, function(m) {
                          OBR.Ew.A(m)
                      }, this, h)
                  };
                  c.NC = function() {
                      a.i.mG && a.s.N(a.s.u.Xq, () => {})
                  };
                  c.aH = () => {
                      const h = OBR.i.Xc || !0 === window["intervention-debug"];
                      return OBR.i.Wb === OBR.i.ll && h
                  };
                  c.mH = h => !h.Lo() && !h.so() && !h.xo() && !h.sv() && !h.ov() && !h.Ko() && !h.ef() && !h.Hj();
                  c.WA = h => {
                      const m = h.yc();
                      if (m) {
                          const p = h.v();
                          if (p) {
                              const r = h.af();
                              Array.from(OBR.g.H(p).querySelectorAll(".ob-dynamic-rec-container")).forEach(t => {
                                  t = t.getAttribute("data-pos");
                                  r.listings || (r.listings = {});
                                  r.listings[t] || (r.listings[t] = {});
                                  r.listings[t].clickPixels || (r.listings[t].clickPixels = []);
                                  r.listings[t].clickPixels.push(m);
                                  h.Bk(r)
                              })
                          }
                      }
                  };
                  c.DF = function(h) {
                      c.WA(h);
                      h.oF() && b.di(h)
                  };
                  b.di = function(h) {
                      var m = h.v();
                      if (m && (m = OBR.g.H(m).querySelectorAll(".ob-dynamic-rec-container"))) {
                          m = Array.from(m);
                          var p = h.G();
                          m.forEach(r => {
                              const t = r.getAttribute("data-pos");
                              (r = r.querySelector(".ob-dynamic-rec-link")) && r.addEventListener("click", b.$x.bind(this, r,
                                  p, t))
                          })
                      }
                  };
                  c.zH = function(h) {
                      var m = () => {
                          window.OB_EXTERNAL_SCRIPT_LOADED && window.OB_EXTERNAL_SCRIPT_LOADED(h.v())
                      };
                      if (h && "" !== h.l("afterRenderScript", "")) {
                          const p = h.l("afterRenderScript", ""),
                              r = t => {
                                  t = a.g.Ta(0, OBR.i.$L + "/" + t, !0, !1, m, {
                                      "class": "ob-after-render-script"
                                  });
                                  OBR.g.Ob(t)
                              };
                          try {
                              0 === p.indexOf("[") && p.indexOf("]") === p.length - 1 ? JSON.parse(p).forEach(t => r(t)) : r(p)
                          } catch (t) {
                              OBR.error({
                                  name: "ConversionPixelError",
                                  message: "Could not parse input string"
                              })
                          }
                      }
                  };
                  c.pE = function(h) {
                      const m = h.v(),
                          p = h.Yc() && h.Do();
                      return {
                          WL: m,
                          ZG: p,
                          UC: r => {
                              if (p) return Vg(m, r)
                          }
                      }
                  };
                  c.OL = function(h) {
                      var m = h.ba("viewability", null);
                      if (m) {
                          const {
                              WL: t,
                              ZG: u,
                              UC: v
                          } = this.pE(h);
                          for (var p in m)
                              if (m.hasOwnProperty(p))
                                  if (OBR.Kb(p)) {
                                      var r = OBR.Kb(p).parentElement;
                                      h = r && v(r);
                                      Wg(r);
                                      const w = OBR._jsc.oh();
                                      r = OBR.g.Ta(0, m[p], !0, !1);
                                      u && h ? (h.appendChild(r), w.appendChild(h), OBR.g.cf(w, t)) : OBR.g.insertBefore(r, OBR.Kb(p))
                                  } else OBR.error({
                                      name: "ViewabilityPixelError",
                                      message: "Missing viewabilty pixel placeholder element"
                                  })
                      }
                  };
                  b.sw = function(h, m = !1) {
                      var p = h.l("recMode",
                              ""),
                          r = h.l("dynamicWidgetLayout", "");
                      (m || h.Aa() && -1 < p.indexOf("top-box") || -1 < p.indexOf("bottom-box") && -1 === p.indexOf("bottom-box-vertical") || "odb_dynamic" === p && -1 < r.indexOf("top-box") || -1 < p.indexOf("odb_dynamic_swipe") || -1 < p.indexOf("odb_dynamic_smartfeed-swipe")) && OBR.s.N(OBR.s.u.Al, function(t) {
                          OBR.Jd.lp(t)
                      }, this, h)
                  };
                  c.sN = function(h) {
                      return Math.floor(Math.random() * h) + 1
                  };
                  c.lH = h => {
                      h.hasAttribute("data-widget-id") && (h.getAttribute("data-widget-id").match(/^([A-Z-0-9-_]+)$/) || OBR.logger.log(`Bad widget id "${h.getAttribute("data-widget-id")}"`));
                      if (h.hasAttribute("data-ob-user-id")) {
                          let m = h.getAttribute("data-ob-user-id");
                          "" === m && (m = "null", h.setAttribute("data-ob-user-id", "null"));
                          if (-1 < m.indexOf("{") || -1 < m.indexOf("}")) return OBR.logger.log(`Bad user id "${h.getAttribute("data-ob-user-id")}"`), !1
                      }
                      return !0
                  };
                  c.aM = function(h) {
                      a.logger.log("widget was found");
                      if (c.lH(h)) {
                          var m = a.Rh.jg(h);
                          f.fire("widgetObjectCreated", [m]);
                          !0 === m.qG() ? a.logger.log("Dynamic loader - stop odb!") : c.mJ(h, m)
                      } else OBR.bb.yL(h)
                  };
                  c.mJ = (h, m) => {
                      const p = m.Nj();
                      if (hd.Fd(m) &&
                          !p) gd(hd, h, m);
                      else {
                          if (!p) {
                              if (OBR._jsc.B("widgetLazyLoad")) {
                                  c.pj(h, m);
                                  return
                              }
                              h = OBR._jsc.B("widgetsLevelLazyLoad");
                              if (0 < (null == h ? void 0 : h.length)) {
                                  c.ho(m, h);
                                  return
                              }
                          }
                          OBR.wa.register(m)
                      }
                  };
                  c.ho = (h, m) => {
                      const p = h.D();
                      let r;
                      d[m] ? r = d[m] : (r = m.split(",").map(t => t.trim()).filter(t => t), d[m] = r);
                      r.includes(p) ? hd.ho(h) : OBR.wa.register(h)
                  };
                  c.pj = (h, m) => {
                      hd.Hb();
                      hd.pj();
                      gd(hd, h, m)
                  };
                  c.ZA = h => {
                      var m = h.v();
                      m && !a.i.kf && (m = OBR.g.H(m).querySelectorAll(".ob-dynamic-rec-link,a.item-link-container,div.item-container > a:first-child,.odb_li .rec-link")) &&
                          m.length && m.forEach(p => {
                              p.addEventListener("click", () => {
                                  OBR._jsc.qf(h.B);
                                  c.$A(p)
                              })
                          })
                  };
                  c.$A = h => {
                      const m = `${"&ucid="}${OBR.g.cj(8)}`;
                      if (0 < h.href.indexOf("&ucid=")) {
                          const p = h.href,
                              r = p.indexOf("&ucid=");
                          h.href = h.href.replace(p.substring(r, r + 6 + 8), m)
                      } else h.href += m
                  };
                  c.bO = h => {
                      (OBR.widgetDelayInterval || 0 === OBR.widgetDelayInterval) && (new OBR.dataBI(h, m => m.Oy)).B.fA.fire({
                          interval: OBR.widgetDelayInterval
                      })
                  };
                  c.vs = function(h) {
                      let m = h.o("widgetJsId", null);
                      h.D() !== m && h.OK(m)
                  };
                  b.mB = h => {
                      f.add("widgetObjectCreated",
                          h)
                  };
                  b.lw = function(h, m) {
                      var p = "NA",
                          r = h && h.response ? h.response : null;
                      var t = a.g.uE(m);
                      t && t.ic() || (t && (t.setData(h), t.vx(), c.vs(t)), r && r.request && r.request.widgetJsId && (p = r.request.widgetJsId), r && r.request && r.request.seid && t.mq(r.request.seid), a.wa.Ex(t.o("t", null), t.Eb()), a.wa.unlock(m, p), a.g.jw(t), t && r && r.documents && (t.Nd(!0), Uf(t), t.l("FireImpressionPixelsForJSAPI", !1) && (r.documents.doc = b.GD(r.documents)), p = h && h.response && h.response.settings && h.response.settings.recMode, r.documents.req_id = ("odb_video" ===
                          p || "odb_video_backfill" === p) && h && h.response.request && h.response.request.req_id, h = Object.assign({}, r.documents), b.BD(b.Pv, m, t.D(), h)), c.uu(t), a.wa.fire())
                  };
                  b.GD = function(h) {
                      return OBR.Dg.Rn(h)
                  };
                  b.BD = function(h, m, p, r) {
                      f.fire(h + m + p, [r, m], !0)
                  };
                  b.gn = function(h) {
                      f.fire(h)
                  };
                  b.jJ = function(h, m, p, r) {
                      f.add(h + m + p, r)
                  };
                  b.gp = function(h, m) {
                      if (null !== h) {
                          var p = 0;
                          p = h.permalink;
                          var r = h.widgetId,
                              t = a.Ya.VC(h);
                          if ((h.videoId || p && "string" === typeof p || h.contentUrl || h.bundleUrl || h.portalUrl) && r && "string" === typeof r) {
                              a.logger.log("manual Odb call");
                              p = b.IH(h);
                              t.idx = p;
                              t.isManualWidget = !0;
                              h.portalUrl && (t.language = OBR.F[h.originWidgetIdx] && OBR.F[h.originWidgetIdx].Lg() || "en");
                              if (r = Ah(h)) t.consentString = r.consentString, t.consentVersion = r.consentVersion, t.userId = r.userId;
                              r = a.Rh.Jm(t);
                              if (100 < p && 120 >= p) {
                                  h.lang = r.Lg();
                                  try {
                                      r.uK(JSON.stringify(h))
                                  } catch (v) {
                                      OBR.error({
                                          name: "obm-ManualOdbWithInvalidRequestData",
                                          message: `request for widget ${p} has invalid request data`
                                      })
                                  }
                              }
                              a.i.yt(t);
                              const u = {};
                              h.maxNumAds && (u.maxNumAds = h.maxNumAds);
                              h.maxNumOrganicRecs && (u.maxNumOrganicRecs =
                                  h.maxNumOrganicRecs);
                              t = Object.keys(u).map(v => v + "=" + encodeURIComponent(u[v])).join("&");
                              r.oK();
                              t && r.gq(t);
                              c.eB(r);
                              a.pf[p] = r;
                              b.jJ(b.Pv, p, r.D(), m);
                              "number" === typeof h.originWidgetIdx && l(r, OBR.F[h.originWidgetIdx]);
                              a.wa.register(r)
                          }
                      }
                  };
                  c.eB = h => {
                      if (h.Y && h.Y()) {
                          const m = h.Y();
                          m.Mg && m.Mg() && h.zx(m.Mg())
                      }
                  };
                  b.IH = function(h) {
                      var m = 0,
                          p = a.i,
                          r = !1;
                      if (h.videoId) return 0;
                      var t = h.permalink || h.contentUrl || h.bundleUrl || h.portalUrl;
                      let u = null;
                      "number" === typeof h.originWidgetIdx && (r = OBR.F[h.originWidgetIdx], (r = (null == r ?
                          void 0 : r.Y()) || r) && (u = r.Eb() ? r.xc() || r.zc() || r.Ac() : r.Ja()));
                      p.fp = !0 === h.continuousIdx;
                      r = null === p.Id && 0 === a.F.length;
                      r || (null === p.Id && (h = a.F.find(v => v && v.Ja), p.Id = h.Ja()), b.cw(p.Id) !== b.cw(t) && !0 !== p.fp && u !== t) || (0 === p.ke && (p.ke = 100), m = p.ke + 1);
                      p.Id = t;
                      return p.ke = m
                  };
                  b.cw = h => {
                      try {
                          if (h) return (new URL(h)).toString()
                      } catch (m) {}
                      return h
                  };
                  b.nf = function(h, m) {
                      "function" === typeof m && f.add(b.ep, m);
                      if (null !== h && h.link && "string" === typeof h.link) {
                          m = h.link;
                          a.logger.log("manual Click");
                          if (null !== m.match(/http(s)?:\/\/.+outbrain.com/i)) h.openInWindow ?
                              window.top.location.href = m : (h = m.split("?"), h = `${h[0]}?noRedirect=true&${h[1]}`, a.i.Ok ? navigator.sendBeacon(h) : a.g.EB(h));
                          else throw "Wrong redirect link: " + m;
                          f.fire(b.ep);
                          Sa(f, b.ep)
                      }
                  };
                  c.qv = function(h) {
                      return h.l("stopRater", !1)
                  };
                  b.tf = function(h, m) {
                      var p;
                      OBR.logger.log("HTML returned");
                      m = c.nh(m);
                      if (p = a.F[m]) {
                          Xb.mark(p, "mv", "end");
                          ed(p) && cd(p);
                          var r = Rh.Lk.stop().getTime();
                          p.Bx(r);
                          0 >= p.SE(h) && f.fire("noRecs", [p]);
                          p.ic() ? b.ot(p) : (p.setData(h), b.Ax(p), p.Fx(), p.mq(), p.IK(), p.vx(), OBR.display.lF(p), c.vs(p),
                              p.px(), h = !0 === p.o("oo", !1), 0 === m && (b.wK(p), h || (OBR.extern.pvId = p.o("pvId", null))), p.zd(!0) && e && (OBR.He.test(), e = !1), h = p.Eb(), a.wa.Ex(p.o("t", null), h), c.fF(OBR.wa.eu(h)), a.i.M = "mobile" === p.o("readerPlatform", "desktop") || a.i.yG, a.i.nk = p.o("readerPlatform", "desktop"), a.i.sessionId = p.fj(), c.uu(p), b.pt(p, m), c.hH(p) || c.qv(p) || p.pv() || c.pH(p.xd()) ? Uf(p) : (a.wa.SJ(p.l("apv", !1)), this.Nu(p) && !Tb(p) && this.wF(p), p.Qo() ? (f.add(`widgetLazyRender_${m}`, () => {
                                  b.gv(p) ? b.yh(m) : b.ju(p);
                                  b.Sn(p)
                              }), p.Nj() && c.Kz(p)) : (b.gv(p) ?
                                  b.yh(m) : b.ju(p), b.Sn(p)), rf(p.B)), b.ot(p), 0 === m && c.tj && c.tj.Jf(p), 0 === m && xa && xa.Jf(p), c.dC(p))
                      } else a.logger.log("odbHtmlReturned : Widget not found"), OBR.error({
                          name: "obm-WidgetNotFound",
                          message: `Widget not found for idx ${m}`
                      })
                  };
                  c.fF = h => {
                      OBR.wa.BK({
                          t: h
                      })
                  };
                  c.uu = h => {
                      0 === h.G() && h.l("widgetLazyLoad", !1) && hd.pj(h)
                  };
                  b.Ax = h => {
                      OBR.ren = h.ba("ren")
                  };
                  c.hH = h => {
                      if (!h) return !1;
                      const m = h.l("tracking", !1);
                      h = "2" === h.o("feedVersion", null);
                      return m && h
                  };
                  b.wK = function(h) {
                      if (h) {
                          const m = h.o("pid", "0"),
                              p = h.o("sid", "0");
                          h = h.o("did", "-1");
                          OBR.monitorData = {
                              pubId: m,
                              sourceId: p,
                              docId: h
                          }
                      }
                  };
                  b.pt = function(h, m) {
                      f.fire("odbRtn_" + h.D(), [h]);
                      f.fire("odbRtn_" + m, [h]);
                      f.fire("onHtmlReturn", [h], !1, h)
                  };
                  b.Sn = function(h) {
                      c.xC(h);
                      c.vC(h);
                      c.gC(h);
                      c.YB(h);
                      c.uC(h);
                      c.wC(h);
                      c.iC(h);
                      c.oC(h);
                      c.UB(h);
                      c.kC(h);
                      c.XB(h);
                      c.rC(h);
                      c.hC(h);
                      c.cC(h);
                      c.WB(h);
                      c.mC(h);
                      c.qC(h);
                      c.sC(h);
                      c.tC(h);
                      c.VB(h);
                      c.eC(h);
                      c.pC(h);
                      c.lC(h);
                      c.fC(h);
                      c.bC(h);
                      c.aC(h);
                      OBR.tl.jg(h);
                      if (!h.so()) {
                          var m = Zh(h);
                          m && (h.l("isCTARequired", !1) ? m.some($h) && m.forEach(ai) : m.filter($h).forEach(ai))
                      }
                      c.nC(h);
                      c.ZB(h);
                      c.TB(h);
                      c.SB(h);
                      c.RB(h)
                  };
                  b.Nu = h => !h.Aa() && h.Na();
                  b.wF = h => {
                      (h = h.v()) && h.style.setProperty("visibility", "hidden", "important")
                  };
                  c.nh = function(h) {
                      return 1E3 > h ? h : h % 1E3
                  };
                  c.pH = function(h) {
                      var m = !1;
                      null !== h.match(/(<\/?met|<\/?scr)/i) && (m = !0, a.logger.log("SECURITY"));
                      return m
                  };
                  b.ot = function(h) {
                      c.qv(h) || (a.wa.unlock(h.G(), h.D()), a.wa.fire())
                  };
                  c.vC = function(h) {
                      h.Na() && (h.No() || h.nv()) && OBR.logger.log(" -- WARNING: Smartfeed blocked because topbox/sklander are enabled! Please check widget settings -- ");
                      !a.i.M && h.jH() && h.nv() ? a.s.N(a.s.u.Zf, function(m) {
                          a.Lx.A(m)
                      }, this, h) : h.No() && a.s.N(a.s.u.Ol, function(m) {
                          a.Rd.A(m)
                      }, this, h);
                      h.oH() && a.s.N(a.s.u.Tl, function(m) {
                          OBR.uy.A(m)
                      }, this, h);
                      !h.Na() || h.No() && !h.Qu() || q(h)
                  };
                  c.gC = function(h) {
                      const m = new oi;
                      if (h && "1" === h.jE()) {
                          var p = h.Vt();
                          var r = h.OG();
                          p = p.includes("ATF") && r && (h.Po() || h.xo()) && !OBR.i.eb
                      } else p = !1;
                      p && (OBR.g.la(h.v(), "ob-onyx ob-onload"), m.A(h))
                  };
                  c.uC = function(h) {
                      const m = h.l("readMoreButtonPlatform", "mobile"),
                          p = !0 === h.l("isReadMoreEnabled", !1);
                      ({
                          mobile: OBR.i.M,
                          desktop: !OBR.i.M,
                          all: !0
                      })[m] && p && OBR.s.N(OBR.s.u.$h, r => OBR.Va.A(r), this, h)
                  };
                  c.CH = function(h) {
                      if (h && h.l("loadPermiterX", !1) && !window._pxAppId) {
                          h = h.o("pvId", null);
                          let m = OBR._jsc.S("script");
                          m.type = "text/javascript";
                          m.innerText = '(function(){ window._pxAppId = "PX7C4UXGxx";' + `window._pxParam1 = "${h}";` + 'var p = document.getElementsByTagName("script")[0],s = document.createElement("script");s.async = 1;s.src = "//client.px-cloud.net/PX7C4UXGxx/main.min.js";p.parentNode.insertBefore(s,p);}());';
                          kh("head")[0].appendChild(m)
                      }
                  };
                  c.xC = function(h) {
                      h.Aa() && a.i.M && h.Lo() && 3 === h.l("dynamicDynamicLayoutVersion", 3) && a.s.N(a.s.u.Nl, function(m) {
                          a.xq.A(m)
                      }, this, h)
                  };
                  c.wC = function(h) {
                      h.Aa() && h.so() && a.s.N(a.s.u.hl, function(m) {
                          a.ka.A(m)
                      }, this, h)
                  };
                  c.oC = function(h) {
                      h.Aa() && h.bH() && a.s.N(a.s.u.Ll, function(m) {
                          a.Jx.A(m)
                      }, this, h)
                  };
                  c.UB = function(h) {
                      h.Aa() && h.hG() && OBR.s.N(OBR.s.u.kl, function(m) {
                          OBR.Sa.A(m)
                      }, this, h)
                  };
                  c.XB = function(h) {
                      h.Aa() && h.rG() && OBR.i.Nh && OBR.s.N(OBR.s.u.ol, function(m) {
                          OBR.Us.A(m)
                      }, this, h)
                  };
                  c.iC = function(h) {
                      h.o("obPerformance") &&
                          (OBR.i.Yj = !0, c.Iv())
                  };
                  c.kC = function(h) {
                      h.Aa() && h.SG() && a.s.N(a.s.u.Dl, function(m) {
                          a.uw.A(m)
                      }, this, h)
                  };
                  c.cC = function(h) {
                      h.Aa() && h.AG() && OBR.s.N(OBR.s.u.Wf, function(m) {
                          OBR.hu.A(m)
                      }, this, h)
                  };
                  c.hC = function(h) {
                      h.Aa() && h.PG() && OBR.s.N(OBR.s.u.Bl, m => OBR.Dp.A(m), this, h)
                  };
                  c.rC = function(h) {
                      h.Aa() && h.sv() && OBR.s.N(OBR.s.u.bg, function(m) {
                          OBR.timeline.A(m)
                      }, this, h)
                  };
                  c.WB = h => {
                      h.Aa() && h.xo() && OBR.s.N(OBR.s.u.nl, m => OBR.Rs.A(m), this, h)
                  };
                  c.nC = h => {
                      h.fh() && OBR.s.N(OBR.s.u.Ml, m => OBR.Ix(m), this, h)
                  };
                  c.ZB = h => {
                      const m = h.l("tracking",
                          !1);
                      b.Nu(h) || 0 !== h.o("tcr", 0) || m || ma.fire(Object.assign({}, h.B.Wa, pf("norecs")))
                  };
                  c.mC = h => {
                      h.Aa() && h.Ec() && (h.UG() ? OBR.s.N(OBR.s.u.Il, m => OBR.Qw.A(m), this, h) : OBR.s.N(OBR.s.u.Hl, m => OBR.Pw.A(m), this, h))
                  };
                  c.qC = h => {
                      h.Aa() && h.Ko() && OBR.s.N(OBR.s.u.ag, m => OBR.Ib.A(m), this, h)
                  };
                  c.sC = h => {
                      h.Aa() && h.DG() && OBR.s.N(OBR.s.u.Rl, m => OBR.Dr.A(m), this, h)
                  };
                  c.$B = h => {
                      h.uG() && OBR.s.N(OBR.s.u.Vf, m => OBR.gr.A(m), this, h)
                  };
                  c.SB = h => {
                      if (h.aG()) {
                          var m = !h.o("oo", !1),
                              p = h.zd(!0);
                          m && p && OBR.s.N(OBR.s.u.il, r => OBR.Je.AF(r), this, h)
                      }
                  };
                  c.RB =
                      h => {
                          if (h.jG(h)) {
                              var m = !h.o("oo", !1),
                                  p = h.zd(!0);
                              m && p && OBR.s.N(OBR.s.u.rl, r => OBR.Dw.A(r), this, h)
                          }
                      };
                  c.tC = h => {
                      ed(h) && OBR.s.N(OBR.s.u.bi, m => OBR.Qh.A(OBR._jsc.bd, m), this, h)
                  };
                  c.VB = h => {
                      h.Aa() && h.pF() && OBR.s.N(OBR.s.u.ml, m => OBR.clip(m), this, h)
                  };
                  c.dC = h => {
                      const m = h.l("distanceMeasureRate", 0);
                      (OBR.i.xt || 0 < m) && OBR.s.N(OBR.s.u.sl, () => OBR.ir.A(h), this, h)
                  };
                  c.TB = h => {
                      var m = h.Y();
                      const p = (null == m ? void 0 : m.D()) || h.D();
                      var r = OBR.Ce && OBR.Ce[`${p}`] && OBR.Ce[`${p}`].vl;
                      if (h.D() !== (null == m ? void 0 : m.D()) && !r) {
                          m = h.o("pl",
                              null);
                          r = h.o("vl", null);
                          var t = h.o("cl", null);
                          (m || r || t) && OBR.s.N(OBR.s.u.Vl, () => OBR.Er.A(h, p), this, h)
                      }
                  };
                  c.YB = h => {
                      OBR.i.ou && h.Ou() && (h.Pu() ? OBR.ct(h) : h.tb(O.Za.R.pz))
                  };
                  c.eC = h => {
                      h.rF() && OBR.s.N(OBR.s.u.xl, () => OBR.Pb.sm(h), this)
                  };
                  c.pC = h => {
                      h.ov() && OBR.s.N(OBR.s.u.$f, () => OBR.Qx.A(h), this)
                  };
                  c.lC = h => {
                      h.Hj() && OBR.s.N(OBR.s.u.Yf, () => OBR.Hw.A(h), this)
                  };
                  c.fC = h => {
                      h.KG() && h.Aa() && OBR.s.N(OBR.s.u.yl, () => OBR.Uv.A(h, h.Gt()), this)
                  };
                  c.bC = h => {
                      if (h.ef()) {
                          const m = h.Dn();
                          Ic.A(h, m)
                      }
                  };
                  c.aC = h => {
                      if (h.Wu()) {
                          const m = h.En();
                          Mc(h,
                              m)
                      }
                  };
                  c.kf = function(h) {
                      a.i.kf && a.s.N(a.s.u.Ul, function() {
                          a.wy.A();
                          a.xy.A()
                      }, this, h)
                  };
                  c.yH = function() {
                      const h = a.g.Ta(0, "//widgets.outbrain.com/adngin/adngin.js", "true");
                      OBR._jsc.Q.head.appendChild(h)
                  };
                  c.DH = function() {
                      const h = a.g.Ta(0, "//widgets.outbrain.com/tnt/sst.js", "true");
                      OBR._jsc.Q.head.appendChild(h)
                  };
                  b.gv = function(h) {
                      return !(h.Uu() || h.ef() || h.Go())
                  };
                  b.ju = function(h) {
                      h.Uu() && a.display.OF(h)
                  };
                  b.yh = function(h) {
                      h = a.F[h];
                      a.display.yh(h);
                      Eb(h);
                      a.logger.log("HTML - Render");
                      b.th(h);
                      b.pJ(h)
                  };
                  b.tJ =
                      (h, m) => {
                          Db.remove(m);
                          a.display.qJ(h, m);
                          a.logger.log("HTML - GNR Render");
                          b.th(m)
                      };
                  b.pJ = function(h) {
                      h.Ec() || b.Df(h)
                  };
                  b.Df = function(h) {
                      if (!0 === h.ba("inlineNVP", !1)) {
                          var m = {};
                          m.platform = a.i.nk;
                          m.lang = h.o("lang", "en");
                          m.uuid = h.o("lsd", null);
                          m.publisherId = h.o("pid", null);
                          m.sourceId = h.o("sid", null);
                          m.widgetNumberId = h.o("wnid", null);
                          m.location = h.o("gl", "");
                          m.timestamp = h.Sg();
                          m.widgetID = h.o("widgetJsId", h.D());
                          m.reqID = h.o("req_id", "-1");
                          m.pvId = h.o("pvId", "-1");
                          m.obcnst = h.o("obcnsnt", !0);
                          m.did = h.o("did", null);
                          m.gdpr = h.o("gdpr", 0);
                          m.cnsnt = h.o("cnsnt", null);
                          m.abTestVal = h.wd() || h.o("abTestVal", "no_abtest");
                          m.feedVersion = h.o("feedVersion", null);
                          m.onOpenCallbacks = h.VD();
                          m.onCloseCallbacks = h.UD();
                          m.publisherName = h.o("pubName", null);
                          a.s.N(a.s.u.Xf, function() {
                              window.NVPInjector.main.widgetLoad(h.v(), h.Rg(), m)
                          })
                      }
                  };
                  b.th = function(h) {
                      const m = h.GG(),
                          p = h.l("dynamicTruncateSource", !1),
                          r = h.l("TruncateDescription", !1);
                      a.g.jw(h);
                      fg(a.Vs, h.G(), p, r, m);
                      a.g.SL(h.v());
                      OBR.display.UF(h);
                      f.fire("onWidgetRendered", [h], !1, h);
                      h =
                          h.B;
                      Xb.mark(h.j, "rendered");
                      h.sy.rendered();
                      h.Ia && !h.Ia.B.Li.rendered && h.Ia.B.rendered || h.rendered || (h.rendered = !0, h.Ia && (h.Ia.B.rendered = !0), ma.fire(Object.assign({}, h.Wa, pf("rendered"))))
                  };
                  b.Lw = function(h) {
                      a.g.la(h, "ob_clicked");
                      var m = a.g.Ye(h, "data-redirect");
                      null !== m && (h.href = m)
                  };
                  b.Bf = function(h) {
                      c.BC();
                      a.bb.yD(h);
                      return !0
                  };
                  b.ha = function() {
                      f.Me()
                  };
                  c.Iv = function() {
                      a.s.N(a.s.u.Cl, function() {
                          OBR.Jz.init()
                      }, this)
                  };
                  b.IB = function(h, m, p) {
                      if (window.confirm("Removing this recommendation will remove it permanently for this section and will refresh the recommendations.\n Are you sure you want to remove this recommendation?")) {
                          var r =
                              "https://my.outbrain.com/manage/";
                          r = !1 === p ? r + ("add-zapped-document?publisherId=" + m + "&docUrl=" + a.g.oa(h)) : r + ("add-rule?publisherId=" + m + "&ruleValue=" + a.g.oa(h) + "&ruleType=" + p);
                          h = a.g.Ta(0, r, !0);
                          a.g.Ob(h)
                      }
                  };
                  b.HB = function(h) {
                      window.confirm("Removing this recommendation will remove it permanently for this section and will refresh the recommendations.\n Are you sure you want to remove this recommendation?") && (h = a.g.Ta(0, a.i.cI + a.i.JB + h + "&index=1&templateIndex=1&sig=" + a.i.Rq, !0), a.g.Ob(h))
                  };
                  b.CJ = function(h) {
                      h &&
                          h.ob_exclude_resp && "number" === typeof h.ob_exclude_resp.code && 1 !== h.ob_exclude_resp.code && b.Bf()
                  };
                  b.hJ = function(h, m) {
                      if (m && "function" === typeof m) {
                          var p = "odbRtn_" + h;
                          f.add(p, m);
                          (h = a.Ya.fu(h)) && h.Hu() && f.fire(p, [h])
                      }
                  };
                  b.WN = function(h, m) {
                      if (m && "function" === typeof m) {
                          var p = "odbRtn_" + h;
                          f.add(p, m);
                          (h = a.Ya.be(h)) && h.Hu() && f.fire(p, [h])
                      }
                  };
                  b.ZD = function(h) {
                      return (h = a.Ya.fu(h)) ? h.o("tcr", -1) : null
                  };
                  b.te = function() {
                      a.bb.Ji()
                  };
                  b.Me = function() {
                      b.ha();
                      c.ys();
                      OBR.Ha.ha();
                      OBR.Dg.ha();
                      a.display.ha();
                      a.wa.vu();
                      a.wa.ha();
                      a.bb.ha();
                      a.Nn.ha();
                      a.Rd && a.Rd.ha();
                      a.i.ha();
                      a.ga.ha();
                      Wh();
                      hd.reset();
                      OBR.g.FC()
                  };
                  b.rk = function() {
                      this.Me();
                      this.bx()
                  };
                  c.BC = function() {
                      a.wa.vu();
                      a.oc.ha();
                      OBR.Ha.ha();
                      OBR.Dg.ha();
                      OBR.i.Id = null;
                      c.DC();
                      c.ys();
                      kc.cache.clear();
                      Wh()
                  };
                  c.ys = () => {
                      Ui && Ui.ha()
                  };
                  c.DC = function() {
                      const h = OBR.F.filter(m => !m || m.v);
                      h.forEach(m => {
                          if (m && m.ic()) {
                              var p = m.v();
                              m.Na() && p.parentElement.insertAdjacentElement("beforebegin", p);
                              m.Y() && p && p.remove()
                          }
                      });
                      OBR.F = h;
                      [...lh("ob-smartfeed-wrapper")].forEach(m => m.remove())
                  };
                  b.Sw = function(h,
                      m) {
                      h = OBR.Ya.be(c.nh(h));
                      h = c.Kp(h, m);
                      a.wa.register(h)
                  };
                  b.gJ = function(h, m, p, r) {
                      h = c.nh(h);
                      c.Kp(OBR.Ya.be(h), p);
                      b.tf(m, h);
                      r && r(h)
                  };
                  c.Kp = function(h, m) {
                      h.fJ(m);
                      OBR.Bf && OBR.Bf.kq(h);
                      return h
                  };
                  b.Qv = function(h, m, p, r, t) {
                      m && h && (b.nf({
                          link: m,
                          openInWindow: void 0
                      }, null), f.fire("videoClick_" + h, [{
                          videoUrl: p,
                          videoId: r,
                          widgetId: h,
                          widgetIdx: t
                      }]))
                  };
                  b.mw = function(h, m) {
                      f.add("videoClick_" + h, m)
                  };
                  b.yp = function(h, m) {
                      c.tj && c.tj.yp(h, m)
                  };
                  b.EF = function() {
                      Wi.A();
                      OBR.ga.A()
                  };
                  b.Qv = function(h, m, p, r, t) {
                      m && h && (b.nf({
                              link: m,
                              nI: void 0
                          },
                          null), f.fire("videoClick_" + h, [{
                          nO: p,
                          mO: r,
                          da: h,
                          ty: t
                      }]))
                  };
                  b.mw = function(h, m) {
                      f.add("videoClick_" + h, m)
                  };
                  b.BN = function(h, m, p, r) {
                      var t = OBR.g.v(h);
                      t ? c.hB(t) : OBR.error({
                          name: "Error",
                          message: "Cannot find widget element with idx=" + h
                      });
                      (t = OBR.Ya.be(c.nh(h))) ? (t = c.Kp(t, null), t.LK(m), t.NK(p), t.MK(r), c.hL(t), a.wa.register(t)) : OBR.error({
                          name: "Error",
                          message: "Cannot find widget with idx=" + h
                      })
                  };
                  c.hL = function(h) {
                      h.EK(h.xd())
                  };
                  c.hB = function(h) {
                      a.g.la(h, "ob_scoped")
                  };
                  b.uB = function(h) {
                      h = OBR.Ya.be(c.nh(h));
                      h.ve(h.HE());
                      a.display.yh(h)
                  };
                  b.$x = function(h, m, p) {
                      OBR.g.jf(h) || OBR.g.jf(m) || OBR.g.jf(p) ? OBR.logger.log("triggerClickPixels: Missing param to function") : (m = OBR.Ya.be(m)) ? (m = m.ba("listings")) && m[p] && m[p].clickPixels ? OBR.g.ED(m[p].clickPixels, h) : OBR.logger.log("fireClickPixel: empty meta or key not defined in clickPixels meta") : OBR.logger.log("triggerClickPixels: widget or rec container not found")
                  };
                  b.vL = (h, m) => {
                      if ("mraid" in window) try {
                          const p = h.getAttribute("href");
                          m.preventDefault();
                          m.stopPropagation();
                          window.mraid.open(p)
                      } catch (p) {
                          OBR.error(p)
                      }
                  };
                  b.ay = (h, m, p, r) => {
                      try {
                          if ("function" === typeof window.OBCustomClickHandler) try {
                              let u;
                              if (r) {
                                  const v = decodeURIComponent(r);
                                  u = JSON.parse(v)
                              }
                              window.OBCustomClickHandler(h, m, p, u);
                              return
                          } catch (u) {}
                          if (OBR.clickHandler) {
                              var t = h.getAttribute("href");
                              m.preventDefault();
                              m.stopPropagation();
                              if (r) try {
                                  const u = decodeURIComponent(r),
                                      v = JSON.parse(u);
                                  OBR.clickHandler.open(t, p, v);
                                  return
                              } catch (u) {}
                              OBR.clickHandler.open(t, p)
                          }
                      } catch (u) {
                          OBR.error(u)
                      }
                  };
                  b.GB = h => {
                      var m = a.oc.vc.oD,
                          p = OBR.oc;
                      h = h.split("?");
                      const r = N.jk(h[1]);
                      p.Mi ||
                          (r.cheq = OBR.fraudDetection.sg, p.Mi = !0);
                      r.eT = m || p.vc.ready;
                      r.tm = (new Date).getTime() - p.startTime;
                      r.wRV = OBR.i.ver;
                      r.pVis = "2";
                      m = N.Ih(r);
                      p.rg.add(`${h[0]}?${m}`);
                      p.pm && $f(p)
                  };
                  b.TA = (h, m) => {
                      m = a.F[m];
                      const p = m.UA || 1;
                      let r = "";
                      try {
                          const t = {
                              Request_id: m.o("req_id", "-1"),
                              publisher_id: m.o("pid", "0"),
                              pv_id: m.o("pvId", "-1")
                          };
                          r = JSON.stringify(t)
                      } catch (t) {
                          r = ""
                      }
                      3 === p ? OBR.error({
                          name: "obm-AdCarouselLogoError",
                          message: "Error loading ad carousel logo image: " + h.src + " widget data: " + r
                      }) : (h.src = h.src + "?t=" + (new Date).getTime(),
                          m.UA = p + 1)
                  };
                  b.vJ = (h, m, p) => {
                      if (h) {
                          OBR.i.zv = !0;
                          OBR.extern.returnedVacData = b.tk;
                          var r = h.response.request.widgetJsId,
                              t = OBR._jsc.S("div");
                          t.className = "OUTBRAIN";
                          t.setAttribute("data-widget-id", r);
                          m ? m.parentNode.insertBefore(t, m) : OBR._jsc.Q.body.appendChild(t);
                          OBR.Rh.jg(t, p);
                          b.tf(h, p);
                          t.setAttribute("data-ob-mark", "true");
                          t.setAttribute("data-browser", OBR.i.Wb);
                          t.setAttribute("data-os", OBR.i.os)
                      }
                  };
                  b.tk = h => {
                      h && Ui.tk(h, h.feedIdx)
                  };
                  c.Kz = h => {
                      h.Na() && q(h)
                  };
                  b.A(OBR);
                  const l = (h, m) => {
                          if (h && m) {
                              var p = m.Y();
                              p && (h.sx(p.pb()),
                                  h.Cx(p.Bc()), p.Eb() && h.wx(p.ac()), p.ge() && h.qx());
                              m && m.ge() && h.qx();
                              h.Dk(m)
                          }
                      },
                      q = h => {
                          Ui.A({
                              oe: h,
                              jt: h.l("feedManualChunkFetch", !1)
                          })
                      };
                  b.ZK = () => Lh.isEnabled ? Lh.value.includes(OBR.s.u.$q) : !1;
                  b.continue = () => {
                      g || "number" !== typeof b.Ns || clearTimeout(b.Ns);
                      g = !0;
                      OBR.bb.Ji()
                  };
                  return b
              }();
              OBR.display = OBR.display || function() {
                  var a, b = {},
                      c;
                  b.A = function(d) {
                      a = d = d || OBR;
                      c = new a.Ub
                  };
                  b.zu = function(d, e) {
                      d = a.g.kL(d);
                      b.yu(d, e)
                  };
                  b.yu = (d, e) => {
                      var f = e.v();
                      f ? f && d && 0 < d.length && (0 < e.Og() ? b.sD(f, d[0], e.G(), e) : b.ve(d[0], f, e.G(), e), a.logger.log("element inserted")) : (a.logger.log("widget container not found"), OBR.error({
                          name: "obm-ContainerNotFound",
                          message: `Container not found for widget idx ${e.G()}`
                      }))
                  };
                  b.sD = function(d, e, f, g) {
                      function k() {
                          b.vF(d).then(function(q) {
                              b.xK(q, e, f, g).then(function(h) {
                                  b.rD(h)
                              })
                          })
                      }
                      var l = new a.Promise;
                      l.then(function() {
                          b.tD(d).then(k)
                      });
                      l.resolve()
                  };
                  b.tD = function(d) {
                      var e = new a.Promise,
                          f = 1,
                          g = setInterval(function() {
                              .1 >= f ? (clearInterval(g), e.resolve(d)) : (d.style.opacity = f, d.style.filter = "alpha(opacity=" + 100 * f + ")", f -= .1 * f)
                          }, 10);
                      return e
                  };
                  b.vF = function(d) {
                      var e = new a.Promise;
                      d.style.opacity = 0;
                      setTimeout(function() {
                          e.resolve(d)
                      }, 0);
                      return e
                  };
                  b.xK = function(d, e, f, g) {
                      var k = new a.Promise;
                      d = b.ve(e, d, f, g);
                      setTimeout(function() {
                          k.resolve(d)
                      }, 0);
                      return k
                  };
                  b.ve = function(d, e, f, g) {
                      let k = !1;
                      e.innerHTML = "";
                      e.shadowRoot && (k = !0, e.insertAdjacentHTML("beforebegin", e.outerHTML), e.parentElement.removeChild(e), e = g.v({
                          wc: !0
                      }));
                      a.g.cf(d, e);
                      k && OBR.g.yy(g);
                      b.Ig(g, f);
                      return e
                  };
                  b.rJ = function(d) {
                      const e = d.v();
                      if (e && e.parentNode) {
                          var f = d.l("feedDataIdValue", !1);
                          f = f ? `ob-data-fid="${encodeURIComponent(f)}"` : "";
                          f = a.g.Oa(`<div class="ob-smartfeed-wrapper feedIdx-${d.G()}" ${f}>${e.outerHTML}</div>`);
                          e.parentNode.replaceChild(f, e);
                          f.style.flex = "0 0 100%";
                          d.dK(f.clientWidth);
                          f.style.flex = "";
                          d.v({
                              wc: !0
                          })
                      }
                  };
                  b.Ig = function(d, e) {
                      c.fire("afterRender", [e], !1, d)
                  };
                  b.rD = function(d) {
                      var e = new a.Promise,
                          f = .1,
                          g = setInterval(function() {
                              1 <= f ? (clearInterval(g), d.removeAttribute("style"), e.resolve(d)) : (d.style.opacity = f, d.style.filter = "alpha(opacity=" + 100 * f + ")", f += 1.6 * f)
                          }, 50)
                  };
                  b.MN = function(d) {
                      c.add("beforeRender", d)
                  };
                  b.uf = function(d) {
                      c.add("afterRender", d)
                  };
                  b.SF = function(d) {
                      a.g.YG(d) && OBR.s.N(OBR.s.u.Kl, function(e) {
                          OBR.scroll.lp(e)
                      }, this, d)
                  };
                  b.OF = function(d) {
                      OBR.s.N(OBR.s.u.ql, function() {
                              b.ND(d);
                              a.controller.Df(d)
                          },
                          this)
                  };
                  b.ND = function(d) {
                      b.zu(OBR.Oi.FF(d), d);
                      OBR.Oi.A()
                  };
                  b.yh = function(d) {
                      a.logger.log("HTML - render widget");
                      b.zu(d.xd(), d);
                      b.wJ(d);
                      d.Nd(!0)
                  };
                  b.qJ = (d, e) => {
                      b.yu([d], e)
                  };
                  b.ha = function() {
                      c.Me()
                  };
                  b.wJ = function(d) {
                      d.$G() && OBR.g.yy(d)
                  };
                  b.lF = function(d) {
                      if (d = d.ba("staticCss")) OBR.i.Kk = d
                  };
                  b.UF = function(d) {
                      b.BG(d) && OBR.i.Kk && OBR.g.NF(d)
                  };
                  b.BG = function(d) {
                      return d && (d.dG() || d.cv() || d.Co())
                  };
                  b.A(OBR);
                  return b
              }();
              var Xi = class {
                  constructor(a) {
                      this.Af = 0;
                      this.Ak(a);
                      this.Nd(!1);
                      kf(this, a)
                  }
                  G() {
                      return 0 === this.Af ? this.ja : 1E3 * this.Af + this.ja
                  }
                  Ak(a) {
                      this.ja = a
                  }
                  Og() {
                      return this.Af
                  }
                  Nd(a) {
                      this.ic = !!a
                  }
                  v({
                      wc: a
                  } = {
                      wc: !1
                  }) {
                      this.O && !a || kf(this, this.G());
                      return this.O
                  }
                  setData(a) {
                      if (a) {
                          var b = a.response;
                          if (b) {
                              this.So = b;
                              const [e, f, g, k, l, q, h, m] = [b.request, b.settings, b.meta, b.data, b.documents, b.viewability_actions, b.timestamp, b.html];
                              e && (this.requestData = e);
                              f && (this.oq = f);
                              g && this.Bk(g);
                              k && (this.XL = k);
                              l && (this.Qm = l);
                              h && (this.timestamp =
                                  h);
                              m && this.ve(m);
                              q && (this.af().viewability_actions = q);
                              this.aD = !0
                          } else {
                              var [c, d] = [a.odbResponse, a.mvResponse];
                              c && d ? (this.setData(c), this.HD = d) : OBR.error({
                                  name: "obm-sl",
                                  message: "bad sl response"
                              })
                          }
                      }
                  }
                  o(a, b) {
                      const c = lf(this);
                      return mf(c, a, b)
                  }
                  af() {
                      this.kp || (this.kp = {});
                      return this.kp
                  }
                  ba(a, b) {
                      const c = this.af();
                      return mf(c, a, b)
                  }
                  Bk(a) {
                      a && "object" === typeof a && (this.kp = a)
                  }
                  l(a, b) {
                      const c = nf(this);
                      return mf(c, a, b)
                  }
                  getData(a, b) {
                      return mf(this.XL, a, b)
                  }
                  Sg() {
                      return this.timestamp
                  }
                  ve(a) {
                      this.html = a
                  }
                  xd() {
                      return this.html ||
                          ""
                  }
                  dj() {
                      this.So || (this.So = {});
                      return this.So
                  }
                  $e() {
                      return this.HD
                  }
                  Dk(a) {
                      this.Wp = a
                  }
                  Ng() {
                      return this.Wp
                  }
                  lq(a) {
                      this.ppids = a
                  }
                  bj() {
                      return this.ppids
                  }
                  Bh(a) {
                      this.FB = a
                  }
                  Si() {
                      return this.FB
                  }
              };
              var Yi = OBR.i.Ap + "logger/v1/wea",
                  Zi = class {
                      constructor(a, b) {
                          this.MD = a;
                          this.iI = b;
                          this.buffer = [];
                          this.Mo = !1
                      }
                      push(a) {
                          OBR.settings && OBR.settings.DA && a.SN.toString() !== OBR.settings.DA || (this.buffer.push(a), this.Mo || of (this))
                      }
                      flush() {
                          this.iI(this.buffer.splice(0, this.buffer.length))
                      }
                  },
                  $i = class {
                      constructor() {
                          a: {
                              try {
                                  if (OBR._jsc.B("widgetAnalytics")) {
                                      var a = JSON.parse(OBR.settings.widgetAnalytics);
                                      break a
                                  }
                              } catch (b) {
                                  OBR.error({
                                      name: "WidgetAnalyticsError",
                                      message: "Could not parse widgetAnalytics setting"
                                  })
                              }
                              a =
                              void 0
                          }(this.dl = a) ? (this.FJ = this.dl.rate || 1E3, this.BB = this.dl.bulk || 500, this.B = this.dl.events || [], this.buffer = new Zi(this.BB, b => this.fire(b)), this.isEnabled = 1 === Math.floor(Math.random() * this.FJ) + 1) : this.isEnabled = !1
                      }
                      add(a) {
                          this.buffer.push(a)
                      }
                      fire(a) {
                          OBR.ya.send(OBR.i.V.Lc, Yi, {
                              data: JSON.stringify(a)
                          })
                      }
                  },
                  tf = new $i;
              var pf = a => ({
                      timestamp: Date.now(),
                      name: a
                  }),
                  aj = class {
                      rendered() {}
                      Td() {}
                  },
                  bj = class extends aj {
                      constructor(a) {
                          super();
                          this.j = a;
                          this.Ia = this.j.Y();
                          this.Vm = {};
                          oa.forEach(b => {
                              var c = this.Vm;
                              var d = tf.isEnabled && tf.B.includes(b);
                              return c[b] = d
                          })
                      }
                      kc(a) {
                          const b = this.j.o("feedVersion", null) || 0,
                              c = this.j.o("readerPlatform", null);
                          var d = this.j.Qg();
                          const e = Date.now() - OBR.i.startTime,
                              f = this.Ia ? this.Ia.l("feedLoadChunkSize", 0) : this.j.l("feedLoadChunkSize", 0);
                          d = d ? d : this.j.D();
                          var g = this.Ia ? (g = this.Ia.Qg()) ? g : this.Ia.D() :
                              void 0;
                          tf.add({
                              et: a,
                              wid: g ? g : d,
                              pid: this.j.o("pid", null),
                              d: e,
                              p: c,
                              fv: b,
                              cz: f,
                              ab: this.j.o("obRecsAbtestAndVars", null)
                          })
                      }
                      rendered() {
                          if (this.Vm.rendered) {
                              var a = this.j.o("feedVersion", null);
                              "1" === a && null === this.j.o("fCard", null) ? this.kc("widget-sf-rendered") : a ? "2" === a && "1" === this.j.o("fCard", null) ? this.kc("widget-sl-rendered") : "2" !== a || this.Ia || this.kc("widget-container-rendered") : this.kc("widget-rendered")
                          }
                      }
                      Td() {
                          if (this.Vm.viewed) {
                              var a = this.j.o("feedVersion", null);
                              a ? "1" === a && null === this.j.o("fCard", null) ?
                                  this.kc("widget-sf-viewed") : "2" === a && this.Ia && !this.Ia.B.Td && this.kc("widget-sl-viewed") : this.kc("widget-viewed")
                          }
                      }
                  },
                  cj = class {
                      constructor(a) {
                          this.j = a;
                          this.rendered = this.Td = !1;
                          this.Ia = null;
                          this.Li = {
                              rendered: !1,
                              Ha: !1
                          };
                          this.Wa = {};
                          sf(this);
                          window.addEventListener("obEventsChange", () => sf(this));
                          this.sy = If(this) ? new bj(this.j) : new aj
                      }
                  };
              OBR.Wl = OBR.Wl || function(a) {
                  var b = {},
                      c = OBR,
                      d = null,
                      e = null,
                      f = null,
                      g = null,
                      k = !1,
                      l = "html",
                      q = "nano",
                      h = !1,
                      m = !1,
                      p = !1,
                      r = !1,
                      t = null,
                      u = null,
                      v = null,
                      w = null,
                      A = null,
                      D = null,
                      E = null,
                      J = null,
                      I = null,
                      V = null,
                      P = new OBR.Ub,
                      R = -1,
                      W = null,
                      Z = null,
                      ca, Ga = null,
                      Ha = !0,
                      Ia = !1,
                      Ja = null,
                      Ka = null,
                      La = null,
                      Gb = null,
                      Hb = null,
                      hb = null,
                      Ib = null,
                      Jb = null,
                      Kb = null,
                      ib = null,
                      jb = null,
                      kb = null,
                      Lb = null,
                      Mb = null,
                      Nb = null,
                      Ob = null,
                      Pb = null,
                      Qb = null,
                      Rb = null,
                      Sb = null,
                      ya = null,
                      za = null,
                      uf = null,
                      vf = null,
                      wf = null,
                      xf = null,
                      yf = null,
                      zf = null,
                      Wb = {
                          "odb-start": null,
                          "odb-end": null,
                          "mv-start": null,
                          "mv-end": null,
                          rendered: null
                      },
                      Af = null,
                      Bf = !1,
                      Cf = !1,
                      Df = null,
                      Ef = !1,
                      Ff = null;
                  b.ea = new Xi(a);
                  b.JM = 0;
                  b.IM = 1E3;
                  b.iM = 2;
                  b.setData = function(n) {
                      b.ea.setData(n)
                  };
                  b.Rg = function() {
                      return nf(b.ea)
                  };
                  b.af = function() {
                      return b.ea.af()
                  };
                  b.Bk = function(n) {
                      b.ea.Bk(n)
                  };
                  b.$e = function() {
                      return b.ea.$e()
                  };
                  b.l = (n, y) => b.ea.l(n, y);
                  b.ba = (n, y) => b.ea.ba(n, y);
                  b.dc = (n, y) => b.ea.getData(n, y);
                  b.iN = () => {
                      var n = b.ea;
                      n.Qm || (n.Qm = {});
                      return n.Qm
                  };
                  b.dj = () => b.ea.dj();
                  b.SE = function(n) {
                      return n && n.response && n.response.request && (n = n.response.request,
                          n = n.tcr) ? n : -1
                  };
                  b.o = function(n, y) {
                      n = lf(b.ea)[n];
                      return "undefined" !== typeof n && null !== n ? n : y
                  };
                  b.zd = function(n) {
                      const y = b.o("obcnsnt", n);
                      return !1 === y ? !1 : !0 === y ? !0 : n
                  };
                  b.AE = () => Number(b.o("pad", 0));
                  b.zE = () => Number(b.o("org", 0));
                  b.VE = () => {
                      const n = b.AE(),
                          y = b.zE();
                      return isNaN(n) || isNaN(y) ? NaN : y + n
                  };
                  b.Aa = () => 0 < b.VE();
                  b.xd = () => b.ea.xd();
                  b.ve = n => {
                      b.ea.ve(n)
                  };
                  b.Sg = () => b.ea.Sg();
                  b.VK = function(n) {
                      b.Ck(n.permalink);
                      b.XK(n.widgetId);
                      b.jK(n.dynLoad);
                      b.YK(n.widgetType);
                      b.RK(n.srcUrl);
                      b.SK(n.testMode);
                      b.WK(n.wizWidget);
                      b.sx(n.extId);
                      b.Cx(n.extId2);
                      b.HK(n.pubImpId);
                      b.wx(n.installationKey);
                      b.rK(n.installationType);
                      b.RJ(n.appVer);
                      b.ox(n.userId);
                      b.UK(n.videoId);
                      b.lq(n.ppids);
                      b.FK(n.playerSrcId);
                      b.JK(n.rtbEnabled);
                      b.AK(n.num);
                      b.YJ(n.cardIdx);
                      b.mK(n.feedFatherIdx);
                      b.ux(n.feedFatherIdx);
                      b.ZJ(n.categoryIds);
                      b.qK(n.iabCat);
                      b.lK(n.fId);
                      b.aK(n.clickTrackerUrl);
                      b.hq(n.feedVersion);
                      "boolean" === typeof n.isManualWidget && b.sK(n.isManualWidget);
                      b.eK(n.contentUrl);
                      b.UJ(n.bundleUrl);
                      b.GK(n.portalUrl);
                      b.bK(n.consentString);
                      b.cK(n.consentVersion);
                      b.VJ(n.ccpaString);
                      b.tK(n.language);
                      b.hK(n.darkModeAttribute);
                      b.zx(n.psub);
                      b.QJ(n.appId);
                      b.kK(n.et);
                      b.gq(n.extraParams);
                      b.yK(n.news);
                      b.zK(n.newsFrom);
                      b.KK(n.rampid);
                      b.fK(n.criteoid)
                  };
                  b.D = function() {
                      return e
                  };
                  b.XK = function(n) {
                      e = "string" === typeof n ? n : "NA"
                  };
                  b.oK = function() {
                      l = "vjapi"
                  };
                  b.Qt = function() {
                      return l
                  };
                  b.Ja = function() {
                      return f || ib || jb || kb
                  };
                  b.Ck = function(n) {
                      f = n
                  };
                  b.Ln = function() {
                      return I
                  };
                  b.UK = function(n) {
                      I = n
                  };
                  b.lq = n => b.ea.lq(n);
                  b.bj = () => b.ea.bj();
                  b.Wt = function() {
                      return V
                  };
                  b.YJ = function(n) {
                      R = n
                  };
                  b.Ti = function() {
                      return R
                  };
                  b.mK = function(n) {
                      W = n
                  };
                  b.lN = function() {
                      return W
                  };
                  b.ux = function(n) {
                      void 0 !== n && null !== n && (Z = c.F[n])
                  };
                  b.un = function() {
                      return Hb
                  };
                  b.ZJ = function(n) {
                      Hb = n
                  };
                  b.Yi = function() {
                      return hb
                  };
                  b.qK = function(n) {
                      "" !== n ? hb = n : hb = null
                  };
                  b.Y = function() {
                      return Z
                  };
                  b.Nt = function() {
                      return b.Y() ? b.Y().o("wnid", null) : Jb
                  };
                  b.wd = function() {
                      return b.Y() ? b.Y().o("abTestVal", null) : null
                  };
                  b.Bn = function() {
                      const n = b.Y();
                      return n ? n.o("layeredTestInfo", null) : null
                  };
                  b.LK = function(n) {
                      Ja = n
                  };
                  b.In = function() {
                      return Ja
                  };
                  b.NK = function(n) {
                      Ka = n
                  };
                  b.Kn = function() {
                      return Ka
                  };
                  b.MK = function(n) {
                      La = n
                  };
                  b.Jn = function() {
                      return La
                  };
                  b.EK = function(n) {
                      Gb = n
                  };
                  b.HE = function() {
                      return Gb
                  };
                  b.sG = function() {
                      return -1 < parseInt(b.Ti(), 10)
                  };
                  b.DG = function() {
                      var n = "mobile" === b.o("readerPlatform", "desktop");
                      const y = !0 === b.o("oo", !1),
                          H = "none" !== b.l("interactionLayerVariant", "none") && b.l("interactionLayerEnabled", !1);
                      n = "desktop" === b.o("readerPlatform", "desktop") || n && b.l("zappingMobileEnable", !1);
                      return !y && H && n
                  };
                  b.FK = function(n) {
                      V = n
                  };
                  b.SK = function(n) {
                      p =
                          "true" === n || !0 === n
                  };
                  b.gj = function() {
                      return p
                  };
                  b.WK = function(n) {
                      r = "true" === n || !0 === n
                  };
                  b.nH = function() {
                      return r
                  };
                  b.sx = function(n) {
                      t = n;
                      !n && (n = this.Mt(OBR._jsc.B("extIdClientObject")), null == n ? 0 : n.length) && (t = n)
                  };
                  b.Mt = function(n) {
                      let y;
                      if (null == n ? 0 : n.length) y = wa(n);
                      return y
                  };
                  b.pb = function() {
                      return t
                  };
                  b.Cx = function(n) {
                      u = n;
                      !n && (n = this.Mt(OBR._jsc.B("extIdClientObject2")), null == n ? 0 : n.length) && (u = n)
                  };
                  b.Bc = function() {
                      return u
                  };
                  b.HK = function(n) {
                      v = n
                  };
                  b.yd = function() {
                      return v
                  };
                  b.JK = function(n) {
                      Ia = n
                  };
                  b.ev = function() {
                      return Ia
                  };
                  b.dO = function(n) {
                      Ha = n
                  };
                  b.tv = function() {
                      return Ha
                  };
                  b.AK = function(n) {
                      isNaN(n) || (Ga = n)
                  };
                  b.$i = function() {
                      return Ga
                  };
                  b.wx = function(n) {
                      w = n
                  };
                  b.rK = function(n) {
                      A = n
                  };
                  b.RJ = function(n) {
                      D = n
                  };
                  b.ox = function(n) {
                      E = n
                  };
                  b.ob = function() {
                      return E
                  };
                  b.RK = function(n) {
                      g = n
                  };
                  b.cu = function() {
                      return g
                  };
                  b.qG = function() {
                      return k
                  };
                  b.jK = function(n) {
                      k = "true" === n || !0 === n
                  };
                  b.Uu = function() {
                      return "flyThrough" === b.l("displayMode", "")
                  };
                  b.ef = () => "" !== b.ba("gnr", "") && b.Dn();
                  b.Go = () => b.l("lightboxFeature", !1) && b.Wu() && b.En().includes("keystone_lightbox_feature");
                  b.Wu = () => null !== b.En();
                  b.En = () => b.ba("gnr_features", null);
                  b.Dn = () => {
                      const n = b.ba("gnr", "");
                      return n && n.moduleName ? n.moduleName : ""
                  };
                  b.pK = n => {
                      Cf = n
                  };
                  b.Xu = () => Cf;
                  b.Bh = n => b.ea.Bh(n);
                  b.Si = () => b.ea.Si();
                  b.pv = function() {
                      return !0 === b.l("stopRater", !1) || !0 === b.l("stopWidget", !1)
                  };
                  b.Hu = function() {
                      return b.ea.aD
                  };
                  b.nv = function() {
                      return !0 === b.l("isSkylandersInjectionEnabled", !1)
                  };
                  b.No = function() {
                      return !0 === b.l("isTopBoxInjectionEnabled", !1)
                  };
                  b.Lo = function() {
                      return null !== b.l("recMode", "").match(/(odb_dynamic_swipe|odb_dynamic_smartfeed-swipe)/)
                  };
                  b.so = function() {
                      return null !== b.l("recMode", "").match(/(odb_dynamic_ad-carousel)/)
                  };
                  b.bH = function() {
                      return null !== b.l("recMode", "").match(/(odb_dynamic_single-card-carousel)/)
                  };
                  b.hG = function() {
                      return null !== b.l("recMode", "").match(/(odb_dynamic_cards-carousel-box)/)
                  };
                  b.rG = function() {
                      return null !== b.l("recMode", "").match(/(odb_dynamic_cards-carousel|odb_dynamic_text-on-image-carousel)/)
                  };
                  b.SG = function() {
                      return null !== b.l("recMode", "").match(/(odb_playableAd)/)
                  };
                  b.PG = function() {
                      return b.l("isParallax",
                          !1)
                  };
                  b.AG = function() {
                      return b.l("gridCarouselEnabled", !1)
                  };
                  b.sv = function() {
                      return null !== b.l("recMode", "").match(/(odb_timeline)/)
                  };
                  b.xo = function() {
                      return null !== b.l("recMode", "").match(/(odb_dynamic_display)/)
                  };
                  b.Po = function() {
                      return null !== b.l("recMode", "").match(/(odb_dynamic_video-reel)/)
                  };
                  b.Ec = function() {
                      return null !== b.l("recMode", "").match(/(odb_dynamic_reel)/)
                  };
                  b.UG = function() {
                      return b.Ec() && b.l("isReelV2", !1)
                  };
                  b.Ko = function() {
                      return null !== b.l("recMode", "").match(/(odb_dynamic_stories)/)
                  };
                  b.Ou = function() {
                      return null !== b.l("exploreMoreWidgetId", null)
                  };
                  b.qx = function() {
                      Ef = !0
                  };
                  b.ge = function() {
                      const n = b.v();
                      return n && n.hasAttribute("data-ob-explore-more") || Ef
                  };
                  b.Co = function() {
                      return null !== b.l("recMode", "").match(/(odb_dynamic_grid)/)
                  };
                  b.Do = function() {
                      const n = b.v();
                      return !(!n || !OBR.g.H(n).querySelector("div.ob-widget.ob-grid-layout"))
                  };
                  b.cv = function() {
                      return null !== b.l("recMode", "").match(/(odb_dynamic_multi-columns)/)
                  };
                  b.dG = function() {
                      return null !== b.l("recMode", "").match(/(odb_dynamic_app-card)/)
                  };
                  b.oH = function() {
                      return !0 === b.l("IsWidgetInjector", !1)
                  };
                  b.Na = function() {
                      return !b.nH() && !0 === b.l("isSmartFeedInjectionEnabled", !1)
                  };
                  b.uG = function() {
                      var n = b.v();
                      n = n && n.parentNode;
                      return b.l("isFloatingScrollEnabled", !1) && OBR.i.M && b.Na() && n
                  };
                  b.aG = () => {
                      try {
                          return +b.l("admiralApi", 0)
                      } catch (n) {
                          return 0
                      }
                  };
                  b.jH = function() {
                      return !0 === b.l("isUIExperimentsEnabled", !1)
                  };
                  b.Yc = function() {
                      return !0 === b.ba("isShadowDomEnabled", !1) || "true" === b.ba("isShadowDomEnabled", !1)
                  };
                  b.xv = function() {
                      const n = b.v();
                      return n && !!n.shadowRoot
                  };
                  b.$G = function() {
                      return b.l("isShadowDomEnabled", !1) && !b.Qu() && (b.Co() || b.cv())
                  };
                  b.Vi = () => b.l("darkModeClass", "");
                  b.fh = function() {
                      return !0 === b.ba("isSingleAnimationOnFeedAbTestEnabled", !1)
                  };
                  b.jv = function() {
                      const n = b.Y();
                      return n && n.tG()
                  };
                  b.tG = function() {
                      return Bf
                  };
                  b.iq = function() {
                      Bf = !0
                  };
                  b.uN = function() {
                      return q
                  };
                  b.ac = function() {
                      return w
                  };
                  b.bc = function() {
                      return A
                  };
                  b.$b = function() {
                      return D
                  };
                  b.YK = function(n) {
                      "string" === typeof n && (q = n.toLowerCase())
                  };
                  b.aK = function(n) {
                      try {
                          const y = document.createElement("a");
                          y.href = n;
                          const H = y.host && y.host !== window.location.host;
                          n && H && (Ib = n)
                      } catch (y) {}
                  };
                  b.yc = function() {
                      return Ib
                  };
                  b.VD = function() {
                      return wf
                  };
                  b.UD = function() {
                      return vf
                  };
                  b.XJ = function(n) {
                      wf = n
                  };
                  b.WJ = function(n) {
                      vf = n
                  };
                  b.xx = function(n) {
                      ca = n
                  };
                  b.Ho = function() {
                      return ca
                  };
                  b.hq = function(n) {
                      Kb = n
                  };
                  b.Ze = function() {
                      return Kb
                  };
                  b.Qu = function() {
                      return "2" === (b.Ze() || b.o("feedVersion"))
                  };
                  b.eK = function(n) {
                      ib = n
                  };
                  b.zc = function() {
                      return ib
                  };
                  b.UJ = function(n) {
                      jb = n
                  };
                  b.xc = function() {
                      return jb
                  };
                  b.GK = function(n) {
                      kb = n
                  };
                  b.Ac = function() {
                      return kb
                  };
                  b.Eb = function() {
                      const n = b.Y();
                      return !!(this.xc() || this.zc() || this.Ac()) || (null == n ? void 0 : n.Eb())
                  };
                  b.Ui = function() {
                      return Lb
                  };
                  b.bK = function(n) {
                      Lb = n
                  };
                  b.tn = function() {
                      return Mb
                  };
                  b.VJ = function(n) {
                      Mb = n
                  };
                  b.xn = function() {
                      return Nb
                  };
                  b.cK = function(n) {
                      Nb = n
                  };
                  b.zx = function(n) {
                      Pb = n
                  };
                  b.Mg = function() {
                      return Pb
                  };
                  b.QJ = function(n) {
                      Qb = n
                  };
                  b.Ft = function() {
                      return Qb
                  };
                  b.tK = function(n) {
                      Ob = n
                  };
                  b.Lg = function() {
                      return Ob
                  };
                  b.hK = n => {
                      Af = n
                  };
                  b.yn = () => Af;
                  b.kK = function(n) {
                      Rb = b.he() ? !!n : !0
                  };
                  b.Lt = function() {
                      return Rb
                  };
                  b.lK = function(n) {
                      Jb =
                          n
                  };
                  b.gq = function(n) {
                      Sb = n
                  };
                  b.vd = function() {
                      return Sb
                  };
                  b.yK = function(n) {
                      J = n
                  };
                  b.Hn = function() {
                      return J
                  };
                  b.zK = function(n) {
                      ya = n
                  };
                  b.Tt = function() {
                      return ya
                  };
                  b.OK = function(n) {
                      Df = n
                  };
                  b.Qg = function() {
                      return Df
                  };
                  b.KK = function(n) {
                      za = n
                  };
                  b.rN = function() {
                      return za
                  };
                  b.fK = function(n) {
                      uf = n
                  };
                  b.kN = function() {
                      return uf
                  };
                  b.ic = function() {
                      return b.ea.ic
                  };
                  b.jE = () => b.o("fCard", void 0);
                  b.Vt = () => {
                      const n = b.Y() || b;
                      return n && n.l("onyxFeedMode", "None")
                  };
                  b.FE = () => b.l("OnyxServingMode");
                  b.OG = () => {
                      const n = b.FE();
                      return n && "non_onyx" !==
                          n
                  };
                  b.cH = () => b.l("skipCardRenderIfTimePassed", 0);
                  b.jG = n => {
                      const y = null == n ? void 0 : n.Y();
                      return n && y ? n.l("pubProvidedIds", null) || (null == y ? void 0 : y.l("pubProvidedIds", null)) : !1
                  };
                  const Gf = n => {
                      try {
                          let y = !1;
                          switch (n.startsWith("=") ? "exact" : "broad") {
                              case "broad":
                                  y = OBR._jsc.Q.referrer.includes(n);
                                  break;
                              case "exact":
                                  const {
                                      hostname: H
                                  } = new URL(OBR._jsc.Q.referrer);
                                  y = H === n.slice(1)
                          }
                          return y
                      } catch (y) {
                          return OBR.logger.log(y), !1
                      }
                  };
                  let Hf = !1,
                      Ec = !1;
                  const Zl = () => {
                      const n = b.l("exploreMoreReferrerDomains", '["empty"]'),
                          y = b.l("exploreMoreBlockedReferrerDomains", "[]");
                      try {
                          if (OBR.i.QD) return !0;
                          var H = b.l("exploreMoreDirectHistoryLengthThreshold", null);
                          const X = H && window.history.length < parseInt(H),
                              aa = JSON.parse(n).map(Na => Na.toLowerCase()),
                              Aa = JSON.parse(y).map(Na => Na.toLowerCase()),
                              ia = aa.includes("empty"),
                              Yl = Aa.includes("$samesite");
                          if (OBR._jsc.Q.referrer) {
                              if (Yl && xh()) return !1;
                              H = !1;
                              if (aa && aa.length && (H = aa.some(Fc => Gf(Fc)), !ia || ia && 1 < aa.length)) return H;
                              const Na = Aa && Aa.length ? Aa.some(Fc => Gf(Fc)) : !1;
                              return ia ? !Na || H : !Na
                          }
                          return ia ||
                              X
                      } catch (X) {
                          OBR.error({
                              name: "obm-ExploreMoreValidReferrer",
                              message: `allowedReferrers: ${n}blockedReferrers: ${y} 'referrer:${document.referrer}`
                          }), OBR.logger.log(X)
                      }
                      return !1
                  };
                  b.Pu = () => {
                      if (Hf) return Ec;
                      Ec = Zl();
                      Hf = !0;
                      return Ec
                  };
                  b.gE = () => {
                      if (OBR.i.ou && b.Ou()) return b.Pu() ? "1" : "0"
                  };
                  b.Nd = function(n) {
                      b.ea.Nd(n)
                  };
                  b.he = function() {
                      return h
                  };
                  b.NG = function() {
                      return 0 === a || h || !OBR.i.Fd || m || OBR.i.Fd && b.Nj()
                  };
                  b.CK = function() {
                      m = !0
                  };
                  b.sK = function(n) {
                      h = !!n
                  };
                  b.Fx = function() {
                      var n = b.o("lsd", null),
                          y = !0 === b.o("oo", !1),
                          H = "string" === typeof n && 0 < n.length,
                          X = !0 === b.l("isUseLocalStorageForUUID", !0),
                          aa = OBR._jsc.C.ai,
                          Aa = OBR._jsc.C.Ql,
                          ia = c.ga.Cb && "1" === b.o("gdpr", "0") + "";
                      ia = !ia || ia && b.Ut();
                      X && !y && H && ia ? (c.g.U(aa, null) !== n && c.g.Fa(Aa, (new Date).getTime()), c.g.Fa(aa, n)) : X && ia || (c.g.Zd(aa), c.g.Zd(Aa))
                  };
                  b.mq = (n = null) => {
                      n = n ? n : b.o("seid", null);
                      c.g.U(OBR._jsc.C.zl, null) !== n && c.g.Fa(OBR._jsc.C.zl, n)
                  };
                  b.fj = () => c.g.U(OBR._jsc.C.zl, null);
                  b.Ut = () => b.zd(!0);
                  b.fc = () => {
                      const n = "1" === b.o("gdpr", "0") + "";
                      return !n || n && b.Ut()
                  };
                  b.IK = () => {
                      if (0 === b.G()) {
                          const n = OBR.i.publisherLoginIndication;
                          OBR.i.publisherSubscriptionSelector && n && !OBR.i.uh && (OBR.i.uh = OBR.g.Xt())
                      }
                  };
                  b.vx = function() {
                      var n = b.o("clss", null);
                      n && (c.fraudDetection.fq = encodeURIComponent(n));
                      if (0 === b.G()) {
                          n = OBR._jsc.C.ar;
                          var y = OBR._jsc.C.br,
                              H = b.l("fraudDetection", 0),
                              X = b.l("cheqCallTimeout", 500);
                          c.g.Fa(n, H);
                          H && c.g.Fa(y, X)
                      }
                  };
                  b.G = function() {
                      return b.ea.G()
                  };
                  b.fJ = function(n) {
                      "string" === typeof n ? (OBR.g.Rb(OBR.g.v(b.ea.G()), "data-src", n), b.Ck(n), b.ea.Af = 1) : (n = b.ea, n.Af += 1);
                      b.Nd(!1)
                  };
                  b.Og = function() {
                      return b.ea.Og()
                  };
                  b.Ti = () => {
                      const n = b.v();
                      return n ? n.getAttribute("data-card-idx") : null
                  };
                  b.v = ({
                      wc: n
                  } = {
                      wc: !1
                  }) => b.ea.v({
                      wc: n
                  });
                  b.gu = () => {
                      var n = b.v();
                      if (n) return (n = OBR.g.H(n)) && n.children ? n.children[0] : null
                  };
                  b.dK = n => {
                      d = n
                  };
                  b.Jg = ({
                      wc: n
                  } = {
                      wc: !1
                  }) => {
                      if (d) return d;
                      if (n = b.v(n)) return 0 === n.clientWidth ? (n.style.width = "100%", b.WD(n)) : n.clientWidth
                  };
                  b.WD = n => {
                      let y = 0;
                      n = n.parentElement;
                      try {
                          for (; n && 100 > y;) {
                              if (0 !== n.clientWidth) return n.clientWidth;
                              n = n.parentElement;
                              y++
                          }
                      } catch (H) {
                          OBR.error({
                              name: "obm-noContainerWidth",
                              message: `Container width not found: ${H}`
                          })
                      }
                      return 0
                  };
                  b.Dk = n => {
                      b.ea.Wp = n
                  };
                  b.Ng = () => b.ea.Wp;
                  b.Kt = () => {
                      if (b.he()) {
                          var n = b.ea.Ng();
                          return n ? n.Kt() : null
                      }
                      try {
                          n = b.v();
                          if (!n) return null;
                          const y = b.getBoundingClientRect();
                          if (0 <= y.top && 0 <= y.left && y.bottom <= (window.innerHeight || document.documentElement.clientHeight) && y.right <= (window.innerWidth || document.documentElement.clientWidth)) return 0;
                          if (y.top >= -n.offsetHeight) return Math.floor(y.top - document.documentElement.clientHeight);
                          const H = b.aj(),
                              X = H && H.height,
                              aa = H && H.y;
                          return X && aa ? Math.floor(X + aa - document.documentElement.scrollTop) : null
                      } catch (y) {
                          return null
                      }
                  };
                  b.getBoundingClientRect = () => {
                      const n = b.v();
                      if (n) return n.getBoundingClientRect()
                  };
                  b.aj = n => {
                      if (b.he()) {
                          var y = b.ea.Ng();
                          return y ? y.aj(n) : null
                      }
                      try {
                          if (b.v()) {
                              y = b.getBoundingClientRect();
                              const H = {
                                  x: Math.floor(y.left + (window.pageXOffset || document.documentElement.scrollLeft)),
                                  y: Math.floor(y.top + (window.pageYOffset || document.documentElement.scrollTop)),
                                  height: Math.abs(Math.floor(y.height)),
                                  width: Math.abs(Math.floor(y.width))
                              };
                              return n ? H[n] : H
                          }
                          return null
                      } catch (H) {
                          return null
                      }
                  };
                  b.Zc = () => "RTL" === b.l("dynamicWidgetDirection", "LTR").toUpperCase();
                  b.GG = () => OBR.i.mu && !b.Zc() && b.Co();
                  b.Kq = () => "client" === b.l("skeletonType", null);
                  b.pF = () => 1 === b.ba("clips", 0);
                  b.kO = (n, y) => {
                      if (n = document.querySelector('[data-orig-idx="' + n + '"]')) n.id = OBR.i.el + y, c.g.Rb(n, "data-idx", y), b.Ak(y), a = y
                  };
                  b.Ak = n => {
                      b.ea.Ak(n)
                  };
                  b.WM = n => {
                      let y = (0, OBR._jsc.jh)(OBR.i.el + n);
                      y && (y.removeAttribute("id"), y.removeAttribute("data-idx"), y.setAttribute("data-orig-idx",
                          n))
                  };
                  b.Fn = () => b.ba("leadForms", null);
                  b.IE = () => b.ba("paidLabel", null);
                  b.mE = () => b.ba("hasRTB", !1);
                  b.rF = () => !!b.Fn();
                  b.ov = () => null !== b.l("recMode", "").match(/(odb_dynamic_stack-card)/);
                  b.Hj = () => null !== b.l("recMode", "").match(/(odb_dynamic_read-next)/);
                  b.KG = () => "" !== b.Gt();
                  b.Gt = () => b.ba("atps", "");
                  b.Oo = () => 0 !== b.o("vid", 0);
                  b.$K = () => {
                      var n = OBR.i.Qi;
                      if (n && n[b.D()]) return "1" === n[b.D()] || "2" === n[b.D()];
                      n = b.Po() && "ATF" === b.l("onyxFeedMode", "None");
                      return b.Oo() && !b.Ec() && !b.Hj() && !n
                  };
                  b.Vu = () => {
                      const n = b.vd(),
                          y = OBR.i.ZC;
                      return n && n.includes("dark-mode") && y
                  };
                  b.xj = () => {
                      const n = b.Vu(),
                          y = b.yn();
                      return "undefined" !== typeof y ? !0 === y : !!c.g.xj() || !!n
                  };
                  b.oG = () => !0 === b.yn();
                  b.Kg = () => {
                      if (!OBR.settings || !OBR.settings.darkModeQuery) return null;
                      var n = "body" !== OBR.settings.darkModeQuery && OBR.settings.darkModeQuery;
                      return (n = n ? n : b.l("darkModeQuery", null)) && document.querySelector(n)
                  };
                  b.oF = () => {
                      var n = b.v();
                      const y = b.af();
                      if (n && y && y.listings) {
                          n = Array.from(OBR.g.H(n).querySelectorAll(".ob-dynamic-rec-container"));
                          for (let H =
                                  0; H < n.length; H++) {
                              const X = n[H].getAttribute("data-pos");
                              if (y.listings[X] && y.listings[X].clickPixels) return !0
                          }
                      }
                      return !1
                  };
                  b.PE = () => b.l("recsTarget", null);
                  b.lJ = n => {
                      P.add("widgetOdbCallFailed", n)
                  };
                  b.CD = () => {
                      P.fire("widgetOdbCallFailed", [])
                  };
                  b.Bx = n => {
                      xf = n
                  };
                  b.bu = () => xf;
                  b.nK = n => {
                      yf = n
                  };
                  b.kE = () => yf;
                  b.Pt = () => b.l("feedMaxHeight");
                  b.bv = () => {
                      const n = b.v();
                      return n && n.hasAttribute("data-ob-lazy-render")
                  };
                  b.Qo = () => b.bv() && !b.ic();
                  b.tx = n => {
                      zf = n
                  };
                  b.iE = () => zf;
                  b.Dx = n => {
                      Wb.hasOwnProperty(n) && (Wb[n] = Date.now())
                  };
                  b.du =
                      n => {
                          if (Wb.hasOwnProperty(n)) return Wb[n]
                      };
                  b.XG = () => b.l("isSafeFrameEnabled", !1);
                  b.Nj = () => {
                      const n = b.v();
                      return n && n.hasAttribute("data-ob-prefetch")
                  };
                  b.Um = null;
                  b.tb = (n, y = {}) => {
                      b.l("exploreMoreBiEvents", !1) && (b.Um || (b.Um = new OBR.dataBI(b, H => H.Za)), b.Um.fire(n, y, {
                          method: OBR.i.V.Lc
                      }))
                  };
                  b.px = function() {
                      b.B = new cj(this)
                  };
                  b.mN = function() {
                      return Ff
                  };
                  b.uK = function(n) {
                      Ff = n
                  };
                  b.Dk = n => {
                      b.ea.Dk(n)
                  };
                  b.Ng = () => b.ea.Ng();
                  b.JG = () => b.l("isMraidAd", !1);
                  b.ej = () => {
                      const n = b.Y();
                      return b.o("resolvedUrl", null) || (null == n ?
                          void 0 : n.ej())
                  };
                  return b
              };
              OBR.Rh = OBR.Rh || function() {
                  var a = OBR,
                      b = {},
                      c = new a.Ub;
                  b.Jm = function(e) {
                      e.idx = e.idx || 0;
                      var f = new a.Wl(e.idx);
                      f.VK(e);
                      return f
                  };
                  b.jg = function(e, f) {
                      var g = a.Ya.Ls(e);
                      a.g.Rb(e, "data-dynLoad", "");
                      g.permalink = a.Ya.JD(g.permalink);
                      ["contentUrl", "bundleUrl", "portalUrl"].forEach(l => {
                          "undefined" !== typeof g[l] && (g[l] = a.Ya.KD(g[l]))
                      });
                      f = d(g, f);
                      g.idx = f;
                      var k = b.Jm(g);
                      a.F[f] = k;
                      a.g.Rb(e, "data-idx", f);
                      a.i.yt(g);
                      0 === f && a.g.QC(e);
                      e.id = a.i.el + f;
                      c.fire("onWidgetCreate", [k]);
                      return k
                  };
                  const d = (e, f) => {
                      if (f) return f;
                      if (window.OBBridge &&
                          window.OBBridge.t && window.OBBridge.idx) return window.OBBridge.idx;
                      if (0 !== a.F.length || a.i.Id !== e.permalink && !0 !== a.i.fp) {
                          if (1E3 < a.F.length && ([e] = a.F.slice(-1), e && (e = e.Y()))) {
                              for (e = e.G() + 1; e < a.F.length && a.F[e];) e++;
                              return e
                          }
                          return a.F.length
                      }
                      return 1
                  };
                  b.QN = function(e) {
                      c.add("onWidgetCreate", e)
                  };
                  return b
              }();
              OBR.Ya = OBR.Ya || function() {
                  var a = OBR,
                      b = {
                          yb: {
                              widgetId: {
                                  a: "data-widget-id",
                                  t: "string"
                              },
                              permalink: {
                                  a: "data-src",
                                  t: "string"
                              },
                              srcUrl: {
                                  a: "data-ob-srcUrl",
                                  t: "string"
                              },
                              dynLoad: {
                                  a: "data-dynLoad",
                                  t: "boolean"
                              },
                              widgetType: {
                                  a: "data-widget-type",
                                  t: "string"
                              },
                              testMode: {
                                  a: "data-ob-test",
                                  t: "boolean"
                              },
                              wizWidget: {
                                  a: "data-ob-wiz",
                                  t: "boolean"
                              },
                              installationKey: {
                                  a: "data-ob-installation-key",
                                  t: "string"
                              },
                              userId: {
                                  a: "data-ob-user-id",
                                  t: "string",
                                  n: !0
                              },
                              ppids: {
                                  a: "data-ppids",
                                  t: "string",
                                  n: !0
                              },
                              videoId: {
                                  a: "data-ob-video-id",
                                  t: "string"
                              },
                              playerSrcId: {
                                  a: "data-ob-player-src-id",
                                  t: "string"
                              },
                              installationType: {
                                  a: "data-ob-installation-type",
                                  t: "string"
                              },
                              appVer: {
                                  a: "data-ob-app-ver",
                                  t: "string"
                              },
                              isSecured: {
                                  a: "data-is-secured",
                                  t: "boolean"
                              },
                              extId: {
                                  a: "data-external-id",
                                  t: "string"
                              },
                              extId2: {
                                  a: "data-external-secondary-id",
                                  t: "string"
                              },
                              pubImpId: {
                                  a: "data-pub-imp-id",
                                  t: "string"
                              },
                              rtbEnabled: {
                                  a: "data-rtb-enabled",
                                  t: "boolean"
                              },
                              va: {
                                  a: "data-va",
                                  t: "boolean"
                              },
                              num: {
                                  a: "data-num-of-recs",
                                  t: "string"
                              },
                              cardIdx: {
                                  a: "data-card-idx",
                                  t: "string"
                              },
                              feedFatherIdx: {
                                  a: "data-feed-father-idx",
                                  t: "string"
                              },
                              categoryIds: {
                                  a: "data-category-ids",
                                  t: "string"
                              },
                              iabCat: {
                                  a: "data-iab-category",
                                  t: "string"
                              },
                              fId: {
                                  a: "data-fId",
                                  t: "string"
                              },
                              clickTrackerUrl: {
                                  a: "data-click-url",
                                  t: "string"
                              },
                              feedVersion: {
                                  a: "data-feed-version",
                                  t: "string"
                              },
                              contentUrl: {
                                  a: "data-ob-contentUrl",
                                  t: "string",
                                  e: !0
                              },
                              bundleUrl: {
                                  a: "data-ob-bundleUrl",
                                  t: "string",
                                  e: !0
                              },
                              portalUrl: {
                                  a: "data-ob-portalUrl",
                                  t: "string",
                                  e: !0
                              },
                              language: {
                                  a: "data-ob-language",
                                  t: "string"
                              },
                              psub: {
                                  a: "data-ob-psub",
                                  t: "string"
                              },
                              appId: {
                                  a: "data-ob-app-id",
                                  t: "string"
                              },
                              et: {
                                  a: "data-et",
                                  t: "boolean"
                              },
                              extraParams: {
                                  a: "data-extra-params",
                                  t: "string"
                              },
                              consentString: {
                                  a: "data-consent-string",
                                  t: "string"
                              },
                              ccpaString: {
                                  a: "data-ccpa-string",
                                  t: "string"
                              },
                              consentVersion: {
                                  a: "data-consent-version",
                                  t: "string"
                              },
                              adblock: {
                                  a: "data-ob-adblock",
                                  t: "string",
                                  e: !0
                              },
                              darkModeAttribute: {
                                  a: "data-dark-mode",
                                  t: "string"
                              },
                              news: {
                                  a: "data-on-news",
                                  t: "string"
                              },
                              newsFrom: {
                                  a: "data-on-newsFrom",
                                  t: "string"
                              },
                              rampid: {
                                  a: "data-ob-ramp-id",
                                  t: "string"
                              },
                              criteoid: {
                                  a: "data-ob-criteo-id",
                                  t: "string"
                              },
                              uuid20: {
                                  a: "data-ob-uu-id2",
                                  t: "string"
                              },
                              hemsha256: {
                                  a: "data-ob-hemsha256-id",
                                  t: "string"
                              },
                              hemmd5: {
                                  a: "data-ob-hemmd5-id",
                                  t: "string"
                              },
                              hemsha256md5: {
                                  a: "data-ob-hemsha256md5-id",
                                  t: "string"
                              }
                          },
                          fu: function(c) {
                              var d, e;
                              if (a.F) {
                                  var f = a.F.length;
                                  for (d = 0; d < f; d += 1)
                                      if ((e = a.F[d]) && e.D() === c) return e
                              }
                              return null
                          },
                          be: function(c) {
                              return a.F[c] ? a.F[c] : null
                          },
                          VC: function(c) {
                              var d = {},
                                  e;
                              for (e in b.yb) b.yb.hasOwnProperty(e) && typeof c[e] === b.yb[e].t && (d[e] = c[e], "adblock" === e && OBR.i.$m.Ek(c.adblock));
                              return d
                          },
                          Ls: function(c) {
                              var d = {},
                                  e;
                              for (e in b.yb)
                                  if (b.yb.hasOwnProperty(e)) {
                                      var f =
                                          a.g.Ye(c, b.yb[e].a);
                                      "true" === f || "false" === f ? (d[e] = "true" === f, "adblock" === e && OBR.i.$m.Ek(f)) : typeof f !== b.yb[e].t || !0 !== b.yb[e].n && "null" === f || "" === f && !0 !== b.yb[e].e || (d[e] = f)
                                  } return d
                          },
                          JD: function(c) {
                              if ("string" !== typeof c || "null" === c) c = a.g.Gn();
                              else if (0 === c.length || 0 === c.indexOf("DROP") || 0 === c.indexOf("INSERT")) {
                                  if (c && 0 === c.indexOf("DROP") && "www.msn.com" === window.location.hostname) return c = window.location.href;
                                  c = a.g.Gn()
                              }
                              0 === c.indexOf("//") && (c = a.i.ma.replace("//", "") + c);
                              return c
                          },
                          KD: function(c) {
                              "string" !==
                              typeof c || 0 !== c.length && 0 !== c.indexOf("DROP") || (c = a.g.Gn(), 0 === c.indexOf("//") && (c = a.i.ma.replace("//", "") + c));
                              return c
                          },
                          PC: function(c, d) {
                              for (var e in b.yb) b.yb.hasOwnProperty(e) && typeof c[e] === b.yb[e].t && a.g.Rb(d, b.yb[e].a, c[e])
                          },
                          hN: function() {
                              var c, d = [];
                              for (c = 0; c < a.F.length; c++) d.push(a.F[c].D());
                              return d
                          }
                      };
                  return b
              }();
              var dj;
              dj = class {
                  constructor() {
                      this.ready = !1;
                      this.Eg = {};
                      this.tw = {};
                      if (OBR.i.jc) {
                          this.ready = !0;
                          this.sc();
                          const a = th(window);
                          this.tw = {
                              oB: a("appBundle", ""),
                              LJ: a("sdkVersion", ""),
                              ze: a("userId", null)
                          }
                      }
                  }
                  sc() {
                      window.addEventListener("obBridgeExposureChanged", a => {
                          this.Eg.obBridgeExposureChanged && this.Eg.obBridgeExposureChanged.forEach(b => b(a))
                      })
                  }
              };
              OBR._jsc.ej = new dj; {
                  const a = OBR.g.U("id5id");
                  if (a) try {
                      JSON.parse(decodeURIComponent(a))
                  } catch (b) {}
              };
              OBR.DL = OBR.DL || (() => {
                  class a {
                      constructor() {}
                  }
                  return new a
              })();
              var fj = "undefined" !== typeof window.OB_amp,
                  gj = class {
                      constructor() {
                          this.Mc = OBR;
                          this.Ga = {
                              height: 0,
                              width: 0
                          };
                          this.Pm = 300;
                          this.qm = null;
                          this.Xj = {
                              gO: -1,
                              sL: -1,
                              oO: -1,
                              pO: -1
                          };
                          Lf(this)
                      }
                      lc(a) {
                          this.Mc = a
                      }
                      pi(a, b, c) {
                          if (!a || 0 > b || 100 < b) return !1;
                          c || (c = {
                              top: 0,
                              bottom: 0
                          });
                          if (fj) {
                              c = this.qm;
                              if (!c) return !1;
                              var d = Of(a, c);
                              a = Pf(d, c);
                              return (b = 0 <= a.height && 0 <= a.width && Math.max(1, Math.round(Math.min(d.height, c.rootBounds.height) * b / 100))) && a.height >= b
                          }
                          a = a.getBoundingClientRect();
                          d = this.Ga.height;
                          a = {
                              top: a.top - c.top,
                              height: a.height +
                                  c.bottom,
                              bottom: a.top + a.height + c.bottom
                          };
                          b = Math.round(a.height * b / 100) || 1;
                          b = b > d ? d - 1 : b;
                          return a.top + b <= d && 0 <= a.bottom - b
                      }
                      bh(a, b, c, d) {
                          if (OBR.i.Xj) {
                              if (a) {
                                  var e = this.Xj;
                                  d = e.totalWidth;
                                  c = e.visibleFrom;
                                  e = e.visibleTo;
                                  if (0 > c || 1 > e) b = !1;
                                  else if (a = a.getBoundingClientRect(), e < a.top || 0 > a.left) b = !1;
                                  else {
                                      const g = window.devicePixelRatio;
                                      var f = d / g;
                                      b = (Math.min(f, a.left + a.width) - Math.max(f - d, a.left)) * (Math.min(e / g, a.height + a.top) - Math.max(a.top, c / g)) / (a.width * a.height) >= b / 100
                                  }
                              } else b = !1;
                              return b
                          }
                          if (fj) {
                              d = this.qm;
                              if (!d) return !1;
                              a = Of(a, d);
                              d = Pf(a, d);
                              d = d.width * d.height
                          } else c = a = a.getBoundingClientRect(), d = d ? d.getBoundingClientRect() : {
                              top: 0,
                              left: 0,
                              width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                              height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                          }, d = (Math.min(c.width + c.left, d.width + d.left) - Math.max(c.left, d.left)) * (Math.min(c.height + c.top, d.height + d.top) - Math.max(c.top, d.top));
                          return d / (a.width * a.height) >= b / 100
                      }
                  };
              OBR.ca = OBR.ca || new gj;
              OBR.IntersectionObserver = OBR.IntersectionObserver || function() {
                  class a {
                      constructor(b) {
                          this.Qb = null;
                          this.Tm = !1;
                          this.Wk = null;
                          this.J = {
                              callback: () => {},
                              callbackParams: [],
                              element: null,
                              intersectPercentage: 0,
                              scrollDimmer: 200,
                              unobserve: !1,
                              threshold: [1],
                              rootMargin: "0px"
                          };
                          this.tA(b)
                      }
                      tA(b) {
                          b && (this.J = Object.assign(this.J, b), this.J.callbackParams = this.J.callbackParams || [])
                      }
                      zA() {
                          const b = {
                              rootMargin: this.J.rootMargin,
                              threshold: this.J.threshold
                          };
                          this.J.root && (b.root = this.J.root);
                          this.Wk = new window.IntersectionObserver(this.AA.bind(this),
                              b);
                          this.Wk.observe(this.J.element);
                          return this.Wk
                      }
                      AA(b, c) {
                          if (!this.J) c.disconnect();
                          else if (this.Ir()) c.unobserve(this.J.element), c.disconnect();
                          else if (b)
                              for (const d in b)
                                  if (b[d] && b[d].intersectionRatio > this.J.intersectPercentage && (this.J.callback.call(this, ...this.J.callbackParams, b[d], this), this.J.unobserve)) {
                                      c.unobserve(b[d].target);
                                      c.disconnect();
                                      break
                                  }
                      }
                      Ir() {
                          return this.J && this.J.element ? this.J.element.getRootNode && this.J.element.getRootNode().mode ? !1 : !document.documentElement.contains(this.J.element) :
                              !0
                      }
                      EA() {
                          const b = this.J.checkAbsoluteVisibility ? OBR.ca.bh : OBR.ca.pi;
                          if (this.Tm) this.Tm = !1;
                          else {
                              const c = this.J.intersectPercentage;
                              b.call(OBR.ca, this.J.element, 0 <= c && 1 >= c ? 100 * c : c, this.J.rootMarginObj, this.J.root) && (this.Tm = !0, this.J.callback.apply(this, this.J.callbackParams), this.J.unobserve && OBR.g.Cf("scroll", this.Zj))
                          }
                      }
                      Kr() {
                          this.Ir() ? OBR.g.Cf("scroll", this.Zj) : this.Qb || (this.EA(), setTimeout(() => {
                              this.Qb = !1
                          }, this.J.scrollDimmer), this.Qb = !0)
                      }
                      uI() {
                          const b = this.J.rootMargin.split(" ");
                          this.J.rootMarginObj = {
                              top: parseInt(b[0]),
                              right: parseInt(b[1] || b[0]),
                              bottom: parseInt(b[2] || b[0]),
                              left: parseInt(b[3] || b[0])
                          }
                      }
                      unobserve() {
                          OBR.i.Un ? this.Wk.disconnect() : window.removeEventListener("scroll", this.Zj);
                          this.J = null
                      }
                      observe() {
                          if (!this.J || !this.J.element) return null;
                          if (OBR.i.Un) return this.zA();
                          this.uI();
                          this.Zj = this.Kr.bind(this);
                          OBR.g.Ab(window, "scroll", this.Zj);
                          this.Kr();
                          return this
                      }
                  }
                  return a
              }();
              var hj = class {
                      ah(a) {
                          return new OBR.IntersectionObserver(a)
                      }
                      na(a) {
                          return OBR.F[a]
                      }
                      protocol() {
                          return OBR.i.ma
                      }
                      createElement(a) {
                          return OBR.g.createElement(a.type, a.id, a.css, a.attributes)
                      }
                      Hi() {
                          return new OBR.Hi
                      }
                      log(a) {
                          OBR.logger.log(a)
                      }
                      qk(a) {
                          OBR.kb.qk(a)
                      }
                      sn() {
                          return OBR.kb.sn()
                      }
                      Mn() {
                          return OBR.kb.Mn()
                      }
                      jk(a) {
                          return OBR.g.jk(a)
                      }
                      Ih(a) {
                          return OBR.g.Ih(a)
                      }
                  },
                  N = new hj;
              var ij = class {
                  constructor() {
                      this.vc = {
                          ready: 0,
                          Hq: 6,
                          stopped: 7
                      };
                      this.Qb = !1;
                      this.De = [];
                      this.Th = {};
                      this.rg = N.Hi();
                      this.pm = !1;
                      this.HJ = 200;
                      Yf(this);
                      Zf(this);
                      this.startTime = (new Date).getTime();
                      ag(this);
                      this.Ua = [];
                      this.Xk = new Map;
                      this.zk = this.zk.bind(this)
                  }
                  zk(a) {
                      if (!a.RL && !a.Xu()) {
                          const b = a.G();
                          this.De[b] || (this.De[b] = a.v());
                          N.ah({
                              callback: this.Vg.bind(this),
                              callbackParams: [a.G()],
                              element: a.v(),
                              unobserve: !0,
                              threshold: [0]
                          }).observe()
                      }
                  }
                  yk() {
                      this.De.forEach((a, b) => {
                          void 0 !== a && a && OBR.ca.pi(a, 0) && this.Vg(b)
                      })
                  }
                  ha() {
                      this.Qb = !1;
                      this.De = [];
                      this.Th = {};
                      this.rg = N.Hi();
                      this.startTime = (new Date).getTime();
                      this.Mi = !1;
                      this.Ua.forEach(a => a.unobserve());
                      this.Ua = []
                  }
                  Vg(a) {
                      if (OBR.F) {
                          if (this.De[a] || Tf(N.na(a))) {
                              const b = N.na(a);
                              b.RL = !0;
                              Rf(b);
                              this.De[a] = null;
                              cg(this, a)
                          }
                          return a
                      }
                  }
              };
              OBR.oc = OBR.oc || new ij;
              var jj = class {
                  constructor() {
                      this.LA = ".,-_' "
                  }
              };
              OBR.Vs = new jj;
              var kj = OBR.i.Bp + "loggerServices/dwce_cheq_events",
                  lj = class {
                      pd(a) {
                          a = Object.assign({
                              timestamp: +new Date,
                              sessionId: OBR.fraudDetection.rn,
                              url: OBR.fraudDetection.Gi,
                              cheqSource: 1
                          }, a);
                          OBR.ya.send(OBR.i.V.rc, kj, a)
                      }
                  },
                  ig = new lj;
              var mj = class {
                  constructor() {
                      this.timeout = !1;
                      this.zC = parseInt(OBR.g.U(OBR._jsc.C.br, 500));
                      this.Bm = () => {};
                      this.qs = null;
                      this.Am = !1
                  }
              };
              var pg = `https://tcheck.${OBR.i.pI}/tcheck/check`;
              var nj = class {
                  constructor() {
                      OBR.logger.log("FD Process started");
                      this.rn = rg();
                      this.zt = new OBR.Ub;
                      this.At = !1;
                      this.sg = 0;
                      this.nb = 100;
                      this.vh = null;
                      this.Fo = !1;
                      this.Gf = this.fq = this.Yd = null;
                      a: {
                          var a = document.querySelector(".OUTBRAIN");
                          if (a && (a = a.getAttribute("data-src"))) try {
                              var b = decodeURIComponent(a);
                              break a
                          } catch (c) {}
                          b = void 0
                      }
                      b = b || OBR.g.Wi("property", "og:url", "meta", "content") || OBR.g.Wi("rel", "canonical", "link", "href") || window.location.href;
                      a = document.createElement("a");
                      a.href = b;
                      this.Gi = a.hostname;
                      this.jj =
                          87158
                  }
              };
              OBR.fraudDetection || (OBR.fraudDetection = new nj, OBR.Wh = new mj, zg());
              var oj = a => {
                      if (a && (a = a.v())) {
                          var b = ["ob-dynamic-rec-container"].map(c => `.${c}`).join(",");
                          return [].slice.call(OBR.g.H(a).querySelectorAll(b))
                      }
                  },
                  pj = a => {
                      if (!a) return null;
                      const b = ".ob-rec-image-container .ob-rec-text .ob-rec-source .ob-rec-description .ob-grid-button-container .ob-rec-logo .ob-rec-date .ob-rec-author".split(" ").reduce((c, d) => a.querySelector(d) ? c + "1" : c + "0", "");
                      return b ? b : null
                  },
                  qj = a => {
                      if (a) return [a.v()]
                  };
              var rj = `${OBR.i.Bp}api/loggerBatch/log-viewability`,
                  sj = class {
                      constructor() {
                          this.startTime = Date.now();
                          this.Di = []
                      }
                      clearTimeout() {
                          this.Lh && (clearTimeout(this.Lh), this.Lh = null)
                      }
                      log(a, b) {
                          var c = +b.getAttribute("data-pos");
                          c = {
                              timeElapsed: Date.now() - this.startTime,
                              requestId: a.o("req_id", null),
                              position: c,
                              renderables: pj(b)
                          };
                          var d = OBR.g.H(b).querySelector(".ob-rec-image-container"),
                              e = OBR.g.H(b).querySelector(".ob-rec-image-container img");
                          d && (c.imageHeight = d.offsetHeight, c.imageWidth = d.offsetWidth);
                          e && (d = jd(e.src)) &&
                              (c.iu = d.iu);
                          if (e = b.querySelector("a.ob-dynamic-rec-link")) d = e.getAttribute("data-rec-en-did"), e = e.getAttribute("data-adv-id"), d && (c.recdid = d), e && (c.advid = e);
                          d = a.o("oo", null);
                          e = a.o("lsd", null);
                          const f = a.zd(!0);
                          d && (c.oo = d);
                          f && !d && e && (c.lsd = e);
                          try {
                              const k = OBR.g.H(b).querySelector(".ob-rec-text"),
                                  l = OBR.g.H(b).querySelector(".ob-rec-source"),
                                  q = OBR.g.H(b).querySelector(".ob-rec-description");
                              k && (c.titleLength = k.innerHTML.length);
                              l && (c.sourceLength = l.innerHTML.length);
                              q && (c.descLength = q.innerHTML.length)
                          } catch (k) {}
                          this.Di.push(c);
                          10 <= this.Di.length ? (this.clearTimeout(), this.hn()) : this.Lh || (this.Lh = setTimeout(this.hn.bind(this), 1200));
                          let g;
                          if (null == (g = a.Y()) ? 0 : g.ge()) this.clearTimeout(), this.hn();
                          a = a.B;
                          a.sy.Td();
                          a.Ia && !a.Ia.B.Li.viewability && a.Ia.B.Td || a.Td || (a.Td = !0, a.Ia && (a.Ia.B.Td = !0), ma.fire(Object.assign({}, a.Wa, pf("viewability"))))
                      }
                      hn() {
                          this.Lh = null;
                          if (this.Di.length) {
                              var a = this.Di.splice(0);
                              a && a.length ? OBR.i.Ok ? navigator.sendBeacon(rj, JSON.stringify(a)) : OBR.ya.mx({
                                  url: rj,
                                  data: a,
                                  method: OBR.i.V.sr,
                                  hy: !0
                              }) : OBR.error(Error("Failed to send viewability data"))
                          }
                      }
                  };
              var tj = {
                      Gm: !1
                  },
                  uj = class {
                      constructor() {
                          this.PL = new sj;
                          this.Vb = this.Vb.bind(this);
                          this.yo = this.yo.bind(this);
                          this.Fc = this.Fc.bind(this);
                          this.cF = oj;
                          this.Tg = qj;
                          this.Ua = []
                      }
                      yo(a) {
                          return a.l("listingsViewability", !0)
                      }
                      Vb(a, b) {
                          if (this.yo(a)) {
                              var c = Object.assign({}, tj);
                              b && Object.assign(c, b);
                              a.my = c;
                              c.lh || (b = a.my.Gm ? this.Tg(a) : this.cF(a)) && 0 < b.length && this.Fc(a, b)
                          }
                      }
                      observe(a, b) {
                          a = new OBR.IntersectionObserver({
                              threshold: [.5],
                              unobserve: !0,
                              intersectPercentage: .5,
                              callback: (c, d, e, f) => this.po(c, d, f),
                              callbackParams: [a,
                                  b
                              ],
                              element: b,
                              checkAbsoluteVisibility: !0
                          });
                          this.Ua.push(a);
                          a.observe();
                          return a
                      }
                      Fc(a, b) {
                          return b.map(c => this.observe(a, c))
                      }
                      po(a, b, c) {
                          setTimeout(() => {
                              if (OBR.ca.bh(b, 50)) {
                                  this.PL.log(a, b);
                                  this.ha([c]);
                                  const d = a.my;
                                  d.ek && d.ek(a, b, c)
                              } else this.observe(a, b)
                          }, 1E3)
                      }
                      ha(a) {
                          const b = a || this.Ua;
                          b.forEach(c => c.unobserve());
                          this.Ua = this.Ua.filter(c => -1 === b.indexOf(c))
                      }
                  };
              OBR.Ha || (OBR.Ha = new uj);
              var vj = class {
                  constructor(a) {
                      this.j = a;
                      a = this.j.l("exploreMoreWidgetId", null);
                      const b = document.createElement("div"),
                          c = this.j.l("exploreMoreLogoUrl", !1),
                          d = this.j.l("bgColorLogo", "#fff"),
                          e = this.j.l("exploreMoreLogoWidth", "88.5px"),
                          f = this.j.l("exploreMoreLogoLeftPosition", "0"),
                          g = this.j.l("exploreMoreAdviseBubbleText", null),
                          k = this.j.l("exploreMoreAdviseBubbleFontSize", "13px"),
                          l = this.j.l("exploreMoreAdviseBubbleFontFamily", "inherit"),
                          q = this.j.l("exploreMoreAdviseBubbleFontColor", "#fff"),
                          h = this.j.l("exploreMoreAdviseBubbleBackgroundColor",
                              "#151e41"),
                          m = this.j.l("exploreMoreOverrideBackAction", !1),
                          p = this.j.l("exploreMoreOverlayDvhIos", !1),
                          r = this.j.Zc(),
                          t = !OBR.i.M && this.j.l("exploreMoreTriggerByMouse", !1),
                          u = {
                              dt: this.j.pb(),
                              ft: this.j.Bc(),
                              gd: this.j.yd(),
                              sj: this.j.bc(),
                              rj: this.j.ac(),
                              ii: this.j.$b(),
                              ze: this.j.ob(),
                              Xd: this.j.yc(),
                              Fs: this.j.zc(),
                              ms: this.j.xc(),
                              yw: this.j.Ac()
                          },
                          v = this.j.l("exploreMoreMuteAudios", !1),
                          w = this.j.l("exploreMoreHistoryStateInterval", 200),
                          A = this.j.l("exploreMoreNativeHeader", !1),
                          D = this.j.l("exploreMoreNativeHeaderHeight",
                              null),
                          E = this.j.l("nativeHeaderElementSelector", null),
                          J = this.j.l("exploreMoreHash", !0),
                          I = this.j.l("exploreMoreSafariInteractionWait", !0);
                      this.options = {
                          da: a,
                          I: b,
                          Ov: c,
                          wB: d,
                          nD: e,
                          mD: f,
                          rd: {
                              text: g,
                              color: q,
                              fontSize: k,
                              fontFamily: l,
                              bgColor: h
                          },
                          isRTL: r,
                          Ba: u,
                          hk: m,
                          Vv: v,
                          EL: p,
                          Bj: t,
                          Uc: w,
                          $v: null,
                          Cj: A,
                          PH: D,
                          qp: E,
                          tF: J,
                          EJ: I
                      };
                      this.Ru = !1;
                      this.Fg = this.Uc = null
                  }
                  collapse() {
                      Ag(this);
                      const a = Lg(this);
                      a && a.removeEventListener("click", this.Pr);
                      history.back()
                  }
                  sc() {
                      Tg(this);
                      return this
                  }
                  ji(a = !1) {
                      if (!Rg(this)) return this;
                      if (!a && "complete" !==
                          document.readyState) {
                          document.addEventListener("readystatechange", this.ji.bind(this));
                          if (this.Fg) return this;
                          this.Fg = setTimeout(() => {
                              this.Fg && this.ji(!0)
                          }, 3E4);
                          return this
                      }!a && document.removeEventListener("readystatechange", this.ji.bind(this));
                      clearTimeout(this.Fg);
                      this.Fg = null;
                      setTimeout(() => {
                          window.location.hash = Math.random().toString(36).slice(2);
                          Sg(this);
                          this.sc();
                          this.j.tb(O.Za.R.Fy)
                      }, 0);
                      return this
                  }
                  Pr(a) {
                      a.preventDefault()
                  }
              };
              OBR.ct = OBR.ct || function() {
                  let a;
                  const b = c => {
                      OBR.logger.log(`[ExploreMore] ${c}`)
                  };
                  b("loaded");
                  return c => {
                      if (!a) {
                          a = new vj(c);
                          var d = () => Qg(Pg(Ug(Sg(a).sc()))),
                              e = () => Qg(Pg(a)).ji();
                          if (window.history.state && 1 === history.state.obem) {
                              c.tb(O.Za.R.My);
                              if (document.querySelector(".ob-explore-more")) return;
                              history.replaceState(null, "")
                          }
                          if (a.options.Bj && "complete" !== document.readyState) {
                              const k = () => {
                                  "complete" === document.readyState && (document.removeEventListener("readystatechange", k), d())
                              };
                              document.addEventListener("readystatechange",
                                  k)
                          } else Rg(a) ? (c.tb(O.Za.R.fz), e()) : (c.tb(O.Za.R.dz), d());
                          var f = () => {
                                  let k, l, q, h;
                                  const m = null == (k = performance) ? void 0 : null == (l = k.getEntriesByType("navigation")) ? void 0 : null == (q = l.at(0)) ? void 0 : null == (h = q.domComplete) ? void 0 : h.toFixed(0);
                                  m && c.tb(O.Za.R.Ry, {
                                      time: m
                                  })
                              },
                              g = () => {
                                  "complete" === document.readyState ? (b("dom ready"), a.Uc && clearInterval(a.Uc), f(), document.removeEventListener("readystatechange", g)) : b("dom not ready yet")
                              };
                          "complete" === document.readyState ? (b("dom ready"), f(), a.Uc && clearInterval(a.Uc)) :
                              (c.tb(O.Za.R.Sy), document.addEventListener("readystatechange", g));
                          (() => new Promise((k, l) => {
                              if (c.l("exploreMoreBiEvents", !1) && navigator.userActivation) {
                                  var q = setInterval(() => {
                                      navigator.userActivation.hasBeenActive && (clearInterval(q), k())
                                  }, 500);
                                  setTimeout(() => {
                                      clearInterval(q);
                                      l()
                                  }, 3E4)
                              } else l()
                          }))().then(() => {
                              navigator.userActivation.hasBeenActive && c.tb(O.Za.R.bA)
                          }).catch(() => {})
                      }
                  }
              }();
              var eh = {
                      onWidgetViewd: 0,
                      onRecViewd: 1,
                      onRec50Viewed: 2,
                      reelMRC50: 3
                  },
                  wj = class {
                      constructor() {
                          this.Ua = [];
                          this.Tn = this.Tn.bind(this);
                          this.Rn = this.Rn.bind(this)
                      }
                      Tn(a) {
                          const b = a.ba("eventTrackers"),
                              c = this.Tg(a);
                          if (b && c) {
                              c.setAttribute("data-ob-trackers", !0);
                              const d = OBR.g.createElement("div");
                              d.classList.add("ob-pixels");
                              OBR.g.H(c).querySelector(".ob-pixels") || c.appendChild(d);
                              for (let e in b) Yg(this, a, c, e, b[e])
                          }
                      }
                      Rn(a) {
                          let b = [];
                          if (a && a.doc) return b = a.doc.map(c => {
                              var d = c.pixels,
                                  e = c.eventTrackers ? c.eventTrackers.filter(f =>
                                      1 === f.event) : [];
                              d && d.length && (OBR.g.FD(d), delete c.pixels);
                              e && e.length && (d = e.filter(f => 2 == f.method), e = e.filter(f => 1 == f.method), Zg(e), $g(d), c.eventTrackers = c.eventTrackers ? c.eventTrackers.filter(f => 1 !== f.event) : []);
                              return c
                          })
                      }
                      Ni(a, b, c) {
                          if (c && c.length) {
                              var d = this.Tg(a),
                                  e = a.l("fireImpressionPixelsOutsideIframe", !1),
                                  f = c.filter(g => 2 == g.method);
                              c = c.filter(g => 1 == g.method);
                              ch(d, c, e);
                              dh(d, b, f, a)
                          }
                      }
                      observe(a, b, c, d, e) {
                          a = new OBR.IntersectionObserver({
                              threshold: {
                                  [3]: 1,
                                  [2]: .5,
                                  [4]: 0,
                                  "default": 1
                              } [d],
                              unobserve: !0,
                              callback: this.po.bind(this),
                              callbackParams: [a, b, c, d, e],
                              element: b,
                              checkAbsoluteVisibility: !0
                          });
                          this.Ua.push(a);
                          a.observe()
                      }
                      Tg(a) {
                          if (a) return a.v()
                      }
                      po(a, b, c, d, e) {
                          if (4 === d) this.Ni(a, c, e);
                          else {
                              var f = 2 === d ? 50 : 100;
                              setTimeout(() => {
                                  OBR.ca.bh(b, f) ? this.Ni(a, c, e) : this.observe(a, b, c, d, e)
                              }, 1E3)
                          }
                      }
                      ha() {
                          this.Ua.forEach(a => {
                              a && a.unobserve && a.unobserve()
                          });
                          this.Ua = []
                      }
                  };
              OBR.Dg || (OBR.Dg = new wj);
              var xj = class {
                      constructor() {
                          this.Nq = OBR._jsc.Mf();
                          this.LG = OBR.i.Wj
                      }
                      sm(a, b) {
                          if (a && a.v()) {
                              var c = a.v();
                              var d = OBR.g.H(c).querySelectorAll(".ob-lazy-bgimg");
                              c = OBR.g.H(c).querySelectorAll("img.ob-lazy-img").length || d.length
                          } else c = !1;
                          if (c && !a.qu && a.v())
                              if (b = b || {}, b = {
                                      rootMargin: `${a.l("imagesLazyLoadMargin",500)}px`,
                                      j: a,
                                      Ka: a.v(),
                                      mode: b.Gv || 0
                                  }, this.LG) gh(this, b, ".ob-lazy-bgimg"), hh(this, b);
                              else {
                                  if (b && b.Ka) {
                                      c = Ab(b.Ka);
                                      var e = b.rootMargin;
                                      d = this.Nq;
                                      const f = Object.assign({}, c);
                                      e = parseInt(e);
                                      0 > c.y ? f.height += e :
                                          c.y > d.height && (f.y -= e);
                                      c = f;
                                      d = this.Nq;
                                      c = 0 < (Math.min(c.width + c.x, d.width + d.x) - Math.max(c.x, d.x)) * (Math.min(c.height + c.y, d.height + d.y) - Math.max(c.y, d.y))
                                  } else c = !1;
                                  c || a.Yc() ? this.Nr(b) : gh(this, b)
                              }
                      }
                      Nr(a, b, c = ".ob-lazy-bgimg, .ob-lazy-img") {
                          const d = a.j.v();
                          a.Ka && a.Ka === d && (b && 0 === a.mode ? (this.hm(b), 0 === OBR.g.H(a.Ka).querySelectorAll(c).length && (a.j.qu = !0)) : ([].slice.call(OBR.g.H(a.Ka).querySelectorAll(c)).forEach(this.hm), a.j.qu = !0))
                      }
                      hm(a) {
                          if ("IMG" === a.tagName.toUpperCase()) {
                              const b = a.getAttribute("data-ob-src");
                              b && (a.setAttribute("src", b), a.removeAttribute("data-ob-src"), OBR.g.Ea(a, "ob-lazy-img"))
                          } else OBR.g.Ea(a, "ob-lazy-bgimg")
                      }
                  },
                  yj = new xj;
              OBR.tl = OBR.tl || {
                  jg: (a, b) => {
                      if (!b) {
                          b = {
                              Gv: 0
                          };
                          const c = RegExp("swipe-strip|touch-strip|carousel|timeline");
                          a.l("recMode", "").match(c) && (b.Gv = 1)
                      }
                      yj.sm(a, b)
                  }
              };
              var zj = a => {
                  if (a) {
                      var b = !1,
                          c = NaN,
                          d = NaN,
                          e = !1,
                          f = OBR.g.H(a).querySelectorAll("a");
                      f && 0 !== f.length && (f.forEach(g => {
                              g.addEventListener("click", k => {
                                  if (e) return k.preventDefault(), !1
                              })
                          }), a.addEventListener("mousedown", g => {
                              b = !0;
                              c = g.clientX;
                              d = a.scrollLeft;
                              e = !1;
                              a && (a.style.cursor = "grabbing", a.classList.add("ob-grabbing"))
                          }), f = () => {
                              b && (b = !1, a && (a.style.cursor = "", a.classList.remove("ob-grabbing")), a.scrollLeft = a.scrollLeft, e = a.scrollLeft !== d)
                          }, a.addEventListener("mouseup", f), a.addEventListener("mouseleave", f),
                          a.addEventListener("mousemove", g => {
                              b && (a.scrollLeft = d + (c - g.clientX))
                          }), OBR.g.ia("\n  .ob-grabbing {\n    scroll-behavior: auto !important;\n  }\n  .ob-grabbing a {\n    cursor: grabbing !important;\n    scroll-snap-align: none !important;\n  }\n  .ob-grabbing > * {\n    scroll-snap-align: none !important;\n  }\n  .ob-grabbing img {\n    -webkit-user-drag: none;\n    -khtml-user-drag: none;\n    -moz-user-drag: none;\n    -o-user-drag: none;\n    user-drag: none;\n  }\n  "))
                  }
              };
              OBR.Tv = OBR.Tv || zj;
              OBR.proxy = OBR.proxy || {
                  BH: function(a, b, c) {
                      OBR.s.N(b, c, this, {
                          currentWidget: a,
                          beforeLoadTime: (new Date).getTime()
                      })
                  }
              };
              window.OB_PROXY = window.OB_PROXY || {
                  getSet: function(a, b, c) {
                      return a.l(b, c)
                  },
                  getRequest: function(a, b, c) {
                      return a.o(b, c)
                  },
                  getWidgetId: function(a) {
                      return a.D()
                  },
                  makeHandshake: function(a) {
                      OBR.s.S(a)
                  },
                  hasJqueryInstalled: function() {
                      return OBR.g.lu()
                  },
                  getWidgetIndex: function(a) {
                      return a.G()
                  },
                  getMeta: function(a, b, c) {
                      return a.ba(b, c)
                  },
                  getFeedParentWidget: function(a) {
                      return a.Y()
                  },
                  getFeedFatherAB: function(a) {
                      return a.wd()
                  },
                  getFeedLayerAB: function(a) {
                      return a.Bn()
                  },
                  isFeedCard: function(a) {
                      return a.sG()
                  },
                  getUserId: function(a) {
                      return a.ob()
                  },
                  getDataSrcFinalUrl: function(a) {
                      var b = a.Y();
                      const c = a.xc() || (null == b ? void 0 : b.xc()),
                          d = a.zc() || (null == b ? void 0 : b.zc());
                      b = a.Ac() || (null == b ? void 0 : b.Ac());
                      return c ? c : b ? b : d ? d : a.Ja()
                  },
                  getAdBlockerStatus: function() {
                      return OBR.kb.uj()
                  },
                  getExtId: function(a) {
                      let b = "";
                      const c = OBR.g.Pf(OBR.i.Zm);
                      a = OBR.g.Pf(a.pb());
                      if (c || a) b = a || c;
                      return b
                  },
                  getExtId2: function(a) {
                      [, a] = ke(a);
                      return a
                  },
                  setConsentData: function(a, b) {
                      if (a && "string" === typeof a) {
                          var c = OBR.ga;
                          c.Cb = b;
                          a = OBR.g.oa(a);
                          switch (b) {
                              case 2:
                                  c.mb = a;
                                  OBR.g.Fa(OBR._jsc.C.qc,
                                      c.mb);
                                  break;
                              case "ccpa":
                                  c.Xb = a, OBR.g.Fa(OBR._jsc.C.Vh, c.Xb)
                          }
                      }
                  },
                  getWidgets: function() {
                      return OBR.F
                  },
                  getWidgetByIdx: function(a) {
                      return OBR.F[a]
                  },
                  getIsWidgetRendered: function(a) {
                      return a.ic()
                  },
                  generateOdbCall: function(a) {
                      return OBR.wa.Dt(OBR.F[a])
                  },
                  getRawResponse: a => a.dj(),
                  getExtraParams: function(a) {
                      return OBR.i.eb ? OBR.i.jc.extraParams : a.vd()
                  },
                  getCardIdx: function(a) {
                      return a.Ti()
                  },
                  getPermalinkFieldName: function(a) {
                      a = a.Y() || a;
                      return a.xc() ? "bundleUrl" : a.Ac() ? "portalUrl" : a.zc() ? "contentUrl" : "permalink"
                  },
                  getInstallationKey: function(a) {
                      return (a.Y() || a).ac()
                  },
                  getContainer: function(a) {
                      return a.v()
                  },
                  getPubImpId: a => {
                      if (a) {
                          var b = OBR.g.Yk(a.yd() || OBR.i.gd);
                          !b && a.Y() && (b = OBR.g.Yk(a.Y().yd() || OBR.i.gd));
                          return b
                      }
                  },
                  isAppBridge: () => OBR.i.eb,
                  run: () => {
                      OBR.controller.continue()
                  }
              };
              OBR.extern = OBR.extern || function() {
                  var a = OBR,
                      b = {
                          getStat: function() {},
                          showDescription: function(c, d) {
                              a.s.N(OBR.s.u.El, function() {
                                  OBR.vw.AH(c, d)
                              }, this)
                          },
                          returnedHtmlData: function(c, d) {
                              a.controller.tf(c, d)
                          },
                          returnedHtmlAndVacData: function(c, d) {
                              a.controller.tf(c, d)
                          },
                          returnedJsonData: function(c, d) {
                              a.controller.lw(c, d)
                          },
                          returnedError: function(c) {
                              OBR.logger.log("Call made using extern class");
                              a.logger.log("Callback error" + c)
                          },
                          callRecs: function(c, d, e) {
                              OBR.logger.log("Call made using extern class");
                              a.controller.gp(c,
                                  f => {
                                      try {
                                          d(f)
                                      } catch (g) {
                                          OBR.logger.log(g);
                                          try {
                                              e && "function" === typeof e && e(g)
                                          } catch (k) {
                                              OBR.logger.log(k)
                                          }
                                      }
                                  })
                          },
                          callClick: function(c, d) {
                              OBR.logger.log("Call made using extern class");
                              a.controller.nf(c, d)
                          },
                          callWhatIs: function(c, d, e) {
                              OBR.s.N(OBR.s.u.ci, function() {
                                  OBR.Oq.rs(c, d, e)
                              }, this);
                              return !1
                          },
                          callUserZapping: function(c, d, e, f, g) {
                              OBR.s.N(OBR.s.u.Cr, function() {
                                  OBR.IL.TM(c, d, e, f, g)
                              }, this);
                              return !1
                          },
                          zappingFormAction: function(c, d, e, f, g) {
                              OBR.IL.sO(c, d, e, f, g);
                              return !1
                          },
                          userZappingMessage: function(c) {
                              OBR.logger.log(c.message)
                          },
                          recClicked: function(c, d) {
                              OBR.logger.log("Call made using extern class");
                              a.controller.Lw(d)
                          },
                          imageError: function(c) {
                              OBR.logger.log("Call made using extern class");
                              OBR.error({
                                  name: "obm-ImageError",
                                  message: "Error loading as image: " + c.src
                              });
                              a.g.xs(c)
                          },
                          carouselLogoError: function(c, d) {
                              OBR.logger.log("Call made using extern class");
                              a.controller.TA(c, d)
                          },
                          logError: function(c, d, e, f) {
                              a.g.ie(c, d, e, f)
                          },
                          openNativeVideoPlayer: function(c, d, e, f, g, k, l, q, h, m, p, r, t, u, v, w, A) {
                              a.s.N(a.s.u.Xf, function() {
                                  A = A ? A : a.F[r].o("req_id",
                                      null);
                                  var D = a.F[r].o("lang", "en"),
                                      E = a.F[r].o("lsd", null),
                                      J = a.F[r].o("pid", null),
                                      I = a.F[r].o("sid", null),
                                      V = a.F[r].o("wnid", null),
                                      P = a.F[r].o("gl", ""),
                                      R = a.F[r].Sg(),
                                      W = a.F[r].o("widgetJsId", a.F[r].D()),
                                      Z = a.F[r].o("req_id", "-1"),
                                      ca = a.F[r].o("pvId", "-1");
                                  window.NVPInjector.main.init(a.g.KL([c, d, e, f, g, k, l, q, h, m, p, r, t, u, A, a.i.nk, D, E, J, I, V, v, P, R, W, Z, ca]), a.F[r].Rg(), w)
                              }, this);
                              return !1
                          },
                          openOverlay: function(c) {
                              a.s.N(a.s.u.Xf, function() {
                                  var d = c.getAttribute("data-nvp");
                                  if (null !== d && "string" === typeof d) {
                                      d = window.JSON.parse(c.getAttribute("data-nvp").replace(/"/g,
                                          "#$#").replace(/'/g, '"').replace(/\\"/g, "'").replace("#$#", '\\"'));
                                      var e = a.F[d.widgetIdx];
                                      d.platform = a.i.nk;
                                      d.lang = e.o("lang", "en");
                                      d.uuid = e.o("lsd", null);
                                      d.publisherId = e.o("pid", null);
                                      d.sourceId = e.o("sid", null);
                                      d.widgetNumberId = e.o("wnid", null);
                                      d.location = e.o("gl", "");
                                      d.timestamp = e.Sg();
                                      window.NVPInjector.main.recClicked(d, e.Rg())
                                  } else a.error({
                                      name: "obm-nvpError",
                                      message: "Error parsing data-nvp: " + d,
                                      stack: "None"
                                  })
                              }, this);
                              return !1
                          },
                          handshakeNVP: function() {
                              a.s.S(OBR.s.u.Xf)
                          },
                          onVideoClick: function(c,
                              d) {
                              a.controller.mw(c, d)
                          },
                          manualVideoClicked: function(c, d, e, f, g) {
                              a.controller.Qv(c, d, e, f, g)
                          },
                          errorInjectionHandler: function(c) {
                              OBR.F[c].eN(c)
                          },
                          reloadWidget: function() {
                              OBR.logger.log("## Reload widget");
                              a.controller.rk()
                          },
                          researchWidget: function() {
                              OBR.logger.log("## Research widget");
                              a.controller.te()
                          },
                          renderSpaWidgets: function(c) {
                              OBR.logger.log("## renderSpaWidgets - SPA has triggered a widget render");
                              OBR.i.Eh && OBR.i.Eh.YC !== c ? (OBR.logger.log("## renderSpaWidgets - page navigation detected. triggering reload"),
                                  a.controller.rk()) : (OBR.logger.log(`## renderSpaWidgets - ${OBR.i.Eh?"still on same page":"first widget mounting detected"}. researching for new widgets on page`), a.controller.te());
                              OBR.i.Eh = OBR.i.Eh || {};
                              OBR.i.Eh.YC = c
                          },
                          registerOnWidgetRendered: function(c) {
                              OBR.controller.nJ(c)
                          },
                          cancelRecommendation: function(c) {
                              OBR.logger.log("cancel recommendation with bocr " + c);
                              a.controller.HB(c)
                          },
                          cancelRecs: function(c, d, e) {
                              OBR.logger.log("cancel recommendation by doc url " + c + " publisher id = " + d + " isAd = " + e);
                              a.controller.IB(c,
                                  d, e)
                          },
                          refreshWidget: function(c) {
                              OBR.logger.log("## Refresh widget");
                              a.controller.Bf(c)
                          },
                          triggerLazyRender: function(c) {
                              OBR.logger.log("## trigger lazy render");
                              c || 0 === c ? OBR.controller.gn(`widgetLazyRender_${c}`) : a.F.forEach(d => {
                                  d.Qo() && OBR.controller.gn(`widgetLazyRender_${d.G()}`)
                              })
                          },
                          setABtest: function(c) {
                              c && (a.i.Tr = "&obAbtest=" + c)
                          },
                          refreshSpecificWidget: function(c, d) {
                              OBR.logger.log("## Refresh SPECIFIC widget");
                              "string" !== typeof d ? a.s.N(a.s.u.Jl, function() {
                                  OBR.controller.Sw(c, d)
                              }, this) : OBR.controller.Sw(c,
                                  d)
                          },
                          refreshSpecificWidgetWithData: function(c, d, e, f) {
                              OBR.logger.log("## Refresh SPECIFIC widget with server response");
                              OBR.controller.gJ(c, d, e, f)
                          },
                          getCountOfRecs: function(c) {
                              return a.controller.ZD(c)
                          },
                          onOdbReturn: function(c, d) {
                              a.controller.hJ(c, d)
                          },
                          closeCard: function() {
                              a.Oi.HC()
                          },
                          closeModal: function() {
                              try {
                                  a.modal.hideModal()
                              } catch (c) {
                                  OBR.error(c)
                              }
                          },
                          handshakeModule: function(c) {
                              try {
                                  var d = OBR.s.St(c);
                                  d ? OBR.s.S(d) : a.error({
                                      name: "obm-MakeHandShakeError",
                                      message: "Error in module: " + c + ", Err: Module not found",
                                      stack: "None"
                                  })
                              } catch (e) {
                                  OBR.error(e)
                              }
                          },
                          initGnrModule: (c, d) => {
                              Oc(c, d)
                          },
                          gnrLazyLoadedModules: {
                              modules: {},
                              makeHandshake: (c, d, e) => {
                                  const f = Object.keys(OBR.s.u).filter(g => g.includes(c)).find(g => g.includes(d));
                                  b.gnrLazyLoadedModules.modules[c] || (b.gnrLazyLoadedModules.modules[c] = {});
                                  b.gnrLazyLoadedModules.modules[c][d] = b.gnrLazyLoadedModules.modules[c][d] || e;
                                  b.handshakeModule(f)
                              }
                          },
                          callLoadMore: function(c, d) {
                              OBR.s.N(OBR.s.u.Zh, function() {
                                  OBR.Yo.$g(c, d)
                              }, this)
                          },
                          enableTbx: function() {
                              OBR.Rd ? OBR.Rd.Au() : OBR.i.qw = !0
                          },
                          closeTbx: function() {
                              OBR.Rd.JC()
                          },
                          scrollIntoView: function() {
                              bg()
                          },
                          ampIntersectionChange: function(c) {
                              OBR.ca.qm = c
                          },
                          ampUpdateViewportSize: function() {
                              OBR._jsc.Jf(OBR.ca)
                          },
                          video: {}
                      };
                  b.video.getVideoRecs = function(c, d, e, f, g, k, l) {
                      OBR.s.N(OBR.s.u.Sl, function() {
                          OBR.video.YE(c, d, e, f, g, k, l)
                      }, this)
                  };
                  b.video.videoClicked = function(c) {
                      OBR.video.LL(c)
                  };
                  b.video.event = function(c, d) {
                      a.controller.yp(c, d)
                  };
                  b.blockFeedExpansion = (c = 0, d = "") => {
                      OBR.i.js = {
                          feedIdx: +c,
                          observeElementSelector: d
                      }
                  };
                  b.recReasons = {};
                  b.recReasons.backFromScopedWidget =
                      function(c) {
                          return a.controller.uB(c)
                      };
                  b.truncateText = function(c, d, e) {
                      fg(OBR.Vs, c, d, e)
                  };
                  b.reloadPager = function(c, d = !1) {
                      (c = OBR.F[c]) && OBR.controller.sw(c, d)
                  };
                  b.triggerClickPixels = function(c, d, e) {
                      a.controller.$x(c, d, e)
                  };
                  b.mraidOpen = (c, d) => {
                      a.controller.vL(c, d)
                  };
                  b.customClickHandler = (c, d, e, f) => {
                      a.controller.ay(c, d, e, f)
                  };
                  b.onCheqResponse = c => {
                      a.Wh.Bm(c)
                  };
                  b.callViewed = c => {
                      try {
                          OBR.controller.GB(c)
                      } catch (d) {}
                  };
                  b.feed = {};
                  b.feed.loadNextChunk = c => Ui && Ui.Ei(c);
                  b.renderJSFormatWidget = (c, d, e) => {
                      OBR.controller.vJ(c,
                          d, e)
                  };
                  b.renderJSFormatChunk = c => {
                      OBR.controller.tk(c)
                  };
                  b.clipError = c => {
                      var d = c ? c.error : null;
                      let e = "",
                          f = "";
                      d && (e = d.code, f = e.message);
                      d = `Error loading as video: ${c.src}`;
                      OBR.error({
                          name: "obm-ClipError",
                          message: d + (e ? `; Error code: ${e}` : "") + (f ? `; ErrorMessage: ${f}` : ""),
                          errorEleUrl: c.src
                      })
                  };
                  b.reserveVideoIdx = () => {
                      0 === OBR.i.ke && (OBR.i.ke = 100);
                      return ++OBR.i.ke
                  };
                  return b
              }();
              "undefined" !== typeof window.OBBridge && (OBR.clickHandler = {
                  open: (a, b, c) => window.OBBridge.clickHandler.open(a, b, c)
              }, OBR.viewHandler = {
                  loadMore: a => window.OBBridge.viewHandler.loadMore(a),
                  setViewData: a => {
                      OBR.ca.Xj = a;
                      a = new CustomEvent("obBridgeExposureChanged", {
                          detail: a
                      });
                      window.dispatchEvent(a)
                  }
              });
              window.outbrain = window.outbrain || {};
              window.outbrain.returnedHtmlData = function(a, b) {
                  OBR.controller.tf(a, b)
              };
              window.outbrain.returnedJsonData = function(a, b) {
                  OBR.controller.lw(a, b)
              };
              window.outbrain.returnedError = function(a) {
                  OBR.logger.log("Callback error" + a)
              };
              window.outbrain.callRecs = function(a, b) {
                  OBR.controller.gp(a, b)
              };
              window.outbrain.callClick = function(a, b) {
                  OBR.controller.nf(a, b)
              };
              window.outbrain.callWhatIs = function(a, b, c) {
                  OBR.s.N(OBR.s.u.ci, function() {
                      OBR.Oq.rs(a, b, c)
                  }, this)
              };
              window.outbrain.callLoadMore = function(a, b) {
                  OBR.s.N(OBR.s.u.Zh, function() {
                      OBR.Yo.$g(a, b)
                  }, this)
              };
              window.outbrain.recClicked = function(a, b) {
                  OBR.controller.Lw(b)
              };
              window.outbrain.imageError = function(a) {
                  OBR.g.xs(a)
              };
              window.outbrain.closeModal = function() {
                  try {
                      OBR.modal.hideModal()
                  } catch (a) {
                      OBR.error(a)
                  }
              };
              window.outbrain_rater = window.outbrain_rater || {};
              window.outbrain_rater.returnedHtmlData = function(a, b) {
                  OBR.controller.tf(a, b)
              };
              window.outbrain_rater.returnedCancelOdbData = function(a) {
                  OBR.controller.CJ(a)
              };
              !0 === OBR.i.Tu && (OBR.logger.log("Widget Start!"), OBR.i.Tu = !1, "boolean" === typeof window.OB_PASSIVE_MODE && !0 === window.OB_PASSIVE_MODE ? OBR.logger.log("passive") : OBR.controller.bx(), OBR.ready = !0, OBR.Nn.DD(), ma.fire(Object.assign({}, pf("ready"))));;
          }).call(window);
      };
      if (!OBR || !OBR.settings) {
          ccs();
          return;
      };
      var dwt = OBR.settings.delayWidgetTime;
      var dwi = OBR.settings.delayWidgetInterval;
      var dwot = OBR.settings.delayWidgetObjectTrigger;
      if (!dwi || !dwi || !dwot) {
          ccs();
          return;
      };
      OBR.widgetDelayInterval = 0;
      if (window[dwot]) {
          ccs();
          return;
      };
      var tt = dwt * dwi;
      var t = 0;
      var doneFn = function(id) {
          clearInterval(id);
          ccs();
      };
      var i = setInterval(function() {
          OBR.widgetDelayInterval += 1;
          t = t + dwt;
          if (t >= tt) {
              doneFn(i);
              return;
          };
          if (window[dwot]) {
              doneFn(i);
              return;
          };
      }, dwt);
  } catch (e) {
      window.OBR.error(e);
  }
})();