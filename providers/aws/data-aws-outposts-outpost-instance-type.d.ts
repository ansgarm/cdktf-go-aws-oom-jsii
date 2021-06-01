import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsOutpostsOutpostInstanceTypeConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type.html#arn DataAwsOutpostsOutpostInstanceType#arn}.
     */
    readonly arn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type.html#instance_type DataAwsOutpostsOutpostInstanceType#instance_type}.
     */
    readonly instanceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type.html#preferred_instance_types DataAwsOutpostsOutpostInstanceType#preferred_instance_types}.
     */
    readonly preferredInstanceTypes?: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type.html aws_outposts_outpost_instance_type}.
 */
export declare class DataAwsOutpostsOutpostInstanceType extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type.html aws_outposts_outpost_instance_type} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsOutpostsOutpostInstanceTypeConfig);
    private _arn;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    get id(): string;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _preferredInstanceTypes?;
    get preferredInstanceTypes(): string[];
    set preferredInstanceTypes(value: string[]);
    resetPreferredInstanceTypes(): void;
    get preferredInstanceTypesInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
