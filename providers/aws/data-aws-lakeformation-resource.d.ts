import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLakeformationResourceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_resource.html#arn DataAwsLakeformationResource#arn}.
     */
    readonly arn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_resource.html aws_lakeformation_resource}.
 */
export declare class DataAwsLakeformationResource extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_resource.html aws_lakeformation_resource} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsLakeformationResourceConfig);
    private _arn;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    get id(): string;
    get lastModified(): string;
    get roleArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
