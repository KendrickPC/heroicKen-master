/* feedreader.js*/
$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('should have a url', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        it('should have a name', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    describe('The menu', function() {

        var bodyClass = function() {
            return $('body').hasClass('menu-hidden');
        };
        var menuInvisibility = bodyClass(); //can't pass func into "expect", it must be a var and it must be called

        it('should be hidden by default', function() {
            expect(menuInvisibility).toBe(true);
        });

        it('should change when menu icon is clicked', function() {
            var menuIcon = $('.menu-icon-link');
            expect(document.body.classList.contains('menu-hidden')).toBeTruthy();
            menuIcon.click();
            expect(document.body.classList.contains('menu-hidden')).toBeFalsy();
            menuIcon.click();
            expect(document.body.classList.contains('menu-hidden')).toBeTruthy();
        });
    });
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('should be in feed container after loadFeed is done', function() {
            var feeds = $('.feed .entry');
            expect(feeds.length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function() {
        var feed0,
            feed1;
        /*load a feed, store the info*/
         beforeEach(function(done) {
            loadFeed(1, function() {
                feed0 = $('.feed').children().text();
                done();
            });
        });
         /*load another feed, store the info and compare to the first, they should be dif*/
        it('content changes', function(done) {
            loadFeed(0, function() {
                feed1 = $('.feed').children().text();
                expect(feed1).not.toEqual(feed0);
                done();
            });

        });
    });
}());