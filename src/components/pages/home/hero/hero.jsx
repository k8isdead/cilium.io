import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import TwitterIcon from 'icons/twitter.inline.svg';
import YoutubeIcon from 'icons/youtube.inline.svg';
import illustration from 'images/hero-illustration.svg';

import CNCFLogo from './images/cncf.inline.svg';

const title =
  'eBPF-based <span>Networking</span>, <span>Observability</span>, and <span>Security</span>';
const description =
  'Cilium is an open source software for providing, securing and observing network connectivity between container workloads - cloud native, and fueled by the revolutionary Kernel technology eBPF.';

const Hero = () => (
  <section className="pt-5 overflow-hidden md:pt-16 lg:pt-32">
    <Container className="grid grid-cols-12 md:gap-x-8">
      <div className="col-span-full lg:-mr-8 lg:col-span-6 2xl:col-span-7 2xl:mr-0">
        <CNCFLogo />
        <Heading
          className="max-w-2xl mt-4 highlight-words"
          tag="h1"
          size="lg"
          fontWeight="normal"
          asHTML
        >
          {title}
        </Heading>
        <div
          className="mt-4 md:mt-5 space-y-5 md:text-lg with-link-primary lg:max-w-[490px] xl:max-w-[592px]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="flex flex-col items-start mt-4 xl:flex-row xl:items-center md:mt-5 ">
          <Button to="/learn">What is Cilium?</Button>
          <div className="flex flex-col mt-6 space-y-4 xl:ml-11 xl:mt-0 sm:space-y-0 sm:space-x-6 sm:flex-row">
            <Link
              className="flex items-center space-x-3"
              to="https://twitter.com/ciliumproject"
              target="_blank"
              rel="noopener noreferrer"
              type="text"
              theme="primary-normal-case"
            >
              <TwitterIcon className="w-5 h-auto" />
              <span>FOLLOW CILIUM</span>
            </Link>
            <Link
              className="flex items-center space-x-3"
              to="https://www.youtube.com/channel/UCJFUxkVQTBJh3LD1wYBWvuQ"
              target="_blank"
              rel="noopener noreferrer"
              type="text"
              theme="primary-normal-case"
            >
              <YoutubeIcon className="w-auto h-4 xs:h-6" />
              <span>eBPF & CILIUM STREAM</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center col-span-full lg:col-span-6 2xl:col-span-5 2xl:-ml-8">
        <img
          className="w-full h-full mt-4 lg:h-auto md:mt-10 lg:-right-10 lg:max-w-max lg:absolute top-0 xl:-top-16 lg:mt-0 lg:w-[580px] xl:w-max xl:right-auto xl:left-0"
          src={illustration}
          alt=""
        />
      </div>
    </Container>
  </section>
);

export default Hero;
