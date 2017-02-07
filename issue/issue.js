/*
 * 
 *
 *
 */

const test = require("./../index");


test("First suite", t => {

    t.test("subsuite", t => {
    
        t.pass();
        t.end();
    
    });

    t.end();

});

setTimeout(() => {

    
    test("Second suite", t => {

        t.test("subsuite", t => {

            t.pass();
            t.end();

        });

        t.end();

    });


});
