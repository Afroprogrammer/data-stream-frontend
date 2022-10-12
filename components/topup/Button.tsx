

const Button = ({validate, verify} :any) => {
  return (
    <button
        onClick={verify}
        disabled={validate ? false: true}
        type='button'
        className="flex w-full uppercase justify-center rounded-sm border border-transparent bg-indigo-600 py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-400"
        >
        Submit
    </button>
  )
}

export default Button
