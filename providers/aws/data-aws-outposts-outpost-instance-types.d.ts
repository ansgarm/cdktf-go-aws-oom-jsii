import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsOutpostsOutpostInstanceTypesConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_types.html#arn DataAwsOutpostsOutpostInstanceTypes#arn}.
     */
    readonly arn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_types.html aws_outposts_outpost_instance_types}.
 */
export declare class DataAwsOutpostsOutpostInstanceTypes extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_types.html aws_outposts_outpost_instance_types} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsOutpostsOutpostInstanceTypesConfig);
    private _arn;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    get id(): string;
    get instanceTypes(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
