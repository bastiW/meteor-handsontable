if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.hello.helpers({
        counter: function () {
            return Session.get('counter');
        }
    });

    Template.hello.events({
        'click button': function () {


            var data = [
                    {
                        "car": "Mercedes A 160",
                        "year": 2011,
                        "price_usd": 8000,
                        "price_eur": 7000,

                    },

                    {
                        "car": "Audi A6",
                        "year": 2001,
                        "price_usd": 4000,
                        "price_eur": 5000,

                    }

                ]


                ;
            var container = document.getElementById('hot'), hot;


            hot = new Handsontable(container, {
                data: data,
                colHeaders: ['Car', 'Year', 'Price ($)', 'Price (€)'],
                minSpareRows: 1,
                colHeaders: true,
                contextMenu: true,
                columnSorting: true,

                columns: [
                    {
                        data: 'car'
                        // 1nd column is simple text, no special options here
                    },
                    {
                        data: 'year',
                        type: 'numeric'
                    },
                    {
                        data: 'price_usd',
                        type: 'numeric',
                        format: '$ 0,0.00',
                        language: 'en', // this is the default locale, set up for USD
                        allowEmpty: false
                    },
                    {
                        data: 'price_eur',
                        type: 'numeric',
                        format: '0,0.00 $',
                        language: 'de',
                    }
                ]

            });

        }
    });

    Template.hello.rendered = function () {
        if (!this.rendered) {


        }
    };
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
