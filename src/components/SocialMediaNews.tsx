import React from 'react';
import More from '../assets/icons/More';

export default function SocialMediaNews() {
  return (
    <section className="mt-8 pr-16 flex flex-col space-y-6">
      <div>
        <div className="flex items-center space-x-2 text-black1 text-sm cursor-pointer">
          <p>
            https://www.instagram.com{' '}
            <span className="text-darkGray2">› cristiano</span>
          </p>
          <More />
        </div>
        <p className="hover:underline text-blueLink text-xl cursor-pointer mt-2">
          Cristiano Ronaldo (@cristiano) • Instagram photos and videos
        </p>
        <p className="text-darkGray2 mt-1 text-sm">
          531m Followers, 529 Following, 3419 Posts - See Instagram photos and
          videos from <strong>Cristiano Ronaldo </strong>(@cristiano)
        </p>
      </div>
      <div className="flex space-x-4">
        <div>
          <div className="flex items-center space-x-2 text-black1 text-sm cursor-pointer">
            <p>
              https://www.mirror.co.uk
              <span className="text-darkGray2"> › Sport › Football </span>
            </p>
            <More />
          </div>
          <p className="hover:underline text-blueLink text-xl whitespace-nowrap cursor-pointer mt-2">
            Cristiano Ronaldo - latest news, net worth and boots - Mirror
          </p>
          <p className="text-darkGray2 mt-1 text-sm">
            11 hours ago — One of the world's best football players,{' '}
            <strong>Cristiano Ronaldo</strong> set many records while playing
            for Manchester United, Real Madrid, Juventus and the Portuguese ...
          </p>
        </div>
        <img
          className="rounded-lg w-[92px] h-[92px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsA6P8lnoFw9BNN0bzz3b2l7EImqBu7EH4vIzZOvAyocDEKhP26x5V&usqp=CAE&s"
        />
      </div>
      <div className="flex space-x-4">
        <div>
          <div className="flex items-center space-x-2 text-black1 text-sm cursor-pointer">
            <p>
              https://www.dailymail.co.uk
              <span className="text-darkGray2">
                {' '}
                › sport › cristianoronaldo
              </span>
            </p>
            <More />
          </div>
          <p className="hover:underline text-blueLink text-xl whitespace-nowrap cursor-pointer mt-2">
            Cristiano Ronaldo News, Stats and Updates - Daily Mail
          </p>
          <p className="text-darkGray2 mt-1 text-sm">
            3 hours ago — Get the latest on Al-Nassr forward{' '}
            <strong>Cristiano Ronaldo</strong> after the veteran joined the
            Saudi club in huge deal.
          </p>
        </div>
        <img
          className="rounded-lg w-[92px] h-[92px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqUMtRkQFFpE0H5t1ugQOZ9QbpL2XkqhTCENXymFcUICuqZb-_KQSm&usqp=CAE&s"
        />
      </div>
      <div className="flex space-x-4">
        <div>
          <div className="flex items-center space-x-2 text-black1 text-sm cursor-pointer">
            <p>
              https://www.realmadrid.com
              <span className="text-darkGray2"> › ... › Football legends</span>
            </p>
            <More />
          </div>
          <p className="hover:underline text-blueLink text-xl whitespace-nowrap cursor-pointer mt-2">
            Cristiano Ronaldo | Real Madrid CF
          </p>
          <p className="text-darkGray2 mt-1 text-sm">
            <strong>Cristiano Ronaldo</strong> is a part of Real Madrid's legacy
            and will forever be remember as one of the great icons throughout
            the club's history.
          </p>
        </div>
        <img
          className="rounded-lg w-[92px] h-[92px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsA6P8lnoFw9BNN0bzz3b2l7EImqBu7EH4vIzZOvAyocDEKhP26x5V&usqp=CAE&s"
        />
      </div>
      <div>
        <div className="flex items-center space-x-2 text-black1 text-sm cursor-pointer">
          <p>
            https://www.transfermarkt.com
            <span className="text-darkGray2"> › profil › spieler</span>
          </p>
          <More />
        </div>
        <p className="hover:underline text-blueLink text-xl cursor-pointer mt-2">
          Cristiano Ronaldo - Player profile 22/23 - Transfermarkt
        </p>
        <p className="text-darkGray2 mt-1 text-sm">
          <strong>Cristiano Ronaldo</strong>, 37, from Portugal ➤ Al-Nassr FC,
          since 2022 ➤ Centre-Forward ➤ Market value: €20.00m ➤ * Feb 5, 1985 in
          Funchal, Portugal.
        </p>
      </div>
      <div>
        <div className="flex items-center space-x-2 text-black1 text-sm cursor-pointer">
          <p>
            https://fbref.com
            <span className="text-darkGray2">› FB Home Page › Players</span>
          </p>
          <More />
        </div>
        <p className="hover:underline text-blueLink text-xl cursor-pointer mt-2">
          Cristiano Ronaldo Stats, Goals, Records, Assists ... - FBref.com
        </p>
        <p className="text-darkGray2 mt-1 text-sm">
          Check out the latest domestic and international stats, match logs,
          goals, height, weight and more for <strong>Cristiano Ronaldo</strong>{' '}
          playing for Portugal men's national ...
        </p>
      </div>
    </section>
  );
}
