import Button from './button';
// eslint-disable-next-line react/prop-types
function Card() {
    return (
        <div className='h-full flex justify-center items-center'>
            <div className='h-100 w-100 bg-white rounded-2xl flex flex-col justify-center items-center p-4'>
                <span className='text-xl font-bold mb-4'>Password Generator</span>
                <input type='text' className='bg-gray-200 h-12 w-full rounded-2xl outline-sky-300 mb-4 px-4' />
                <Button height='11' width='3' content='Copy' />
                <div className='w-full mt-4'>
                    <span className='block mb-2'>Password length (4-20)</span>
                    <input type='range' className='w-full mb-4 accent-blue-500' />
                    <div className='flex justify-between items-center'>
                        <div>
                            <span className='mr-2'>Include numbers</span>
                            <input type='checkbox' className='accent-blue-500' />
                        </div>
                        <div>
                            <span className='mr-2'>Include symbols</span>
                            <input type='checkbox' className='accent-blue-500' />
                        </div>
                    </div>
                </div>
                <Button width='90' content='Generate'  className='mt-4' />
            </div>
        </div>
    );
}
export default Card;
