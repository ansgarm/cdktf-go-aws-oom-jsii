import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCloudformationExportConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_export.html#name DataAwsCloudformationExport#name}.
     */
    readonly name: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_export.html aws_cloudformation_export}.
 */
export declare class DataAwsCloudformationExport extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_export.html aws_cloudformation_export} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsCloudformationExportConfig);
    get exportingStackId(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get value(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
