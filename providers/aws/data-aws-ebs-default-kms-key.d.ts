import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEbsDefaultKmsKeyConfig extends cdktf.TerraformMetaArguments {
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ebs_default_kms_key.html aws_ebs_default_kms_key}.
 */
export declare class DataAwsEbsDefaultKmsKey extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ebs_default_kms_key.html aws_ebs_default_kms_key} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEbsDefaultKmsKeyConfig);
    get id(): string;
    get keyArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
