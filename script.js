// Mad lib with
// Event listsener
document.getElementById("mad-lib-btn").addEventListener("click", buildMadLib);
// event Functon
function buildMadLib() {
  // input
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;

  // process${}
  let result =
    '" There are too many ' +
    pluralNoun +
    " on this " +
    adjective +
    ' airplane!", I screamed. somebody has to ' +
    verb +
    " on the" +
    noun +
    ' to solve this problem."';
  // output

  document.getElementById("result").innerHTML = result;
}
