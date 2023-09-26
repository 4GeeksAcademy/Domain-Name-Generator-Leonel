/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net", ".us", ".io"];

  const getDomain = (pronoun, adj, noun) => {
    let domainList = [];
    let stringDomain = "";

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          stringDomain = pronoun[i] + adj[j] + noun[k];
          domainList.push(stringDomain);
        }
      }
    }
    return domainList;
  };

  const domainListFinal = getDomain(pronoun, adj, noun);

  const getExtensionCom = (domainListFinal) => {
    console.log("\n \t \t Generador de Nombres de Dominios\n \t");

    let arrExtension = [];
    let stringFinalDomin = "";
    for (let i = 0; i < domainListFinal.length; i++) {
      for (let j = 0; j < ext.length; j++) {
        stringFinalDomin = domainListFinal[i] + ext[j];
        console.log(`\t \t \t${stringFinalDomin}\t`);
        // arrExtension.push(stringFinalDomin)
      }
    }
    return arrExtension;
  };

  const domainHacks = (domainListFinal) => {
    stringHack = "";
    stringContainerArr = "";
    console.log("");
    console.log(
      "\t Generador de Nombres de Dominios en un Domain Hack B)\n \t"
    );
    console.log("");
    for (i = 0; i < domainListFinal.length; i++) {
      stringContainerArr = domainListFinal[i];
      stringHack =
        stringContainerArr.slice(0, domainListFinal[i].length - 2) +
        "." +
        stringContainerArr.slice(domainListFinal[i].length - 2);
      console.log(`\t \t \t${stringHack}\t`);
    }
  };

  getExtensionCom(domainListFinal);
  domainHacks(domainListFinal);
};
