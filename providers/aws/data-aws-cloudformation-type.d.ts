import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCloudformationTypeConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_type.html#type DataAwsCloudformationType#type}.
     */
    readonly type?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_type.html#type_name DataAwsCloudformationType#type_name}.
     */
    readonly typeName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_type.html#version_id DataAwsCloudformationType#version_id}.
     */
    readonly versionId?: string;
}
export declare class DataAwsCloudformationTypeLoggingConfig extends cdktf.ComplexComputedList {
    get logGroupName(): string;
    get logRoleArn(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_type.html aws_cloudformation_type}.
 */
export declare class DataAwsCloudformationType extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_type.html aws_cloudformation_type} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsCloudformationTypeConfig);
    get arn(): string;
    get defaultVersionId(): string;
    get deprecatedStatus(): string;
    get description(): string;
    get documentationUrl(): string;
    get executionRoleArn(): string;
    get id(): string;
    get isDefaultVersion(): boolean;
    loggingConfig(index: string): DataAwsCloudformationTypeLoggingConfig;
    get provisioningType(): string;
    get schema(): string;
    get sourceUrl(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    get typeArn(): string;
    private _typeName?;
    get typeName(): string;
    set typeName(value: string);
    resetTypeName(): void;
    get typeNameInput(): string | undefined;
    private _versionId?;
    get versionId(): string;
    set versionId(value: string);
    resetVersionId(): void;
    get versionIdInput(): string | undefined;
    get visibility(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
