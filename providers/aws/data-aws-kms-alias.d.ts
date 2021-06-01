import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsKmsAliasConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_alias.html#name DataAwsKmsAlias#name}.
     */
    readonly name: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_alias.html aws_kms_alias}.
 */
export declare class DataAwsKmsAlias extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_alias.html aws_kms_alias} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsKmsAliasConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get targetKeyArn(): string;
    get targetKeyId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
