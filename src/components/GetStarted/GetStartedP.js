export const GetStartedP = () => {
    return (
      <div className="flex flex-col items-center text-center">
        <h2 className='section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block text-black'>
            Get Started
        </h2>
        <p className={'text-gray-700 mb-6 max-w-[520px] text-left'}>
            If you're interested in our services, we'd like to get to know you a little better and offer our recommendations on how we might move forward together. <strong>Click the button below</strong> so we can get acquainted with a brief survey!
        </p>
        <p className={'text-left subtitle text-gray-700'}>
            (Don't worry: we won't charge you or ask you for any personal information.)
        </p>
        <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>
            Get Started
        </button>
      </div>
    )
  }
  export default GetStartedP