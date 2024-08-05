import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
  useCountUp({ ref: 'javascriptCounter', end: 220, duration: 2 });
  useCountUp({ ref: 'reactCounter', end: 120, duration: 2 });
  useCountUp({ ref: 'nodeCounter', end: 80, duration: 2 });
  useCountUp({ ref: 'typescriptCounter', end: 60, duration: 2 });
  useCountUp({ ref: 'tailwindCounter', end: 60, duration: 2 });

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        <CounterItem
          title="JavaScript"
          counter={<span id="javascriptCounter" />}
          measurement="+ hours"
        />
        <CounterItem
          title="React"
          counter={<span id="reactCounter" />}
          measurement="+ hours"
        />
        <CounterItem
          title="Node.js"
          counter={<span id="nodeCounter" />}
          measurement="+ hours"
        />
        <CounterItem
          title="TypeScript"
          counter={<span id="typescriptCounter" />}
          measurement="+ hours"
        />
        <CounterItem
          title="Tailwind CSS"
          counter={<span id="tailwindCounter" />}
          measurement="+ hours"
        />
      </div>
    </div>
  );
};

export default AboutCounter;
