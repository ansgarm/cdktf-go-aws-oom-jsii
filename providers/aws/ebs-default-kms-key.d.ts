import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EbsDefaultKmsKeyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_default_kms_key.html#key_arn EbsDefaultKmsKey#key_arn}.
     */
    readonly keyArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_default_kms_key.html aws_ebs_default_kms_key}.
 */
export declare class EbsDefaultKmsKey extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_default_kms_key.html aws_ebs_default_kms_key} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: EbsDefaultKmsKeyConfig);
    get id(): string;
    private _keyArn;
    get keyArn(): string;
    set keyArn(value: string);
    get keyArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
