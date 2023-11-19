export const ZhGetStartedP = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className='section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block text-black tracking-widest'>
        联系我们
      </h2>
      <p className={'text-gray-700 mb-6 max-w-[520px] text-left tracking-wider text-lg'}>
        如果您对我们的服务感兴趣，我们希望更加了解您的情况去提供更贴切您需求的建议。请点击下方按钮，以便我们通过简短的调查更好地认识您！
      </p>
      <p className={'text-left text-lg subtitle text-gray-700 tracking-wider'}>
        (以下问卷不会要求任何支付。)
      </p>
      <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all tracking-widest'>
        联系我们
      </button>
    </div>
  )
}
export default ZhGetStartedP