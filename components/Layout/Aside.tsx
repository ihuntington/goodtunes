import Image from 'next/image'
import Link from 'next/link'
import { Spacer } from '../Spacer';
import { TextLinkButton } from '../TextLinkButton';
import { PlayIcon } from '../Icons';
import BenImage from "../../public/ben.jpg";

export const Aside = () => {
  return (
    <div className="px-8 md:px-0">
      <h1 className="text-5xl text-gt-blue">
        <span className="block border-b-8 border-gt-green py-1.5">Ben`s</span>
        <span className="block border-b-8 border-gt-green py-1.5">London</span>
        <span className="block border-b-8 border-gt-green py-1.5">Marathon</span>
        <span className="block border-b-8 border-gt-green py-1.5">Mix <PlayIcon /></span>
      </h1>
      <div className="md:hidden h-8"></div>
      <div className="md:hidden">
        <Image src={BenImage} alt="Photo of Ben ready to run while wearing the Statue of Liberty crown" layout="responsive" />
      </div>
      <Spacer size={8} />
      <p className="text-2xl">Use music and your wallet to support Ben as he runs for Stonewall.</p>
      <Spacer size={8} />
      <TextLinkButton href="/donate">Give money + music</TextLinkButton>
      <div className="h-4"></div>
      <Link href="/wtf">
        <a className="text-gt-blue">WTF am I doing this?</a>
      </Link>
      <Spacer size={8} />
      <div className="h-2 bg-gt-blue"></div>
      <Spacer size={8} />
      <p className="text-2xl">Ben`s reached</p>
      <div className="h-4"></div>
      <p className="text-gt-green text-5xl">$0</p>
      <div className="h-4"></div>
      <p>X days to go</p>
      <div className="h-8"></div>
    </div>
  );
}