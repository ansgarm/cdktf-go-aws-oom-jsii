import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCloudformationStackConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack.html#name DataAwsCloudformationStack#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack.html#tags DataAwsCloudformationStack#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack.html aws_cloudformation_stack}.
 */
export declare class DataAwsCloudformationStack extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack.html aws_cloudformation_stack} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsCloudformationStackConfig);
    get capabilities(): string[];
    get description(): string;
    get disableRollback(): boolean;
    get iamRoleArn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get notificationArns(): string[];
    outputs(key: string): string;
    parameters(key: string): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    get templateBody(): string;
    get timeoutInMinutes(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
