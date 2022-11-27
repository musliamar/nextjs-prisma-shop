type Props = {
    attributes: string
}

const Attributes = ({attributes}: Props) => {

    const attributesRaw = JSON.parse(attributes)
    const attributesArray = [];

    for(const a in attributesRaw)
        attributesArray.push({name: a, value: attributesRaw[a]});
        
    return(
        <>
        {attributesArray.map((attribute) => {

            const {name, value} = attribute;
            return(
                <div key={name}>
              <h3 className="text-md font-medium text-gray-900 mt-5 uppercase">{name}</h3>
      
              <fieldset className="mt-4">
                <legend className="sr-only">Choose a color</legend>
                <div className="flex items-center space-x-3">
                  
                {typeof value !== 'string' 
                ? value.map((v: string) =>
                  
                  (name === 'color' 
                  ? <label key={v} className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                    <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                    <span id="color-choice-0-label" className="sr-only"> White </span>
                    <span aria-hidden="true" className={`h-8 w-8 bg-[${v}] border border-black border-opacity-10 rounded-full`}></span>
                    </label>
                  :  <label key={v} className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none bg-white shadow-sm text-gray-900 cursor-pointer">
                    <input type="radio" name="size-choice" value="XXS" className="sr-only" aria-labelledby="size-choice-0-label" />
                    <span id="size-choice-0-label">{v}</span>
                    <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                  </label>
                  ))
                : name === 'color' 
                  ? <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center ring-gray-400">
                    <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                    <span id="color-choice-0-label" className="sr-only"> White </span>
                    <span aria-hidden="true" className={'h-8 w-8 bg-['+{value}+'] border border-black border-opacity-10 rounded-full'}></span>
                  </label>
                  :  <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase bg-white shadow-sm text-gray-900">
                  <input type="radio" name="size-choice" value="XXS" className="sr-only" aria-labelledby="size-choice-0-label" />
                  <span id="size-choice-0-label">{value}</span>
                  <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                  </label>}
                </div>
              </fieldset>
            </div>)
        })}
        </>)
        
}
  
export default Attributes
  