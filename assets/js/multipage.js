'use strict';
let multipageMap = JSON.parse(`{"index":["ecma-logo","sec-intro"],"scope":["sec-scope"],"conformance":["sec-conformance"],"normative-references":["sec-normative-references"],"json-text":["sec-json-text","table-structural-tokens","table-literal-tokens"],"json-values":["sec-json-values","figure-value","prod-JSONValue","_ref_0","_ref_1","_ref_2","_ref_3"],"objects":["sec-objects","figure-object","prod-JSONObject","_ref_4","prod-JSONMemberList","_ref_5","_ref_6","_ref_7","prod-JSONMember","_ref_8","_ref_9"],"arrays":["sec-arrays","figure-array","prod-JSONArray","_ref_10","prod-JSONElementList","_ref_11","_ref_12","_ref_13"],"numbers":["sec-numbers","figure-number","prod-JSONNumber","_ref_14","_ref_15","_ref_16","prod-JSONInteger","_ref_17","_ref_18","prod-JSONFraction","_ref_19","prod-JSONExponent","_ref_20","_ref_21","_ref_22","prod-JSONExponentIndicator","prod-JSONSign","prod-JSONDigits","_ref_23","_ref_24","_ref_25","prod-JSONDigit","prod-NonZeroDigit"],"strings":["sec-strings","table-escape-sequences","figure-string","prod-JSONString","_ref_26","prod-JSONStringCharacters","_ref_27","_ref_28","prod-JSONStringCharacter","_ref_29","_ref_30","prod-JSONEscapeSequence","_ref_31","_ref_32","_ref_33","_ref_34","_ref_35","prod-JSONEscapeCharacter","prod-JSONHexDigit","prod-JSONSourceCharacter"],"bibliography":["sec-bibliography"],"copyright-and-software-license":["sec-copyright-and-software-license","copyright-notice"]}`);
'use strict';
let idToSection = Object.create(null);
for (let [section, ids] of Object.entries(multipageMap)) {
  for (let id of ids) {
    if (!idToSection[id]) {
      idToSection[id] = section;
    }
  }
}
if (location.hash) {
  let targetSec = idToSection[location.hash.substring(1)];
  if (targetSec != null) {
    let match = location.pathname.match(/([^/]+)\.html?$/);
    if ((match != null && match[1] !== targetSec) || location.pathname.endsWith('/multipage/')) {
      window.navigating = true;
      location = (targetSec === 'index' ? './' : targetSec + '.html') + location.hash;
    }
  }
}

