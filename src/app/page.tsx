import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import star from '../../public/icon-star.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='bg-white md:w-[520px] rounded-xl p-6 absolute top-40 font-workSans '>
      <div className='flex items-center gap-4 mb-5'>
        {' '}
        <Image src={star} alt='' />
        <h1 className='text-4xl font-bold text-eggplant '>FAQs</h1>
      </div>
      <Accordion type='multiple'>
        <AccordionItem value='question-1'>
          <AccordionTrigger className='text-purpleTauple '>
            What is Frontend Mentor, and how will it help me?
          </AccordionTrigger>
          <AccordionContent className='max-w-full text-purpleTauple'>
            Frontend Mentor offers realistic coding challenges to help
            developers improve their frontend coding skills with projects in
            HTML, CSS, and JavaScript. It&apos;s suitable for all levels and
            ideal for portfolio building.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='question-2'>
          <AccordionTrigger className='text-purpleTauple'>
            Is frontend Mentor free?
          </AccordionTrigger>
          <AccordionContent className='text-purpleTauple'>
            Yes, Frontend Mentor offers both free and premium coding challenges,
            with the free option providing access to a range of projects
            suitable for all skill levels.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='question-3'>
          <AccordionTrigger className='text-purpleTauple'>
            Can I use Frontend Mentor projects in my portfolio?
          </AccordionTrigger>
          <AccordionContent className='text-purpleTauple'>
            Yes, you can use projects completed on Frontend Mentor in your
            portfolio. It&apos;s an excellent way to showcase your skills to
            potential employers!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='question-4'>
          <AccordionTrigger className='text-purpleTauple'>
            How can I get help if I&apos;m stuck on a challenge?
          </AccordionTrigger>
          <AccordionContent className='text-purpleTauple'>
            The best place to get help is inside Frontend Mentor&apos;s Discord
            community. There&apos;s a help channel where you can ask questions
            and seek support from other community members.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
