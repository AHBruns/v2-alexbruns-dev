import React from "react";
import PageBorder from "../../components/PageBorder";

function Review() {
  return (
    <div className="max-w-5xl mx-auto my-20">
      <PageBorder>
        <div className="space-y-6 tracking-wider text-gray-700">
          <h1 className="text-4xl leading-none">
            Harry Potter and the Sorcerer's Stone
          </h1>
          <hr />
          <div className="space-y-2">
            <h2 className="p-2 text-2xl leading-none bg-gray-100">TLDR</h2>
            <p>
              This is the first book in J.K. Rowling's famous Harry Potter
              series. I read it because I'm trying to make reading a more
              consistent habit in my life and one suggestion for doing that is
              to read what you enjoy until you enjoy reading. The books is well
              written by YA standards, it accomplished my goal of getting me
              excited about reading again.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="p-2 text-2xl leading-none bg-gray-100">Why</h2>
            <p>
              At some point in the last year I stopped reading. I couldn't tell
              you why, but I went from reading fairly often (a book a week or
              so) to literally not even picking up a book over the month of
              February. As someone generally interested in being successful in
              life, that was a problem. If there's one thing that the vast
              majority of hyper-successful (how you define that hardly matters
              in this case) people do, it's read. Famously Warren Buffet reads
              for between 5 and 6 hours every day, Bill Gates reads ~50 books
              per year, Mark Zuckerberg reads a book every ~2 weeks, and
              according to Elon Musk's brother as a child Elon read ~2 books per
              day.
              <br />
              <br />
              The point is, not reading is not really an option if you want to
              be successful, or at the very least, it puts one at a massive
              disadvantage. So, with this in mind, I decided that to start
              reading consistently again.
              <br />
              <br />
              So, how did I do this? Well, unsurprisingly, the answer was to get
              a book and read it -- thank you for coming to my Ted Talk.
              <br />
              <br />
              In all seriousness, I choose a childhood favorite of mine that I
              knew would be quick and easy for a pretty specific reason. Naval
              Ravikant, founder of Angel List turned twitter cult leader, once
              said:
              <q className="block px-4 py-1 mx-4 my-2 text-lg font-semibold leading-snug tracking-widest bg-gray-100 border-l-4 border-gray-700 /w-max-content">
                Read what you love until you love reading.
              </q>
              I think he's right. In fact, I think his advice is a lot more
              general than it might seem at first. Reading may be a good
              example, but the advice applies to just about any skill. Want to
              learn programming? Code what you enjoy (stupid web apps,
              meaningless suduko solvers, etc.) until you enjoy programming.
              <br />
              <br />
              Ask any skilled programmer and they'll tell you that this is how
              you really learn to program. Books are necessary and classes can
              certainly help, but if you don't actual write code you won't get
              better, and you won't initially write code if you don't like the
              project you're building. This is all to say, I chose Harry Potter
              not because I'm secretly a nerdy 10 year old boy (well...), but
              because I needed to bootstrap my habit.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="p-2 text-2xl leading-none bg-gray-100">Review</h2>
            <p>
              Okay, so this is where I'd normally give a review of the book and
              note things that I took away from it, but because I clearly didn't
              read this book for deep truths or life lessons, I'm just gunna say
              this:
              <br />
              <br />I enjoyed it, and it served its purpose. If you're in a
              similar position to me and liked Harry Potter as a child, it's a
              great candidate for kick-starting your reading habit.
            </p>
          </div>
        </div>
      </PageBorder>
    </div>
  );
}

export default Review;
