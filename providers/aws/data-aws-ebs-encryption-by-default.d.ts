import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEbsEncryptionByDefaultConfig extends cdktf.TerraformMetaArguments {
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ebs_encryption_by_default.html aws_ebs_encryption_by_default}.
 */
export declare class DataAwsEbsEncryptionByDefault extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ebs_encryption_by_default.html aws_ebs_encryption_by_default} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEbsEncryptionByDefaultConfig);
    get enabled(): boolean;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
