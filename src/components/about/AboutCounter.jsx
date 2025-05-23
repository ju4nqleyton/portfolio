import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
  useCountUp({ ref: 'javascriptCounter', end: 300, duration: 2 });
  useCountUp({ ref: 'reactCounter', end: 150, duration: 2 });
  useCountUp({ ref: 'nodeCounter', end: 100, duration: 2 });
  useCountUp({ ref: 'typescriptCounter', end: 80, duration: 2 });
  useCountUp({ ref: 'tailwindCounter', end: 80, duration: 2 });

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        <CounterItem
          title="JavaScript"
          counter={<span id="javascriptCounter" />}
          measurement="+ horas"
        />
        <CounterItem
          title="React"
          counter={<span id="reactCounter" />}
          measurement="+ horas"
        />
        <CounterItem
          title="Node.js"
          counter={<span id="nodeCounter" />}
          measurement="+ horas"
        />
        <CounterItem
          title="TypeScript"
          counter={<span id="typescriptCounter" />}
          measurement="+ horas"
        />
        <CounterItem
          title="Tailwind CSS"
          counter={<span id="tailwindCounter" />}
          measurement="+ horas"
        />
      </div>
    </div>
  );
};

export default AboutCounter;
