import Image from 'next/image'
import Link from 'next/link'
import { Spacer } from '../Spacer';
import { TextLinkButton } from '../TextLinkButton';
import { PlayIcon } from '../Icons';
import BenImage from "../../public/ben-london-2021-portrait.jpg";
import { Totaliser } from '../Totaliser';

export const Aside = ({ hide = false }) => {
  return (
    <div className={hide ? "hidden md:block" : "block" }>
      <div className="px-8 md:px-0">
        <h1 className="text-5xl">
          <Link href="/mix">
            <a className="text-gt-red focus:text-gt-pink hover:text-gt-pink font-bold">
              <span className="block border-b-8 border-gt-pink py-1.5">Ben’s</span>
              <span className="block border-b-8 border-gt-pink py-1.5">London</span>
              <span className="block border-b-8 border-gt-pink py-1.5">Marathon</span>
              <span className="block border-b-8 border-gt-pink py-1.5">
                <span>Mix</span>
                <span className="inline-block pl-1.5"><PlayIcon /></span>
              </span>
            </a>
          </Link>
        </h1>
      </div>
      <div className="md:hidden h-8"></div>
      <div className="md:hidden">
        <Image src={BenImage} alt="Photo of Ben ready to run while wearing the Statue of Liberty crown" layout="responsive" />
      </div>
      <div className="px-8 md:px-0">
        <Spacer size={8} />
        <p className="text-2xl text-gt-blue">Use music and your wallet to support Ben as he runs for Stonewall UK.</p>
        <Spacer size={8} />
        <TextLinkButton href="/donate">Give money + music</TextLinkButton>
        <div className="h-4"></div>
        <Link href="/why">
          <a className="text-gt-blue focus:text-gt-light-blue hover:text-gt-light-blue underline">Why am I doing this?</a>
        </Link>
        <Spacer size={8} />
        <div className="h-2 bg-gt-blue"></div>
        <Spacer size={8} />
        <Totaliser />
        <div className="h-8"></div>
        <p>Powered by Good Tunes</p>
      </div>
    </div>
  );
}