import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";



const CommonForm = ({ formControls, formData, setFormData, onSubmit, buttonText }) => {

    function renderInputsByComponentType (getContorlItem){
        let element = null;
        const value = formData[getContorlItem?.name] || ''
        switch (getContorlItem.componentType) {
            case 'input':
                element = <Input
                    name={getContorlItem.name}
                    placeholder={getContorlItem.placeholder}
                    id={getContorlItem.name}
                    type={getContorlItem.type}
                    value={value}
                    onChange={event => setFormData({
                        ...formData,
                        [getContorlItem.name]: event.target.value,
                    })
                    }
                />
                break;
            case 'select':
                element = (
                    <Select onValueChange={(value) => setFormData({
                        ...formData,
                        [getContorlItem.name]: value
                    })}
                        value={value}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={getContorlItem.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                getContorlItem?.options &&
                                    getContorlItem.options.length > 0 ?
                                    getContorlItem.options.map(optionItem => <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>) : null
                            }
                        </SelectContent>
                    </Select>
                )
                break;
            case 'textarea':
                element = (
                    <Textarea
                        name={getContorlItem.name}
                        placeholder={getContorlItem.placeholder}
                        id={getContorlItem.id}
                        value={value}
                        onChange={event => setFormData({
                            ...formData,
                            [getContorlItem.name]: event.target.value,
                        })
                        }
                    />
                )
                break;

            default:
                element = <Input
                    name={getContorlItem.name}
                    placeholder={getContorlItem.placeholder}
                    id={getContorlItem.name}
                    type={getContorlItem.type}
                    value={value}
                    onChange={event => setFormData({
                        ...formData,
                        [getContorlItem.name]: event.target.value,
                    })
                    }
                />
                break;
        }
        return element
    }

    return (
        <form onSubmit={onsubmit}>
            <div className="flex flex-col gap-1">
                {
                    formControls.map(contorlItem => <div key={contorlItem?.name} className="grid w-full gap-1.5">
                        <Label className="mb-1 ">{contorlItem?.label}</Label>
                        {
                            renderInputsByComponentType(contorlItem)
                        }
                    </div>)
                }
            </div>
            <Button type="Submit" className="mt-2 w-full">{buttonText || 'Submit'}</Button>
        </form>
    );
};

export default CommonForm;