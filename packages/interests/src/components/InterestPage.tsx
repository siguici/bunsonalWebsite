
function InterestPage(props:any) {

    return (<div class="i-w-full i-h-full i-flex i-flex-col i-justify-start i-items-center i-text-center i-text-regal-blue-100 i-py-20">
        <div class="i-flex i-flex-col i-justify-center i-items-center i-absolute i-top-20 i-h-4/6 i-overflow-y-hidden i-space-y-5 i-mx-10 lg:i-mx-32">
            {props.icon}
            <h1 class="i-text-5xl i-font-bold i-text-center">{props.title}</h1>
            <p class="i-text-xl i-mt-5 i-text-center i-overflow-y-scroll i-no-scrollbar lg:i-mx-32" id="pg-content">{props.content}</p>
        </div>
    </div>)
}

export default InterestPage;
