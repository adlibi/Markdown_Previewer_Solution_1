$(document).ready(function(){
    marked.setOptions({
        renderer: new marked.Renderer(),
        // highlight: function(code, lang) {
        //   const hljs = require('highlight.js');
        //   const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        //   return hljs.highlight(code, { language }).value;
        // },
        langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
        pedantic: false,
        gfm: true,
        breaks: true,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
      });

    let inputTxt = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here\'s some other cool stuff:\n"+
    "\nHere's some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\n"+
    "function anotherExample(firstLine, lastLine) {\nif (firstLine == '```' && lastLine == '``\`')'+ '{\nreturn multiLineCode\;\n   }\n }\n```"+
    "\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~."+
    "\n\nThere\'s also [links](https://www.freecodecamp.org), and\n >Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\n"+
    "| Wild Header  |&nbsp;Crazy Header&nbsp;&nbsp;&nbsp;|  Another Header?   | \n | --------| --------- | -----------|\n | Your content can |  be here, and it  |can be here...\nAnd here. | Okay. | I think we get it. |\n\n"+
    "- And of course there are lists.\n\n      - Some are bulleted.\n\n        - With different indentation levels.\n\n          - That look like this.\n\n"+
    "1. And there are numbered lists too.\n2. Use just 1s if you want!\n\n3. And last but not least, let's not forget embedded images:"+
    "\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";
    
    $('#editor').val(inputTxt);
    let html = marked.parse(inputTxt);
    $('#preview').html(html);

    $('button').click(function(e){
        let btnID = e.currentTarget.id;
        switch (btnID) {
            case 'e-exp': {$('#e-exp').toggleClass('hide');
                            $('#e-com').toggleClass('hide');
                            $('#preview-pane').toggleClass('hide');
                            $('textarea').attr('rows', '40');
                            break;
                            }
            case 'e-com': { $('#e-com').toggleClass('hide');
                            $('#e-exp').toggleClass('hide');
                            $('#preview-pane').toggleClass('hide');
                            $('textarea').attr('rows','10');
                            break;
                    }
            case 'p-exp': {$('#p-exp').toggleClass('hide');
                            $('#p-com').toggleClass('hide');
                            $('#editor-pane').toggleClass('hide');
                            break;
                        }
            case 'p-com': {$('#p-exp').toggleClass('hide');
                            $('#p-com').toggleClass('hide');
                            $('#editor-pane').toggleClass('hide');
                            break;

            }
        }
    })

    $('#editor').keyup(function(){
        let tmp = $(this).val();
        let parseTxt = marked.parse(tmp);
        $('#preview').html(parseTxt);
    })
})
