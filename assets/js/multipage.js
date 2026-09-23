'use strict';
let multipageMap = JSON.parse(`{"index":["ecma-logo","sec-intro","_ref_2","_ref_3","_ref_4","_ref_5","_ref_6"],"scope":["sec-scope","_ref_7"],"conformance":["sec-conformance","_ref_8"],"normative-references":["sec-normative-references","iso-iec-10646","unicode","rfc-8259","_ref_9","_ref_10"],"json-text":["sec-json-text","_ref_11","_ref_19","_ref_12","_ref_0","_ref_1","_ref_13","structural-token","table-structural-tokens","literal-name-token","table-literal-tokens","_ref_20","_ref_21","_ref_22","_ref_14","_ref_15","_ref_23","_ref_24","_ref_25","_ref_26","_ref_27","_ref_28","_ref_29","prod-JSONText","_ref_30","_ref_31","_ref_32","prod-JSONWhiteSpace","_ref_33","_ref_34","prod-JSONWhiteSpaceChar"],"json-values":["sec-json-values","figure-value","prod-JSONValue","_ref_35","_ref_36","_ref_37","_ref_38"],"objects":["sec-objects","figure-object","prod-JSONObject","_ref_39","prod-JSONMemberList","_ref_40","_ref_41","_ref_42","prod-JSONMember","_ref_43","_ref_44"],"arrays":["sec-arrays","figure-array","prod-JSONArray","_ref_45","prod-JSONElementList","_ref_46","_ref_47","_ref_48"],"numbers":["sec-numbers","figure-number","prod-JSONNumber","_ref_49","_ref_50","_ref_51","prod-JSONInteger","_ref_52","_ref_53","prod-JSONFraction","_ref_54","prod-JSONExponent","_ref_55","_ref_56","_ref_57","prod-JSONExponentIndicator","prod-JSONSign","prod-JSONDigits","_ref_58","_ref_59","_ref_60","prod-JSONDigit","prod-NonZeroDigit"],"strings":["sec-strings","_ref_16","table-escape-sequences","_ref_17","_ref_18","figure-string","prod-JSONString","_ref_61","prod-JSONStringCharacters","_ref_62","_ref_63","prod-JSONStringCharacter","_ref_64","_ref_65","prod-JSONEscapeSequence","_ref_66","_ref_67","_ref_68","_ref_69","_ref_70","prod-JSONEscapeCharacter","prod-JSONHexDigit","prod-JSONSourceCharacter"],"bibliography":["sec-bibliography","ecma-262"],"copyright-and-software-license":["sec-copyright-and-software-license","copyright-notice"]}`);
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

