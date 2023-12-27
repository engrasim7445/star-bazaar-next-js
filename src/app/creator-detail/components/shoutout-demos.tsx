import { Videoz } from '@/shared';

export function ShoutoutDemos() {
  return (
    <div
      className="overflow-x-auto col-span-12 lg:col-span-7 mb-3 pb-2 order-1 me-3 pe-3 row-span-1 justify-center items-center"
      style={{ height: '270px' }}
    >
      <div style={{ width: 'max-content' }}>
        <ShoutoutDemo
          poster="https://dqc65nwcqwvpl.cloudfront.net/videowatermark_1693053673058042.png"
          src="https://dqc65nwcqwvpl.cloudfront.net/videowatermark_1693053673058042.mp4"
        />
        <ShoutoutDemo
          poster="https://dqc65nwcqwvpl.cloudfront.net/videowatermark_1701157459558387.png"
          src="https://dqc65nwcqwvpl.cloudfront.net/videowatermark_1701157459558387.mp4"
        />
        <ShoutoutDemo
          poster="https://dqc65nwcqwvpl.cloudfront.net/videowatermark_1701157459558387.png"
          src="https://dqc65nwcqwvpl.cloudfront.net/videowatermark_1701157459558387.mp4"
        />
        <ShoutoutDemo
          poster="https://dqc65nwcqwvpl.cloudfront.net/videowatermark_1701157459558387.png"
          src="https://dqc65nwcqwvpl.cloudfront.net/videowatermark_1701157459558387.mp4"
        />
        <ShoutoutDemo
          poster="https://dqc65nwcqwvpl.cloudfront.net/videowatermark_1693569407883632.png"
          src="https://dqc65nwcqwvpl.cloudfront.net/1692963045312-Intro%20Video%20-%20Hiba%20Ali%20Khan.mp4"
        />
        <ShoutoutDemo
          poster="https://dqc65nwcqwvpl.cloudfront.net/videowatermark_1700465312281941.png"
          src="https://dqc65nwcqwvpl.cloudfront.net/videowatermark_1700465312281941.mp4"
        />
      </div>
    </div>
  );
}

function ShoutoutDemo({ poster, src }: any) {
  return (
    <span
      className="flex justify-center items-center me-3 bg-blue2 rounded-xl float-left"
      style={{ width: '140px', height: '250px' }}
    >
      <Videoz src={src} poster={poster} />
    </span>
  );
}
